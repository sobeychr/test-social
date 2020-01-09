import { call, delay, put } from 'redux-saga/effects';
import { get } from 'Store/api';
import { listSet } from 'Store/action/event';

const useDelay = false;

function* fetchEvent() {
    try {
        const json = yield call(get, 'event/list');

        if (json) {
            if (useDelay) yield delay(3500);
            yield put(listSet(json));
        }
    } catch (err) {
        yield put(loginError);
        console.error('[fetchEvent]-try', err);
    }
}

export { fetchEvent };
