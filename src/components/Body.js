import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './landing/Landing';
import Order from './order/Order';
import Checkout from './checkout/Checkout';
import Item from './order/Item';

export default function Album() {
    return (
        <main className="body-class">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/order" component={Order} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/item/:id" component={Item} />
            </Switch>
        </main>
    );
}
