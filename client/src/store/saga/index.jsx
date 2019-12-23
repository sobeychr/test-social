import { takeEvery, takeLatest } from 'redux-saga/effects';
import { initApp, fetchSecret } from 'Store/saga/app';
import { fetchUser } from 'Store/saga/user';
import {
    APP_INIT,
    APP_SECRET_FETCH,
    USER_COOKIE_FETCH,
    USER_LOGIN_FETCH,
} from 'Store/type';

function* saga() {
    try {
        yield takeLatest(APP_INIT, initApp);

        yield takeEvery(APP_SECRET_FETCH, fetchSecret);
        yield takeEvery(USER_LOGIN_FETCH, fetchUser);
    } catch (err) {
        console.error('[saga]', err);
    }
}

export default saga;
