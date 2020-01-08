import { call, delay, put } from 'redux-saga/effects';
import { get } from 'Store/api';
import { secretError, secretFetch, secretSet } from 'Store/action/app';
import { fetchCookie } from 'Store/saga/user';

const useDelay = false;

function* fetchSecret() {
    try {
        const json = yield call(get, 'login/secret');

        if (json) {
            if (useDelay) yield delay(3500);
            yield put(secretSet(json));
            yield call(fetchCookie, json);
        } else {
            yield put(secretError);
        }
    } catch (err) {
        yield put(secretError);
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
