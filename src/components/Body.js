import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './landing/Landing';
import Order from './order/Order';
import Item from './order/Item';
import Cart from './checkout/Cart';
import Shipping from './checkout/Shipping';

function Body(props) {
    const { removeOrder, addOrder, orders, updateShippingInfo } = props;

    return (
        <main className="body-class">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/order" component={Order} />
                <Route
                    exact
                    path="/item/:id"
                    render={(props) => <Item {...props} addOrder={addOrder} />}
                />
                <Route
                    exact
                    path="/cart"
                    render={() => (
                        <Cart
                            {...props}
                            removeOrder={removeOrder}
                            orders={orders}
                        />
                    )}
                />
                <Route
                    exact
                    path="/shipping"
                    render={() => (
                        <Shipping
                            {...props}
                            removeOrder={removeOrder}
                            updateShippingInfo={updateShippingInfo}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}

export default Body;
