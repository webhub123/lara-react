import React, { Component } from 'react';

import Home from '../index';
import Add_prod from '../products/add_prod';
import Edit_prod from '../products/edit_prod';
import Error_page from '../error_page/error_page';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const routes = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/add_prod" component={ Add_prod } />
                <Route exact path="/edit/:id" component={ Edit_prod } />
                <Route component={ Error_page } />
            </Switch>
        </Router>
    );
}
 
export default routes;