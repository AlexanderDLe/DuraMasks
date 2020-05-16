import React, { useEffect, useState } from 'react';
import keys from '../../config/keys';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { useMediaQuery } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 450,
        borderBottom: '2px solid #3f51b5',
        paddingBottom: 8,
        margin: 16,
    },
    media: {
        height: 350,
    },
    link: {
        color: '#3f51b5',
        textDecoration: 'none',
    },
    buttonLink: {
        color: 'white',
        textDecoration: 'none',
    },
    designItemName: {
        color: 'black',
        textDecoration: 'none',
    },
    customizeBox: {
        paddingTop: 26,
        display: 'flex',
    },
    removeButton: {
        fontSize: '.7rem',
        color: 'red',
        cursor: 'pointer',
    },
    itemActions: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    shippingCaption: {
        fontSize: '.7rem',
        color: 'rgba(0,0,0,.5)',
    },
    cartCalculation: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    total: {
        fontWeight: 700,
    },
    designImage: {
        height: 'auto',
        width: '120px',
    },
    cartTitle: {
        fontFamily: 'Open Sans',
    },
});

const calculateSubtotal = (orders) => {
    let subtotal = 0;
    for (let order of orders) {
        subtotal += order.price * order.amount;
    }
    return subtotal;
};

const API = keys.emailConfirmationAPI;
const header = {
    'Content-Type': 'application/json',
};

const Cart = ({ orders, removeOrder, resetOrders, amount, mode }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const classes = useStyles();
    const [paypalError, setPaypalError] = useState(false);
    const [checkedOut, setCheckedOut] = useState(false);

    const navMediaQuery600 = useMediaQuery('(min-width:600px)');

    // Checkout Configuration
    const currency = 'USD';
    const subtotal = calculateSubtotal(orders);
    const shippingFee = 0;
    let total = subtotal + shippingFee;
    let env = mode;
    const client = {
        sandbox: keys.paypalSandboxID,
        production: keys.paypalProductionID,
    };
    console.log(total);

    // Checkout Functionality
    const onSuccess = (details, data) => {
        const info = details.purchase_units[0];
        const address = {
            recipient_name: info.shipping.name.full_name,
            line1: info.shipping.address.address_line_1,
            line2: info.shipping.address.address_line_2,
            city: info.shipping.address.admin_area_2,
            state: info.shipping.address.admin_area_1,
            postal_code: info.shipping.address.postal_code,
            country_code: info.shipping.address.country_code,
        };
        const email = details.payer.email_address;
        const orderID = data.orderID;
        const amount = info.amount.value;
        const event = { orders, address, email, orderID, amount };

        console.log(amount);
        console.log(details);
        console.log(data);
        console.log(event);
        axios.post(API, event, header);
        resetOrders();
        setCheckedOut(true);
    };
    const onCancel = (data) => {
        console.log('The payment was canceled', data);
    };
    const onError = (err) => {
        console.log('There was an error', err);
        setPaypalError(true);
    };

    // Render Cart Calculations
    const renderCartTotals = () => {
        if (amount === 0)
            return <div style={{ paddingBottom: 8 }}>Your cart is empty</div>;
        return (
            <React.Fragment>
                <div className={classes.cartCalculation}>
                    <div style={{ paddingTop: 16 }}>
                        <p>Subtotal</p>
                    </div>
                    <p>${subtotal}</p>
                </div>
                <div className={classes.cartCalculation}>
                    <p>
                        Shipping
                        <br />
                        <span className={classes.shippingCaption}>
                            Free shipping for all domestic (US) orders.
                        </span>
                        <br />
                        <span className={classes.shippingCaption}>
                            Delivery will be between 3-7 business days.
                        </span>
                    </p>
                    <p>${shippingFee}</p>
                </div>
                <hr
                    style={{
                        border: 'none',
                        borderBottom: '1px solid rgba(0,0,0,.2)',
                    }}
                />
                <div className={classes.cartCalculation}>
                    <p style={{ fontWeight: 700 }}>Total</p>
                    <p style={{ fontWeight: 700 }}>${total}</p>
                </div>
            </React.Fragment>
        );
    };

    if (checkedOut) return <Redirect to="/success" />;

    return (
        <Card
            style={{ marginTop: navMediaQuery600 ? 40 : 16 }}
            className={classes.root}
            elevation={3}
        >
            <CardContent>
                <Typography
                    className={classes.cartTitle}
                    variant="h4"
                    component="h2"
                >
                    Cart
                </Typography>
            </CardContent>

            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ paddingBottom: 8 }}
                >
                    Order Details
                </Typography>

                {orders.map((order, index) => (
                    <div className={classes.cartCalculation} key={index}>
                        <div style={{ display: 'flex' }}>
                            <Link to={`/item/${order.param}`}>
                                <img
                                    src={require(`../../img/SmallMaskPhotos/${order.img}`)}
                                    alt="Facemask"
                                    className={classes.designImage}
                                />
                            </Link>
                            <div style={{ padding: 9 }}>
                                <Typography variant="body1" component="h2">
                                    <Link
                                        className={classes.designItemName}
                                        to={`/item/${order.param}`}
                                    >
                                        {order.amount}x {order.color}{' '}
                                        {order.type === 'Mask' ? 'Design' : ''}
                                    </Link>
                                </Typography>
                                <Typography variant="caption" component="h2">
                                    Size {order.size}
                                </Typography>
                            </div>
                        </div>
                        <p style={{ textAlign: 'right' }}>
                            ${order.price * order.amount} <br />{' '}
                            <span
                                className={classes.removeButton}
                                onClick={() => removeOrder(order)}
                            >
                                Remove
                            </span>
                        </p>
                    </div>
                ))}
                {renderCartTotals()}
            </CardContent>

            {amount === 0 ? (
                ''
            ) : (
                <div style={{ padding: '0px 16px' }}>
                    <PayPalButton
                        currency={currency}
                        amount={total}
                        onSuccess={onSuccess}
                        onError={onError}
                        options={{ clientId: client[env] }}
                        onCancel={onCancel}
                    />
                </div>
            )}
            <Button style={{ margin: '8px 16px' }} size="small" color="primary">
                <Link to="/selection" className={classes.link}>
                    Back to Selection
                </Link>
            </Button>
            {paypalError ? (
                <div className={classes.paypalError}>
                    Sorry, there was an error.
                </div>
            ) : (
                ''
            )}
        </Card>
    );
};

export default Cart;
