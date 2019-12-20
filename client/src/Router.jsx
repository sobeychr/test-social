import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import { Event, EventList, Login, Logout, Profile, User, UserList } from 'Page';

const Home = () => <Redirect to='/login' />;

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/event' component={Event} />
            <Route exact path='/EventList' component={EventList} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/user' component={User} />
            <Route exact path='/userlist' component={UserList} />
            <Route component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Router;
