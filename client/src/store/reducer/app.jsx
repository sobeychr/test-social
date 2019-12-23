import { APP_SECRET_ERROR, APP_SECRET_FETCH, APP_SECRET_SET } from 'Store/type';

const initialState = {
    error: false,
    loading: false,
    secret: '',
    time: 0,
};

const app = (state = initialState, action) => {
    const { payload, type } = action;

    if (type === APP_SECRET_ERROR) {
        return {
            ...state,
            error: true,
            loading: false,
        };
    }
    else if (type === APP_SECRET_FETCH) {
        return {
            ...state,
            loading: true,
        };
    } else if (type === APP_SECRET_SET) {
        const { secret, time } = payload;
        return {
            ...state,
            loading: false,
            secret,
            time,
        };
    } else {
        return state;
    }
};

export default app;
