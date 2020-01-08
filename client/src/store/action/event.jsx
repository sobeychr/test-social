import {
    EVENT_FETCH,
    EVENT_SET,
} from 'Store/type';

export const getList = { type: EVENT_FETCH };
export const setList = payload => ({
    type: EVENT_SET,
    payload,
});
