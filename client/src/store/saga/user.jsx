import { call, delay, put } from 'redux-saga/effects';
import { post } from 'Store/api';
import { loginSet } from 'Store/action/user';

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
            console.log('[fetchUser]', json);

            yield delay(3500);
            yield put(loginSet(username));
        }
    } catch (err) {
        console.error('[fetchSecret]-try', err);
    }
}

export { fetchUser };
