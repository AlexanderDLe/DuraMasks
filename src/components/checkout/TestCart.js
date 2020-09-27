import React, { useEffect, useState, useMemo } from 'react';
import keys from '../../config/keys';
import { Link, Redirect } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import ReactPinterestTag from 'react-pinterest-tag';
import OmniPayment from './OmniPayment';
import PayPalPayment from './PayPalPayment';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import LinearProgress from '@material-ui/core/LinearProgress';

import CartItems from './CartItems';
import CartCalculations from './CartCalcuations';
import CartModal from './CartModal';

import axios from 'axios';
import createTrelloDescription from './functions/createTrelloDescription';
import createTrelloLabel from './functions/createTrelloLabel';

const API = keys.emailConfirmationAPI;
const trelloAPI = keys.trelloAPI;
const header = {
    'Content-Type': 'application/json',
};
const currency = 'USD';
const discountCode = '15OFF';
const discountThreshold = 45;
const shippingFee = 0;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 450,
        borderBottom: '2px solid #3f51b5',
        paddingBottom: 8,
        margin: 16,
    },
    link: {
        color: '#3f51b5',
        textDecoration: 'none',
    },
    cartTitle: {
        fontFamily: 'Open Sans',
    },
    paymentError: {
        textAlign: 'center',
        color: 'red',
        marginBottom: 16,
    },
    backToSelectionButton: {
        margin: '8px 16px',
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    warningIcon: {
        color: 'red',
        height: 65,
        width: 65,
        marginBottom: 8,
    },
    itemActions: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0px 8px',
    },
    paymentMethodTitle: {
        fontSize: '1.5rem',
        color: 'black',
    },
    billingAddress: {
        fontSize: '1.5rem',
        color: 'black',
        marginTop: 24,
    },
    payButton: {
        marginTop: 24,
        width: '100%',
    },
}));

const calculateSubtotal = (orders) => {
    let subtotal = 0;
    for (let order of orders) {
        subtotal += order.price * order.amount;
    }
    return subtotal;
};

const CART = 'CART';
const CHECKOUT = 'CHECKOUT';

