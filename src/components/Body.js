import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './landing/Landing';
import Order from './order/Order';

export default function Album() {
    return (
        <main className="body-class">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/order" component={Order} />
            </Switch>
        </main>
    );
}
