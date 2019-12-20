import { call, delay, put } from 'redux-saga/effects';
import { get } from 'Store/api';
import { secretFetch, secretSet } from 'Store/action/app';

function* fetchSecret() {
    try {
        const json = yield call(get, 'login/secret');

        if (json) {
            // yield delay(3500);
            yield put(secretSet(json));
        }
    } catch (err) {
        console.error('[fetchSecret]-try', err);
    }
}

function* initApp() {
    try {
        yield put(secretFetch);
    } catch (err) {
        console.error('[initApp]-try', err);
    }
}

export { fetchSecret, initApp };
