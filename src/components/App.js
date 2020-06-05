import React, { useState, Suspense, lazy } from 'react';
import '../styles/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import Body from './Body';
import Footer from './Footer';

const Navbar = lazy(() => import('./Navbar'));
const Snackbar = lazy(() => import('./Snackbar'));

const App = () => {
    const testOrder = [
        {
            type: 'Mask',
            color: 'Black Test',
            param: 'black',
            price: 12.5,
            img: 'Black.jpg',
            size: 'L',
            amount: '1',
        },
        {
            type: 'Mask',
            color: 'White Test',
            param: 'white',
            price: 12.5,
            img: 'White.jpg',
            size: 'M',
            amount: '3',
        },
    ];

    const mode = 'sandbox';
    const [orders, setOrders] = useState(testOrder);
    const [amount, setAmount] = useState(4);
    const [snackbarOpen, setSnackbarOpen] = useState(true);

    const addOrder = (data) => {
        const newOrders = [...orders];

        // If identical mask already exist, add to the amount
        // Otherwise, we create a new separate line on order summary.
        let foundIdentical = false;
        for (let order of newOrders) {
            if (order.color === data.color && order.size === data.size) {
                order.amount = parseInt(order.amount) + parseInt(data.amount);
                foundIdentical = true;
            }
        }
        if (!foundIdentical) newOrders.push(data);

        setOrders(newOrders);
        setAmount(amount + parseInt(data.amount));
        console.log(data);
        console.log(newOrders);
    };

    const removeOrder = (data) => {
        const newOrders = [];

        for (let order of orders) {
            if (data.color === order.color && data.size === order.size)
                continue;
            newOrders.push(order);
        }

        setOrders(newOrders);
        setAmount(amount - parseInt(data.amount));
    };

    const resetOrders = () => {
        setAmount(0);
        setOrders([]);
    };

    return (
        <div>
            <CssBaseline />
            <Suspense fallback={<div />}>
                <Navbar amount={amount} />
            </Suspense>
            <Body
                mode={mode}
                orders={orders}
                addOrder={addOrder}
                removeOrder={removeOrder}
                resetOrders={resetOrders}
                amount={amount}
            />
            <Suspense fallback={<div />}>
                <Snackbar
                    snackbarOpen={snackbarOpen}
                    onClose={() => setSnackbarOpen(false)}
                />
            </Suspense>
            <Footer />
        </div>
    );
};

export default App;
