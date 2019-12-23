import { call, delay, put } from 'redux-saga/effects';
import { post } from 'Store/api';
import { loginError, loginSet } from 'Store/action/user';

function* fetchUser(action) {
    try {
        const {
            payload: { username, secret },
        } = action;
        const json = yield call(post, 'login/auth', {
            username,
            secret,
        });

        if (json) {
            // yield delay(3500);
            yield put(loginSet(username));
        } else {
            yield put(loginError);
        }
    } catch (err) {
        yield put(loginError);
        console.error('[fetchSecret]-try', err);
    }
}

export { fetchUser };
