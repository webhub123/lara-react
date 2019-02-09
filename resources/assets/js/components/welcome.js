import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Route_controller from './router/router';

import Header from './includes/header';
import Footer from './includes/footer';

export default class Welcome extends Component {

    render() {
        return (
            <React.Fragment>
                <Header></Header>
                    <Route_controller></Route_controller>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Welcome />, document.getElementById('root'));
}
