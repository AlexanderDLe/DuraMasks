import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PayPalExpressButton from 'react-paypal-express-checkout';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';
const API = 'https://0n6fj67t7l.execute-api.us-west-1.amazonaws.com/dev/mail';
const header = {
    'Content-Type': 'application/json',
};

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 420,
        borderBottom: '2px solid #3f51b5',
        paddingBottom: 8,
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
    summaryOrder: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: 8,
    },
    total: {
        fontWeight: 700,
    },
    paypalError: {
        paddingRight: 8,
        textAlign: 'right',
        color: 'red',
    },
    paypalAUP: {
        color: 'black !important',
        textDecoration: 'none',
    },
});

const Checkout = ({ orders, shippingInfo, resetOrders, amount }) => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [checkedOut, setCheckedOut] = useState(false);
    const [paypalError, setPaypalError] = useState(false);

    const onSuccess = (payment) => {
        console.log('The payment has succeeded!', payment);
        const data = {
            orders,
            shippingInfo,
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

    let env = 'sandbox';
    let currency = 'USD';
    let total = amount * 8;
    const client = {
        sandbox:
            'AUG0EGjB_-KelBfT2WHzsIunv893fV-rOmpXfou5lP1y_-j5EfUXTQa-go5hebKNF3EnUetQn06iB9_V',
        production:
            'Aaha3zpLzRiJwzYbxP_IrkxWtN4IrE9nzvYC0JGXJcYxo2BmbtsJhHfNLuTpx2A7XBWlklKTXqXEJGgy',
    };

    if (checkedOut) return <Redirect to="/success" />;

    return (
        <Card className={classes.root} elevation={3}>
            <CardContent>
                <Typography variant="h4" component="h2">
                    Place Order
                </Typography>
            </CardContent>

            <CardContent style={{ paddingBottom: 0 }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ paddingBottom: 8 }}
                >
                    Order Summary
                </Typography>

                {orders.map((order, index) => (
                    <div className={classes.summaryOrder} key={index}>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <Typography variant="body1" component="h2">
                                    {order.amount}x {order.color} Color
                                </Typography>
                                <Typography variant="caption" component="h2">
                                    {order.size} Size
                                </Typography>
                            </div>
                        </div>
                        <p>${order.amount * 8}</p>
                    </div>
                ))}
                <div className={classes.summaryOrder}>
                    <div>
                        <p style={{ fontWeight: 700 }}>Total</p>
                    </div>
                    <p style={{ fontWeight: 700 }}>
                        $
                        {orders.reduce((acc, curr) => acc + curr.amount * 8, 0)}
                    </p>
                </div>
            </CardContent>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ paddingBottom: 8 }}
                >
                    Shipping Details
                </Typography>

                <Typography gutterBottom variant="body1">
                    {shippingInfo.firstName} {shippingInfo.lastName}
                    <br />
                    {shippingInfo.suite ? (
                        <div>
                            {shippingInfo.suite} <br />
                        </div>
                    ) : (
                        ''
                    )}
                    {/* <br /> */}
                    {shippingInfo.street}
                    <br />
                    {shippingInfo.city} {shippingInfo.state} {'  '}
                    {shippingInfo.zipcode}
                </Typography>
            </CardContent>
            <CardActions className={classes.itemActions}>
                <Button
                    style={{ display: 'block' }}
                    size="small"
                    color="primary"
                >
                    <Link to="/shipping" className={classes.link}>
                        Back to Shipping
                    </Link>
                </Button>
                <PayPalExpressButton
                    env={env}
                    client={client}
                    currency={currency}
                    total={total}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                />
            </CardActions>
            {paypalError ? (
                <div className={classes.paypalError}>
                    Sorry, there was an error.
                </div>
            ) : (
                ''
            )}
            <div style={{ textAlign: 'center', fontSize: '.7rem', padding: 8 }}>
                <a
                    className={classes.paypalAUP}
                    href="https://www.paypal.com/us/webapps/mpp/ua/acceptableuse-full"
                >
                    PayPal Acceptable Use Policy
                </a>
            </div>
        </Card>
    );
};

export default Checkout;
