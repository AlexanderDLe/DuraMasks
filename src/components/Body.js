import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './landing/Landing';
import Selection from './order/Selection';
import Item from './order/Item';
import Cart from './checkout/Cart';
import Success from './checkout/Success';
import CustomItem from './order/CustomItem';
import Pricing from './pricing/Pricing';
import Stats from './stats/Stats';
import Daily from './stats/Daily';
import Policies from './misc/Policies';
import FAQ from './misc/FAQ';

function Body(props) {
    const {
        removeOrder,
        addOrder,
        orders,
        resetOrders,
        amount,
        mode,
        webp,
    } = props;

    return (
        <main className="body-class">
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <Landing {...props} webp={webp} />}
                />
                <Route
                    exact
                    path="/selection"
                    render={() => <Selection {...props} webp={webp} />}
                />
                <Route exact path="/stats" component={Stats} />
                <Route exact path="/daily" component={Daily} />
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
                            mode={mode}
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
                <Route exact path="/faq" component={FAQ} />
            </Switch>
        </main>
    );
}

export default Body;
