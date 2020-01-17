import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Router from './Router';
import Store from 'Store';
import { initApp, secretGet } from 'Store/action/app';
import Style from './style';

const App = () => {
    Store.dispatch(initApp);

    return (
        <Provider store={Store}>
            <Router />
        </Provider>
    );
};

export default App;
