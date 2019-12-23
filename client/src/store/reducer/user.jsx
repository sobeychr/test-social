import {
    USER_LOGIN_ERROR,
    USER_LOGIN_FETCH,
    USER_LOGIN_SET,
} from 'Store/type';

const initialState = {
    error: false,
    loading: false,
    isLoggedIn: false,
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
            loading: true,
        };
    } else if (type === USER_LOGIN_SET) {
        const { token, username } = payload;
        return {
            ...state,
            isLoggedIn: true,
            token,
            username,
        };
    } else {
        return state;
    }
};

export default user;
