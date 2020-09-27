import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import keys from '../../config/keys';
import ValidateEmail from './functions/ValidateEmail';
import InputField from './omni/InputField';
import CountryField from './omni/CountryField';
import StateDropdown from './omni/StateDropdown';
import MMDropdown from './omni/MMDropdown';
import Checkbox from '@material-ui/core/Checkbox';
import OmniLogo from '../../img/OmniLogo.jpg';
import Timestamper from '../misc/Timestamper';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
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

const extractOrderData = (ordersToExtract) => {
    let extractedOrders = [];
    for (let order of ordersToExtract) {
        extractedOrders.push({
            color: order.color,
            price: order.price,
            size: order.size,
            amount: order.amount,
        });
    }
    return extractedOrders;
};

export default ({
    total,
    subtotal,
    tax,
    orders,
    mode,
    discount,
    makeAPICalls,
    setPaymentError,
    setLoading,
    isPayButtonDisabled,
    setIsPayButtonDisabled,
}) => {
    const classes = useStyles();
    const [fattJs, setFattJs] = useState(null);
    const [formValues, setFormValues] = useState({
        month: '12',
        year: '2023',
        firstname: 'Test',
        lastname: 'Le',
        phone: '7145459444',
        street: '91111 Test Road',
        street2: '',
        city: 'Testing Grove',
        state: 'CA',
        country: 'USA',
        zip: '92843',
        email: 'tester@gmail.com',
    });
    const [formErrors, setFormErrors] = useState({});
    const [shippingValues, setShippingValues] = useState({
        firstname: '',
        lastname: '',
        street: '',
        street2: '',
        city: '',
        state: '',
        country: 'USA',
        zip: '',
    });
    const [shippingErrors, setShippingErrors] = useState({});
    const [shippingSameAsBilling, setShippingSameAsBilling] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fattJs = new window.FattJs(keys.omniPublicToken, {
            number: {
                id: 'card-number',
                style:
                    'height: 40px;  font-size: 18px; color: black; width: 100%; background-color: white !important;',
                type: 'text',
                format: 'prettyFormat',
            },
            cvv: {
                id: 'card-cvv',
                style:
                    'height: 40px;  font-size: 18px; color: black; width: 100%; background-color: white !important;',
                type: 'text',
            },
        });
        fattJs
            .showCardForm()
            .then((handler) => {
                // Set Sandbox Card Testing Values
                handler.setTestPan('4111111111111111');
                handler.setTestCvv('123');
            })
            .catch((e) => console.log('There was an error loading the form'));
        fattJs.on('card_form_complete', (message) => {
            // console.log('card_form_complete', message);
            setIsPayButtonDisabled(false);
        });
        fattJs.on('card_form_incomplete', (message) => {
            // console.log('card_form_incomplete', message);
            setIsPayButtonDisabled(true);
        });
        setFattJs(fattJs);
    }, [setIsPayButtonDisabled]);
    // FATTMERCHANT Functionality
    const handleBillingFieldChange = (event) => {
        const { name, value } = event.target;
        const test = {
            [name]: value,
        };
        console.log('testing: ', test);
        if (formErrors[name]) delete formErrors[name];
        setFormErrors({ ...formErrors });
        setFormValues({ ...formValues, [name]: value });
    };
    const handleShippingFieldChange = (event) => {
        const { name, value } = event.target;
        const test = {
            [name]: value,
        };
        console.log('testing: ', test);
        if (shippingErrors[name]) delete shippingErrors[name];
        setShippingErrors({ ...shippingErrors });
        setShippingValues({ ...shippingValues, [name]: value });
    };
    const findErrors = (formVals, type) => {
        let errorsObject = {};

        if (type === 'billing') {
            if (!ValidateEmail(formVals.email)) {
                errorsObject.email = 'invalid';
            }
            if (formVals.month > 12) {
                errorsObject.month = 'invalid';
            }
            if (formVals.year.length < 4) {
                errorsObject.year = 'invalid';
            }
            if (formVals.phone.length < 10) {
                errorsObject.phone = 'invalid';
            }
        }
        Object.keys(formVals).forEach((key) => {
            if (key === 'street2') return;
            if (!formVals[key].length) {
                errorsObject[key] = 'required';
            }
        });

        let errorsFound = false;
        if (Object.keys(errorsObject).length > 0) errorsFound = true;

        return { errorsObject, errorsFound };
    };
    const handlePay = () => {
        const {
            errorsObject: billingErrorsObject,
            errorsFound: billingErrorsFound,
        } = findErrors(formValues, 'billing');
        const {
            errorsObject: shippingErrorsObject,
            errorsFound: shippingErrorsFound,
        } = findErrors(shippingValues, 'shipping');

        if (
            billingErrorsFound ||
            (!shippingSameAsBilling && shippingErrorsFound)
        ) {
            setFormErrors({ ...billingErrorsObject });
            setShippingErrors({ ...shippingErrorsObject });
            setPaymentError({
                errorFound: true,
                errorMsg: 'Please complete required fields.',
            });
            console.log('Billing Errors found: ', billingErrorsObject);
            console.log('Shipping Errors found: ', shippingErrorsObject);
            return;
        }

        setIsPayButtonDisabled(true);
        setLoading(true);

        const extraDetails = {
            email: formValues.email,
            month: formValues.month,
            year: formValues.year,
            firstname: formValues.firstname,
            lastname: formValues.lastname,
            total: total,
            address_1: formValues.street,
            address_2: formValues.street2,
            address_city: formValues.city,
            address_state: formValues.state,
            address_zip: formValues.zip,
            address_country: formValues.country,
            phone: formValues.phone,
            url: 'https://omni.fattmerchant.com/#/bill/',
            send_receipt: true,
            method: 'card',
            validate: 'false',
            meta: {
                reference: 'invoice-reference-num',
                memo: 'notes about this transaction',
                otherField1: 'other-value-1',
                subtotal: subtotal,
                tax: tax,
            },
        };
        if (shippingSameAsBilling) {
            shippingValues.firstname = formValues.firstname;
            shippingValues.lastname = formValues.lastname;
            shippingValues.street = formValues.street;
            shippingValues.street2 = formValues.street2;
            shippingValues.city = formValues.city;
            shippingValues.state = formValues.state;
            shippingValues.zip = formValues.zip;
            shippingValues.country = formValues.country;
        }
        fattJs
            .pay(extraDetails)
            .then((completedTransaction) => {
                const address = {
                    recipient_name: `${shippingValues.firstname} ${shippingValues.lastname}`,
                    line1: shippingValues.street,
                    line2: shippingValues.street2,
                    city: shippingValues.city,
                    state: shippingValues.state,
                    postal_code: shippingValues.zip,
                    country_code: shippingValues.country,
                };
                const email = formValues.email;
                const orderID = completedTransaction.id;
                const amount = total;
                let timestamp =
                    Timestamper().split('T').join(' ').slice(0, -9) + ' PT';
                let orderData = extractOrderData(orders);
                const event = {
                    orders: orderData,
                    address,
                    email,
                    orderID,
                    amount,
                    timestamp,
                    mode,
                    subtotal,
                    discount,
                    tax,
                };
                makeAPICalls(event);
            })
            .catch((e) => {
                setIsPayButtonDisabled(false);
                setLoading(false);
                setPaymentError({
                    errorFound: true,
                    errorMsg:
                        'Sorry, there was an error. There may have been an issue with your payment information or the payment servers.',
                });
                console.log('errors: ', e);
            });
    };
    const renderCustomerDetails = () => {
        return (
            <div className="group" style={{ padding: 0, margin: 0 }}>
                <FormLabel
                    component="legend"
                    className={classes.billingAddress}
                >
                    Billing Address
                </FormLabel>
                {/* Name Fields */}
                <div style={{ display: 'flex' }}>
                    {/* First Name */}
                    <InputField
                        formValues={formValues}
                        handleFieldChange={handleBillingFieldChange}
                        name="firstname"
                        label="First Name"
                        error={formErrors.firstname}
                        extraStyles={{
                            width: '50%',
                            display: 'inline-block',
                            marginRight: 8,
                        }}
                        maxLength={50}
                    />
                    {/* Last Name */}
                    <InputField
                        formValues={formValues}
                        handleFieldChange={handleBillingFieldChange}
                        name="lastname"
                        label="Last Name"
                        error={formErrors.lastname}
                        extraStyles={{
                            width: '50%',
                            display: 'inline-block',
                        }}
                        maxLength={50}
                    />
                </div>
                {/* Street Address */}
                <InputField
                    formValues={formValues}
                    handleFieldChange={handleBillingFieldChange}
                    name="street"
                    label="Street"
                    error={formErrors.street}
                />
                {/* Street Address 2  */}
                <InputField
                    formValues={formValues}
                    handleFieldChange={handleBillingFieldChange}
                    name="street2"
                    label="Apt/Suite/etc."
                    error={formErrors.street2}
                />
                {/* City  */}
                <InputField
                    formValues={formValues}
                    handleFieldChange={handleBillingFieldChange}
                    name="city"
                    label="City"
                    error={formErrors.city}
                />
                {/* State */}
                <StateDropdown
                    formValues={formValues}
                    handleFieldChange={handleBillingFieldChange}
                    name="state"
                    label="State"
                    error={formErrors.state}
                />
                {/* Country */}
                <CountryField />
                {/* Zip Code */}
                <InputField
                    formValues={formValues}
                    handleFieldChange={handleBillingFieldChange}
                    name="zip"
                    label="Zip Code"
                    error={formErrors.zip}
                    type="number"
                />
                {/* Phone */}
                <InputField
                    formValues={formValues}
                    handleFieldChange={handleBillingFieldChange}
                    name="phone"
                    label="Phone"
                    error={formErrors.phone}
                    type="number"
                />
                {/* Email */}
                <InputField
                    formValues={formValues}
                    handleFieldChange={handleBillingFieldChange}
                    name="email"
                    label="Email"
                    error={formErrors.email}
                />
            </div>
        );
    };
    const renderCardDetails = () => {
        return (
            <div>
                <div id="card-number" className="field card-number" />
                <div className="cvvexp">
                    <div id="card-cvv" className="field card-cvv" />
                    {/* Month */}
                    <MMDropdown
                        formValues={formValues}
                        handleFieldChange={handleBillingFieldChange}
                        name="month"
                        label="mm"
                        error={formErrors.month}
                        extraStyles={{
                            width: '25%',
                            display: 'inline-block',
                            marginRight: 8,
                            marginTop: 0,
                        }}
                    />
                    {/* Year */}
                    <InputField
                        formValues={formValues}
                        handleFieldChange={handleBillingFieldChange}
                        name="year"
                        label="yyyy"
                        error={formErrors.year}
                        extraStyles={{
                            width: '25%',
                            display: 'inline-block',
                            marginTop: 0,
                        }}
                        type="number"
                        maxLength={4}
                    />
                </div>
            </div>
        );
    };
    const renderShippingDetails = () => {
        return (
            <div className="group" style={{ padding: 0, margin: 0 }}>
                <FormLabel
                    component="legend"
                    className={classes.billingAddress}
                >
                    Shipping Address
                </FormLabel>
                {/* Name Fields */}
                <div style={{ display: 'flex' }}>
                    {/* First Name */}
                    <InputField
                        formValues={shippingValues}
                        handleFieldChange={handleShippingFieldChange}
                        name="firstname"
                        label="First Name"
                        error={shippingErrors.firstname}
                        extraStyles={{
                            width: '50%',
                            display: 'inline-block',
                            marginRight: 8,
                        }}
                        maxLength={50}
                    />
                    {/* Last Name */}
                    <InputField
                        formValues={shippingValues}
                        handleFieldChange={handleShippingFieldChange}
                        name="lastname"
                        label="Last Name"
                        error={shippingErrors.lastname}
                        extraStyles={{
                            width: '50%',
                            display: 'inline-block',
                        }}
                        maxLength={50}
                    />
                </div>
                {/* Street Address */}
                <InputField
                    formValues={shippingValues}
                    handleFieldChange={handleShippingFieldChange}
                    name="street"
                    label="Street"
                    error={shippingErrors.street}
                />
                {/* Street Address 2  */}
                <InputField
                    formValues={shippingValues}
                    handleFieldChange={handleShippingFieldChange}
                    name="street2"
                    label="Apt/Suite/etc."
                    error={shippingErrors.street2}
                />
                {/* City  */}
                <InputField
                    formValues={shippingValues}
                    handleFieldChange={handleShippingFieldChange}
                    name="city"
                    label="City"
                    error={shippingErrors.city}
                />
                {/* State */}
                <StateDropdown
                    formValues={shippingValues}
                    handleFieldChange={handleShippingFieldChange}
                    name="state"
                    label="State"
                    error={shippingErrors.state}
                />
                {/* Country */}
                <CountryField />
                {/* Zip Code */}
                <InputField
                    formValues={shippingValues}
                    handleFieldChange={handleShippingFieldChange}
                    name="zip"
                    label="Zip Code"
                    error={shippingErrors.zip}
                    type="number"
                />
            </div>
        );
    };
    const renderSecuredByOmni = () => {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 16,
                }}
            >
                <p style={{ margin: 'auto 0' }}>Powered & Secured by </p>
                <img
                    style={{
                        height: 'auto',
                        width: '70px',
                        paddingLeft: 4,
                        marginBottom: 13,
                    }}
                    src={OmniLogo}
                    alt="Secured by Omni"
                />
            </div>
        );
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {renderCardDetails()}
            {renderCustomerDetails()}

            <div
                style={{
                    display: 'flex',
                    marginTop: 16,
                    marginLeft: -12,
                }}
            >
                <Checkbox
                    checked={shippingSameAsBilling}
                    onChange={() =>
                        setShippingSameAsBilling(!shippingSameAsBilling)
                    }
                    color="primary"
                />
                <p style={{ margin: 'auto 0' }}>Ship To Billing Address</p>
            </div>
            {shippingSameAsBilling ? '' : renderShippingDetails()}
            <Button
                className={classes.payButton}
                onClick={() => handlePay(formValues)}
                disabled={isPayButtonDisabled}
                color="primary"
                variant="contained"
            >
                Pay
            </Button>
            {renderSecuredByOmni()}
        </form>
    );
};
