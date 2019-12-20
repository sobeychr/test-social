import { USER_LOGIN } from 'Store/type';

const initialState = {
    isLoggedIn: false,
    username: '',
};

const user = (state = initialState, action) => {
    const { payload, type } = action;

    if (type === USER_LOGIN) {
        const { username } = payload;
        return {
            ...state,
            isLoggedIn: true,
            username,
        };
    } else {
        return state;
    }
};

export default user;
