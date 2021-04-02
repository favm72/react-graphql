import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer'
import Main from './Main';
import Dashboard from './Dashboard';
import Customers from './Customers';
import Detail from './Detail';

const Routes = (props) => {
    return (
        <Fragment>
            <Header />
            <div className="mycontainer">
                <div className="pagecontent">
                    <Switch>
                        <Route path='/home' component={ Main } />
                        <Route path='/dashboard' component={ Dashboard } />
                        <Route path='/city/:city' component={ Customers } />
                        <Route path='/detail/:id' component={ Detail } />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}

export default Routes
