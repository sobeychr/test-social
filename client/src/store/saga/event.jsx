import { useSelector } from 'react-redux';
import { call, delay, put, select } from 'redux-saga/effects';
import { get } from 'Store/api';
import {
    entryError,
    entrySet,
    getEventCache,
    listSet,
} from 'Store/action/event';

const useDelay = false;

export function* fetchEventEntry(action) {
    try {
        const { payload } = action;
        const state = yield select();
        const cache = getEventCache(payload)(state);

        if (cache) {
            console.log('[SAGA]', 'fetchEventEntry', 'from cache');
            if (useDelay) yield delay(3500);
            yield put(entrySet(cache));
        } else {
            const json = yield call(get, `event/${payload}`);

            if (json) {
                if (useDelay) yield delay(3500);
                console.log('[SAGA]', 'fetchEventEntry', 'from API');
                yield put(entrySet(json));
            } else {
                yield put(entryError());
            }
        }
    } catch (err) {
        yield put(entryError());
        console.error('[fetchEventEntry]-try', err);
    }
}

export function* fetchEventList(action) {
    try {
        const { payload } = action;
        const json = yield call(get, `event/list/${payload}/20`);

        if (json) {
            if (useDelay) yield delay(3500);
            yield put(listSet(json));
        }
    } catch (err) {
        console.error('[fetchEventList]-try', err);
    }
}
