import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 420,
        borderBottom: '2px solid #3f51b5',
    },

    link: {
        color: '#3f51b5',
        textDecoration: 'none',
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    nameFields: { display: 'flex', justifyContent: 'space-between' },
    nameField: { width: '48%' },
    regionFields: { display: 'flex', justifyContent: 'space-between' },
    regionField: { width: '32%' },
    error: {
        color: 'red',
    },
});

const Shipping = ({ updateShippingInfo }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        updateShippingInfo(data);
    };

    return (
        <Card className={classes.root} elevation={3}>
            <CardContent>
                <Typography variant="h4" component="h2">
                    Shipping
                </Typography>
            </CardContent>

            <CardContent style={{ paddingTop: 0, paddingBottom: 20 }}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    autoComplete="off"
                >
                    <div className={classes.nameFields}>
                        <div className={classes.nameField}>
                            <TextField
                                id="outlined-basic"
                                label="First Name"
                                name="firstName"
                                inputRef={register({ required: true })}
                            />
                            {errors.firstName && (
                                <span className={classes.error}>
                                    Field is required
                                </span>
                            )}
                        </div>
                        <div className={classes.nameField}>
                            <TextField
                                id="outlined-basic"
                                label="Last Name"
                                name="lastName"
                                inputRef={register({ required: true })}
                            />
                            {errors.firstName && (
                                <span className={classes.error}>
                                    Field is required
                                </span>
                            )}{' '}
                        </div>
                    </div>
                    <div>
                        <TextField
                            id="outlined-basic"
                            label="Email Address"
                            style={{ width: '100%' }}
                            name="email"
                            inputRef={register({ required: true })}
                        />
                        {errors.email && (
                            <span className={classes.error}>
                                Field is required
                            </span>
                        )}
                    </div>
                    <div>
                        <TextField
                            id="outlined-basic"
                            label="Street Address"
                            style={{ width: '100%' }}
                            name="street"
                            inputRef={register({ required: true })}
                        />
                        {errors.street && (
                            <span className={classes.error}>
                                Field is required
                            </span>
                        )}
                    </div>
                    <TextField
                        id="outlined-basic"
                        label="Apartment, suite, etc. (Optional)"
                        style={{ width: '100%' }}
                        name="suite"
                        inputRef={register({ required: false })}
                    />
                    <div>
                        <TextField
                            id="outlined-basic"
                            label="City"
                            style={{ width: '100%' }}
                            name="city"
                            inputRef={register({ required: true })}
                        />
                        {errors.city && (
                            <span className={classes.error}>
                                Field is required
                            </span>
                        )}
                    </div>

                    <div className={classes.regionFields}>
                        <div className={classes.regionField}>
                            <TextField
                                id="outlined-basic"
                                label="Country/Region"
                                name="country"
                                inputRef={register({ required: true })}
                            />
                            {errors.country && (
                                <span className={classes.error}>
                                    Field is required
                                </span>
                            )}
                        </div>
                        <div className={classes.regionField}>
                            <TextField
                                id="outlined-basic"
                                label="State/Province"
                                name="state"
                                inputRef={register({ required: true })}
                            />
                            {errors.state && (
                                <span className={classes.error}>
                                    Field is required
                                </span>
                            )}
                        </div>
                        <div className={classes.regionField}>
                            <TextField
                                id="outlined-basic"
                                label="Zip Code"
                                name="zipcode"
                                inputRef={register({ required: true })}
                            />
                            {errors.zipcode && (
                                <span className={classes.error}>
                                    Field is required
                                </span>
                            )}
                        </div>
                    </div>
                    <div style={{ paddingTop: 40 }} className={classes.actions}>
                        <Button size="small" color="primary">
                            <Link to="/cart" className={classes.link}>
                                Back to Cart
                            </Link>
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            type="submit"
                        >
                            Pay With Payal
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default Shipping;
