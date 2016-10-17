'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router } from 'react-router';

let _interval;
const TIMEOUT = 10;
let i = 0;

const MainRouter = () => (<Router history={browserHistory}>
                            <Route path='/' component={props => (<div>{props.children}</div>)}>
                              <Route component={() => <div />} path='foo' />
                              <Route component={() => <div />} path='bar' />
                            </Route>
                          </Router>);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<MainRouter />, document.getElementById('content'));
    _interval = setInterval(() => {
        if (i % 100 === 0) {
            console.log('Iteration', i);
        }
        if (i++ % 2) {
            browserHistory.push('/foo');
        } else {
            browserHistory.push('/bar');
        }
    }, TIMEOUT);
});