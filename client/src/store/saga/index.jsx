import { takeEvery, takeLatest } from 'redux-saga/effects';
import { initApp, fetchSecret } from 'Store/saga/app';
import { fetchEventEntry, fetchEventList } from 'Store/saga/event';
import { fetchUser, removeUser } from 'Store/saga/user';
import {
    APP_INIT,
    APP_SECRET_FETCH,
    EVENT_ENTRY_FETCH,
    EVENT_LIST_FETCH,
    USER_COOKIE_FETCH,
    USER_LOGIN_FETCH,
    USER_LOGIN_REMOVE,
} from 'Store/type';

function* saga() {
    try {
        yield takeLatest(APP_INIT, initApp);

        yield takeEvery(APP_SECRET_FETCH, fetchSecret);
        yield takeEvery(EVENT_ENTRY_FETCH, fetchEventEntry);
        yield takeEvery(EVENT_LIST_FETCH, fetchEventList);
        yield takeEvery(USER_LOGIN_FETCH, fetchUser);
        yield takeEvery(USER_LOGIN_REMOVE, removeUser);
    } catch (err) {
        console.error('[saga]', err);
    }
}

export default saga;
