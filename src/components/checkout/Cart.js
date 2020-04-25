import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import PayPalExpressButton from 'react-paypal-express-checkout';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 450,
        borderBottom: '2px solid #3f51b5',
        paddingBottom: 8,
        marginTop: 24,
        marginBottom: 24,
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
    customizeBox: {
        paddingTop: 26,
        display: 'flex',
    },
    itemActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    shippingFee: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    summaryOrder: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: 8,
    },
    total: {
        fontWeight: 700,
    },
});

const API = 'https://0n6fj67t7l.execute-api.us-west-1.amazonaws.com/dev/mail';
const header = {
    'Content-Type': 'application/json',
};

const Cart = ({ orders, removeOrder, resetOrders, amount }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const classes = useStyles();
    const [paypalError, setPaypalError] = useState(false);
    const [checkedOut, setCheckedOut] = useState(false);
    const shippingPrice = 5;

    let env = 'production';
    let currency = 'USD';
    const maskPrice = amount < 50 ? 10 : 6;
    const shippingFee = amount < 5 ? shippingPrice : 0;
    let total = amount * maskPrice + shippingFee;
    const client = {
        sandbox:
            'AUG0EGjB_-KelBfT2WHzsIunv893fV-rOmpXfou5lP1y_-j5EfUXTQa-go5hebKNF3EnUetQn06iB9_V',
        production:
            'Aaha3zpLzRiJwzYbxP_IrkxWtN4IrE9nzvYC0JGXJcYxo2BmbtsJhHfNLuTpx2A7XBWlklKTXqXEJGgy',
    };

    const onSuccess = (payment) => {
        console.log('The payment has succeeded!', payment);
        const data = {
            orders,
            address: payment.address,
            email: payment.email,
        };
        axios.post(API, data, header);
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

    const renderCartTotals = () => {
        if (amount === 0) return <div>Your cart is empty</div>;
        return (
            <React.Fragment>
                <div className={classes.shippingFee}>
                    <p>
                        Shipping
                        <br />
                        <span
                            style={{
                                fontSize: '.7rem',
                                color: 'rgba(0,0,0,.5)',
                            }}
                        >
                            Free shipping for $50+ orders.
                        </span>
                    </p>
                    <p>${shippingFee}</p>
                </div>
                <div className={classes.summaryOrder}>
                    <div>
                        <p style={{ fontWeight: 700 }}>Total</p>
                    </div>
                    <p style={{ fontWeight: 700 }}>${total}</p>
                </div>
            </React.Fragment>
        );
    };

    if (checkedOut) return <Redirect to="/success" />;

    return (
        <Card className={classes.root} elevation={3}>
            <CardContent>
                <Typography variant="h4" component="h2">
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
                    <div className={classes.summaryOrder} key={index}>
                        <div style={{ display: 'flex' }}>
                            <Link to={`/item/${order.param}`}>
                                <img
                                    src={require(`../../img/SmallMaskPhotos/${order.img}`)}
                                    alt="Facemask"
                                    style={{ height: 'auto', width: '120px' }}
                                />
                            </Link>
                            <div style={{ padding: 9 }}>
                                <Typography variant="body1" component="h2">
                                    <Link
                                        style={{
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                        to={`/item/${order.param}`}
                                    >
                                        {order.amount}x {order.color} Design
                                    </Link>
                                </Typography>
                                <Typography variant="caption" component="h2">
                                    Size {order.size}
                                </Typography>
                            </div>
                        </div>
                        <p style={{ textAlign: 'right' }}>
                            ${order.amount * maskPrice} <br />{' '}
                            <span
                                style={{
                                    fontSize: '.7rem',
                                    color: 'red',
                                    cursor: 'pointer',
                                }}
                                onClick={() => removeOrder(order)}
                            >
                                Remove
                            </span>
                        </p>
                    </div>
                ))}
                {renderCartTotals()}
            </CardContent>

            <CardActions className={classes.itemActions}>
                <Button size="small" color="primary">
                    <Link to="/selection" className={classes.link}>
                        Back to Selection
                    </Link>
                </Button>
                {amount === 0 ? (
                    ''
                ) : (
                    <PayPalExpressButton
                        env={env}
                        client={client}
                        currency={currency}
                        total={total}
                        onError={onError}
                        onSuccess={onSuccess}
                        onCancel={onCancel}
                    />
                )}
            </CardActions>
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
