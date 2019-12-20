import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
// import get from 'lodash/fp/get';

import { INIT_APP } from 'Store/type';

function* initAppState() {
    try {
        // fetch credentials here
    } catch (err) {
        console.error('[initAppState]-try', err);
    }
}

function* saga() {
    try {
        yield takeLatest(INIT_APP, initAppState);
        // yield takeLatest(CHAT_INIT, initChat);

        // yield takeEvery(CHAT_MESSAGE_START, fetchMessage);
        // yield takeEvery(CHAT_USER_START, fetchUser);
    } catch (err) {
        console.error('[saga]', err);
    }
}

export default saga;
