import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import {
    About,
    Event,
    EventList,
    Login,
    Logout,
    Profile,
    User,
    UserList,
} from 'Page';

const Home = () => <Redirect to='/login' />;

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/event/:id' component={Event} />
            <Route exact path='/eventlist' component={EventList} />
            <Route exact path='/events'>
                <Redirect to='/eventlist' />
            </Route>
            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/user' component={User} />
            <Route exact path='/userlist' component={UserList} />
            <Route path='/' component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Router;
