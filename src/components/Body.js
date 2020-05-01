import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './landing/Landing';
import Selection from './order/Selection2';
import Item from './order/Item';
import Cart from './checkout/Cart';
import Success from './checkout/Success';
import Policies from './Policies';
import CustomItem from './order/CustomItem';
import Pricing from './pricing/Pricing';

function Body(props) {
    const { removeOrder, addOrder, orders, resetOrders, amount } = props;

    return (
        <main className="body-class">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/selection" component={Selection} />
                <Route
                    exact
                    path="/item/:id"
                    render={(props) => <Item {...props} addOrder={addOrder} />}
                />
                <Route exact path="/custom" component={CustomItem} />
                <Route exact path="/pricing" component={Pricing} />
                <Route
                    exact
                    path="/cart"
                    render={() => (
                        <Cart
                            {...props}
                            removeOrder={removeOrder}
                            orders={orders}
                            resetOrders={resetOrders}
                            amount={amount}
                        />
                    )}
                />
                <Route
                    exact
                    path="/success"
                    render={() => (
                        <Success
                            {...props}
                            orders={orders}
                            resetOrders={resetOrders}
                        />
                    )}
                />
                <Route exact path="/policies" component={Policies} />
            </Switch>
        </main>
    );
}

export default Body;
