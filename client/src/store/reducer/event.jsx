import {
    EVENT_FETCH,
    EVENT_SET,
} from 'Store/type';

const initialState = {
    loading: false,
    list: [],
};

const event = (state = initialState, action) => {
    const { payload, type } = action;

    if (type === EVENT_FETCH) {
        return {
            ...state,
            loading: true,
        };
    } else if (type === EVENT_SET) {
        return {
            ...state,
            loading: false,
            list: payload,
        };
    } else {
        return state;
    }
};

export default event;
