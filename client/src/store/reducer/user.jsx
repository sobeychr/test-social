import {
    USER_LOGIN_ERROR,
    USER_LOGIN_FETCH,
    USER_LOGIN_REMOVE,
    USER_LOGIN_SET,
    USER_TOKEN_FETCH,
} from 'Store/type';

const initialState = {
    error: false,
    loading: false,
    loggedIn: false,
    token: '',
    username: '',
};

const user = (state = initialState, action) => {
    const { payload, type } = action;

    if (type === USER_LOGIN_ERROR) {
        return {
            ...state,
            error: true,
            loading: false,
        };
    } else if (type === USER_LOGIN_FETCH) {
        return {
            ...state,
            error: false,
            loading: true,
        };
    } else if (type === USER_LOGIN_REMOVE) {
        return {
            ...initialState,
        };
    } else if (type === USER_LOGIN_SET) {
        const { token, username } = payload;
        return {
            ...state,
            isLoggedIn: true,
            loading: false,
            token,
            username,
        };
    } else if (type === USER_TOKEN_FETCH) {
        return {
            ...state,
            loading: true,
        };
    } else {
        return state;
    }
};

export default user;
