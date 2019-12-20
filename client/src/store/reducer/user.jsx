import { USER_LOGIN_FETCH, USER_LOGIN_SET } from 'Store/type';

const initialState = {
    isLoggedIn: false,
    username: '',
};

const user = (state = initialState, action) => {
    const { payload, type } = action;

    if (type === USER_LOGIN_SET) {
        return {
            ...state,
            isLoggedIn: true,
            username: payload,
        };
    } else {
        return state;
    }
};

export default user;
