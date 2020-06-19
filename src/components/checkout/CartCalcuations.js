import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
    caption: {
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
    cartTitle: {
        fontFamily: 'Open Sans',
    },
    cartTotal: {
        fontWeight: 700,
    },
    promoBox: {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    check: {
        marginLeft: 0,
        color: '#1CCE1C',
        fontSize: '0rem',
        transition: 'all .33s',
    },
    discountCaption: {
        display: 'block',
        fontSize: '.75rem',
        color: 'rgba(255,0,0,0)',
        transition: 'all .33s',
    },
    discountButton: {
        marginTop: 8,
        marginRight: 8,
        marginBottom: 8,
    },
}));

export default ({
    amount,
    subtotal,
    total,
    shippingFee,
    discount,
    discountCode,
    discountField,
    setDiscountField,
    usedDiscountButton,
    setUsedDiscountButton,
}) => {
    const classes = useStyles();

    const discountCaptionStyle = useMemo(() => {
        return discountField === discountCode && subtotal < 40
            ? {
                  color: 'rgba(255,0,0,.7)',
              }
            : {};
    }, [subtotal, discountCode, discountField]);
    const checkStyle = useMemo(() => {
        return discountField === discountCode && subtotal > 40
            ? {
                  marginLeft: 8,
                  fontSize: '1rem',
                  transform: 'scale(1.25)',
              }
            : {};
    }, [subtotal, discountCode, discountField]);

    if (amount === 0)
        return <div style={{ paddingBottom: 8 }}>Your cart is empty</div>;
    return (
        <React.Fragment>
            <div className={classes.cartCalculation}>
                <div style={{ paddingTop: 16 }}>
                    <p>Subtotal</p>
                </div>
                <p style={{ marginBottom: 0, marginTop: 16 }}>${subtotal}</p>
            </div>
            <div className={classes.cartCalculation}>
                <p>
                    Shipping
                    <br />
                    <span className={classes.caption}>
                        Free shipping for all domestic (US) orders.
                    </span>
                    <br />
                    <span className={classes.caption}>
                        Delivery will be between 5-9 business days.
                    </span>
                </p>
                <p>${shippingFee}</p>
            </div>
            <div className={classes.cartCalculation}>
                <TextField
                    margin="none"
                    size="small"
                    onChange={(e) =>
                        setDiscountField(e.target.value.toUpperCase())
                    }
                    label="Discount Code"
                    value={discountField}
                    className={classes.discountField}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MoneyOffIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <div className={classes.promoBox}>
                    -${discount}
                    <CheckIcon className={classes.check} style={checkStyle} />
                </div>
            </div>
            {subtotal < 40 || usedDiscountButton ? (
                <Button
                    className={classes.discountButton}
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => {
                        setDiscountField('15OFF');
                        setUsedDiscountButton(true);
                    }}
                >
                    Apply Discount Code 15OFF
                </Button>
            ) : (
                ''
            )}
            <span
                className={classes.discountCaption}
                style={discountCaptionStyle}
            >
                Discount is limited to $40+ orders.
            </span>
            <hr
                style={{
                    border: 'none',
                    borderBottom: '1px solid rgba(0,0,0,.2)',
                }}
            />
            <div className={classes.cartCalculation}>
                <p className={classes.cartTotal}>Total</p>
                <p className={classes.cartTotal}>${total}</p>
            </div>
        </React.Fragment>
    );
};
