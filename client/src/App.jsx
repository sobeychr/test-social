import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Router from './Router';
import store from 'Store';
import { initApp } from 'Store/action/app';

store.dispatch(initApp);

render(
    <Router />,
    document.getElementById('app'),
);
