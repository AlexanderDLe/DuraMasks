import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './landing/Landing';
import Order from './order/Order';
import Checkout from './checkout/Checkout';
import Item from './order/Item';

function Body(props) {
    const { addOrder, orders } = props;

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
                    path="/checkout"
                    render={() => (
                        <Checkout
                            {...props}
                            addOrder={addOrder}
                            orders={orders}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}

export default Body;
