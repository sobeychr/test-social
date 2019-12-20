import { USER_LOGIN } from 'Store/type';

export const login = ({username, password, secret}) => ({
    type: USER_LOGIN,
    payload: {
        username,
        password,
        secret,
    }
});

export const isLoggedIn = state => state.user.isLoggedIn;