const Cart = ({
    orders,
    removeOrder,
    resetOrders,
    amount,
    mode,
    logReactPixelPurchase,
    usedDiscountButton,
    setUsedDiscountButton,
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const classes = useStyles();
    const [checkoutMode, setCheckoutMode] = useState(CHECKOUT);
    const [paymentError, setPaymentError] = useState({
        errorFound: false,
        errorMsg: '',
    });
    const [checkedOut, setCheckedOut] = useState(false);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [discountField, setDiscountField] = useState('');
    const [paymentOption, setPaymentOption] = useState('FM');
    const [loading, setLoading] = useState(false);
    const navMediaQuery600 = useMediaQuery('(min-width:600px)');
    const [isPayButtonDisabled, setIsPayButtonDisabled] = useState(true);

    // Checkout Configuration
    const itemAmount = amount;
    const subtotal = useMemo(() => {
        return calculateSubtotal(orders);
    }, [orders]);
    const discount = useMemo(() => {
        return discountField.toUpperCase() === discountCode &&
            subtotal >= discountThreshold
            ? Math.ceil(subtotal * 0.15 * 100) / 100
            : 0;
    }, [subtotal, discountField]);
    const pretaxTotal = useMemo(() => {
        return ((subtotal + shippingFee - discount) * 100) / 100;
    }, [subtotal, discount]);
    const tax = useMemo(() => {
        return Math.round(pretaxTotal * 0.07 * 100) / 100;
    }, [pretaxTotal]);
    const total = useMemo(() => {
        return Math.round((pretaxTotal + tax) * 100) / 100;
    }, [pretaxTotal, tax]);

    // API Requests Functionality
    const makeAPICalls = async (event) => {
        console.log('Event: ', event);

        const cardName = `${
            event.address.recipient_name
        } (${itemAmount}) - ${event.orderID.slice(0, 3)}`;
        const newCard = {
            name: cardName,
            pos: 'bottom',
            idLabels: createTrelloLabel(),
            idCardSource: '5ef183a95443f525b947c506',
            keepFromSource: 'checklists',
            desc: createTrelloDescription(event),
        };

        try {
            await axios.post(trelloAPI, newCard);
        } catch (error) {
            console.log(error);
        }
        try {
            await axios.post(API, event, header);
        } catch (error) {
            console.log(error);
        }

        logReactPixelPurchase({
            currency: 'USD',
            value: event.amount,
        });

        // Pinterest Event
        ReactPinterestTag.track('checkout', {
            order_id: event.orderID,
            value: parseInt(event.amount),
            currency: 'USD',
        });

        setIsPayButtonDisabled(false);
        setLoading(false);
        resetOrders();
        setCheckedOut(true);
    };

    // Cart Root Styles
    const cartRootStyles = useMemo(() => {
        let marginTop = navMediaQuery600 ? 40 : 16;
        return { marginTop };
    }, [navMediaQuery600]);

    // Cart Actions
    const renderCartActions = () => {
        if (checkoutMode === CART) {
            return (
                <CardActions className={classes.itemActions}>
                    <Link to="/selection" className={classes.link}>
                        <Button size="small" color="primary">
                            Mask Selection
                        </Button>
                    </Link>
                    <Button
                        onClick={() => setCheckoutMode(CHECKOUT)}
                        size="small"
                        color="primary"
                    >
                        Checkout
                    </Button>
                </CardActions>
            );
        } else if (checkoutMode === CHECKOUT) {
            return (
                <CardActions className={classes.itemActions}>
                    <Button
                        onClick={() => setCheckoutMode(CART)}
                        size="small"
                        color="primary"
                    >
                        Back To Cart
                    </Button>
                </CardActions>
            );
        }
    };

    const renderCheckout = () => {
        if (amount === 0 || checkoutMode === CART) return;
        const renderPaymentOption = () => {
            if (paymentOption === 'FM') {
                return (
                    <OmniPayment
                        total={total}
                        subtotal={subtotal}
                        tax={tax}
                        orders={orders}
                        mode={mode}
                        discount={discount}
                        makeAPICalls={makeAPICalls}
                        setPaymentError={setPaymentError}
                        setLoading={setLoading}
                        isPayButtonDisabled={isPayButtonDisabled}
                        setIsPayButtonDisabled={setIsPayButtonDisabled}
                    />
                );
            } else if (paymentOption === 'PayPal') {
                return (
                    <PayPalPayment
                        currency={currency}
                        total={total}
                        orders={orders}
                        discount={discount}
                        tax={tax}
                        makeAPICalls={makeAPICalls}
                        mode={mode}
                        subtotal={subtotal}
                        setPaymentError={setPaymentError}
                        setModalOpen={setModalOpen}
                    />
                );
            }
        };
        return (
            <CardContent className={classes.paymentBox}>
                <FormLabel
                    component="legend"
                    className={classes.paymentMethodTitle}
                >
                    Payment Method
                </FormLabel>
                <div style={{ marginLeft: -12, marginBottom: 16 }}>
                    <Radio
                        checked={paymentOption === 'FM'}
                        onChange={() => setPaymentOption('FM')}
                        color="primary"
                    />{' '}
                    Credit/Debit
                    <Radio
                        checked={paymentOption === 'PayPal'}
                        onChange={() => setPaymentOption('PayPal')}
                        color="primary"
                    />{' '}
                    PayPal
                    <br />
                </div>
                {renderPaymentOption()}
            </CardContent>
        );
    };
    if (checkedOut) return <Redirect to="/success" />;

    return (
        <Card style={cartRootStyles} className={classes.root} elevation={3}>
            <CardContent>
                <Typography
                    className={classes.cartTitle}
                    variant="h4"
                    component="h2"
                >
                    {checkoutMode === CART ? 'Cart' : 'Checkout'}
                </Typography>
            </CardContent>
            <CardContent>
                <CartItems
                    checkoutMode={checkoutMode}
                    orders={orders}
                    removeOrder={removeOrder}
                />
                <CartCalculations
                    orders={orders}
                    checkoutMode={checkoutMode}
                    amount={amount}
                    subtotal={subtotal}
                    total={total}
                    tax={tax}
                    shippingFee={shippingFee}
                    discountCode={discountCode}
                    discount={discount}
                    discountField={discountField}
                    setDiscountField={setDiscountField}
                    discountThreshold={discountThreshold}
                    usedDiscountButton={usedDiscountButton}
                    setUsedDiscountButton={setUsedDiscountButton}
                />
            </CardContent>

            {renderCheckout()}
            {paymentError.errorFound ? (
                <div className={classes.paymentError}>
                    {paymentError.errorMsg}
                </div>
            ) : (
                ''
            )}
            {renderCartActions()}
            {loading ? <LinearProgress style={{ margin: 16 }} /> : ''}
            <CartModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </Card>
    );
};

export default Cart;
