import { useSelector } from 'react-redux';
import { call, delay, put, select } from 'redux-saga/effects';
import { get } from 'Store/api';
import { entrySet, getEventCache, listSet } from 'Store/action/event';

const useDelay = false;

export function* fetchEventEntry(action) {
    try {
        const { payload } = action;
        const state = yield select();
        const cache = getEventCache(payload)(state);

        if (cache) {
            if (useDelay) yield delay(3500);
            yield put(entrySet(cache));
        } else {
            const json = yield call(get, `event/${payload}`);

            if (json) {
                if (useDelay) yield delay(3500);
                yield put(entrySet(json));
            }
        }
    } catch (err) {
        console.error('[fetchEventEntry]-try', err);
    }
}

export function* fetchEventList() {
    try {
        const json = yield call(get, 'event/list');

        if (json) {
            if (useDelay) yield delay(3500);
            yield put(listSet(json));
        }
    } catch (err) {
        console.error('[fetchEventList]-try', err);
    }
}
