import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import ClearIcon from '@material-ui/icons/Clear';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
});

const Cart = ({ orders, removeOrder }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const classes = useStyles();
    const [emptyCartError, setEmptyCartError] = useState(false);
    const [redirectToShipping, setRedirectToShipping] = useState(false);

    const continueToShipping = () => {
        console.log(orders.length);
        if (!orders.length) return setEmptyCartError(true);
        else return setRedirectToShipping(true);
    };

    if (redirectToShipping === true) return <Redirect to="/shipping" />;

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
                            <div style={{ paddingRight: 8, paddingTop: 10 }}>
                                <ClearIcon
                                    style={{ color: 'red', cursor: 'pointer' }}
                                    onClick={() => removeOrder(order)}
                                />
                            </div>
                            <div>
                                <Typography variant="body1" component="h2">
                                    {order.amount}x {order.color} Color
                                </Typography>
                                <Typography variant="caption" component="h2">
                                    Size {order.size}
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

            <CardActions className={classes.itemActions}>
                <Button size="small" color="primary">
                    <Link to="/selection" className={classes.link}>
                        Back to Selections
                    </Link>
                </Button>
                <Button
                    onClick={() => continueToShipping()}
                    variant="contained"
                    size="small"
                    color="primary"
                >
                    Continue To Shipping
                </Button>
            </CardActions>
            {emptyCartError ? (
                <div
                    style={{
                        paddingRight: 8,
                        textAlign: 'right',
                        color: 'red',
                    }}
                >
                    Your cart is empty.
                </div>
            ) : (
                ''
            )}
        </Card>
    );
};

export default Cart;
