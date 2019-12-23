import { USER_LOGIN_ERROR, USER_LOGIN_FETCH, USER_LOGIN_SET } from 'Store/type';

export const loginError = { type: USER_LOGIN_ERROR };

export const loginFetch = ({ username, password, secret }) => ({
    type: USER_LOGIN_FETCH,
    payload: {
        username,
        password,
        secret,
    },
});

export const loginSet = ({ username }) => ({
    type: USER_LOGIN_SET,
    payload: username,
});

export const hasError = state => state.user.error;
export const isLoading = state => state.user.loading;
export const isLoggedIn = state => state.user.isLoggedIn;
