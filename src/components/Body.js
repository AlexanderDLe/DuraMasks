import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './landing/Landing';
// import Redirect from './landing/Redirect';
import Selection from './order/Selection';
import Item from './item/Item';
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
        logReactPixelPurchase,
    } = props;

    return (
        <main className="body-class">
            <Switch>
                {/* <Route exact path="/" component={Redirect} /> */}
                <Route exact path="/" component={Landing} />
                <Route exact path="/selection" component={Selection} />
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
                            logReactPixelPurchase={logReactPixelPurchase}
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
