import { takeEvery, takeLatest } from 'redux-saga/effects';
import { initApp, fetchSecret } from 'Store/saga/app';
import { fetchUser, removeUser } from 'Store/saga/user';
import {
    APP_INIT,
    APP_SECRET_FETCH,
    USER_COOKIE_FETCH,
    USER_LOGIN_FETCH,
    USER_LOGIN_REMOVE,
} from 'Store/type';

function* saga() {
    try {
        yield takeLatest(APP_INIT, initApp);

        yield takeEvery(APP_SECRET_FETCH, fetchSecret);
        yield takeEvery(USER_LOGIN_FETCH, fetchUser);
        yield takeEvery(USER_LOGIN_REMOVE, removeUser);
    } catch (err) {
        console.error('[saga]', err);
    }
}

export default saga;
