import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/*
import store from 'Store';

store.dispatch({
    type: 'INIT_APP',
});
*/

import Main from 'component/main';

render(
    <Main />,
    document.getElementById('app'),
);
