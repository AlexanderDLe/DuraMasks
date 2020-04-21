import React, { useState } from 'react';
import '../styles/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

const App = () => {
    const testOrder = {
        color: 'Black Textured',
        param: 'blacktextured',
        img: 'BlackTextured.jpg',
        size: 'L',
        amount: '2',
    };
    const testAmount = 2;
    const [orders, setOrders] = useState([testOrder]);
    const [amount, setAmount] = useState(testAmount);

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
            <Navbar amount={amount} />
            <Body
                orders={orders}
                addOrder={addOrder}
                removeOrder={removeOrder}
                resetOrders={resetOrders}
                amount={amount}
            />
            <Footer />
        </div>
    );
};

export default App;
