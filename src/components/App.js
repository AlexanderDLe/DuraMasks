import React, { useState } from 'react';
import '../styles/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

const App = () => {
    const [orders, setOrders] = useState([
        { color: 'Black', size: 'Adult', amount: 1 },
    ]);
    const [amount, setAmount] = useState(0);

    const addOrder = (data) => {
        const newOrders = [...orders];

        // If identical mask already exist, add to the amount
        // Otherwise, we create a new separate line on order summary.
        let foundIdentical = false;
        for (let order of newOrders) {
            if (order.color === data.color && order.size === data.size) {
                order.amount += data.amount;
                foundIdentical = true;
            }
        }
        if (!foundIdentical) newOrders.push(data);

        setOrders(newOrders);
        setAmount(amount + data.amount);
    };

    const removeOrder = (data) => {
        console.log('remove order');
    };

    console.log(setOrders);

    return (
        <div>
            <CssBaseline />
            <Navbar amount={amount} />
            <Body addOrder={addOrder} orders={orders} />
            <Footer />
        </div>
    );
};

export default App;
