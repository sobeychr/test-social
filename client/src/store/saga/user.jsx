import { call, delay, put } from 'redux-saga/effects';
import { post } from 'Store/api';
import { loginError, loginSet, tokenFetch } from 'Store/action/user';
import {
    get as getCookie,
    remove as removeCookie,
    set as setCookie,
} from 'Util/cookie';

const useDelay = false;
const tokenCookie = 'utoken';

function* fetchCookie(action) {
    try {
        const token = getCookie(tokenCookie);

        if (token) {
            yield put(tokenFetch);

            const { secret } = action;
            const json = yield call(post, 'login/auth', {
                secret,
                token,
            });

            if (json) {
                yield put(
                    loginSet({
                        token,
                        username: json.username,
                    }),
                );
            }
        }
    } catch (err) {
        console.error('[fetchCookie]-try', err);
    }
}

function* fetchUser(action) {
    try {
        const { payload } = action;
        const json = yield call(post, 'login/auth', payload);

        if (json) {
            const { token } = json;
            if (useDelay) yield delay(3500);
            yield put(loginSet(json));
            setCookie(tokenCookie, token);
        } else {
            yield put(loginError);
        }
    } catch (err) {
        yield put(loginError);
        console.error('[fetchUser]-try', err);
    }
}

function* removeUser() {
    try {
        removeCookie(tokenCookie);
    } catch (err) {
        console.error('[removeUser]-try', err);
    }
}

export { fetchCookie, fetchUser, removeUser };
