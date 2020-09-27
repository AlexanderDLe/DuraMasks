import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import Timestamper from '../misc/Timestamper';
import keys from '../../config/keys';

const client = {
    sandbox: keys.paypalSandboxID,
    production: keys.paypalProductionID,
};

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
    currency,
    total,
    orders,
    discount,
    tax,
    makeAPICalls,
    mode,
    subtotal,
    setPaymentError,
    setModalOpen,
}) => {
    const onSuccess = async (details, data) => {
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
        let timestamp = Timestamper().split('T').join(' ').slice(0, -9) + ' PT';
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

        console.log('Event: ', event);
        makeAPICalls(event);
    };
    const onCancel = (data) => {
        setModalOpen(true);
        console.log('The payment was canceled', data);
    };
    const onError = (err) => {
        console.log('There was an error', err);
        setPaymentError({
            errorFound: true,
            errorMsg:
                'Sorry, there was an error. There may have been an issue with your payment information or the payment servers.',
        });
    };

    return (
        <PayPalButton
            currency={currency}
            amount={total}
            onSuccess={onSuccess}
            onError={onError}
            catchError={onError}
            options={{ clientId: client[mode] }}
            onCancel={onCancel}
        />
    );
};
