import {
    EVENT_ENTRY_ERROR,
    EVENT_ENTRY_FETCH,
    EVENT_ENTRY_SET,
    EVENT_LIST_FETCH,
    EVENT_LIST_SET,
} from 'Store/type';
import { now } from 'Util/date';

const initialState = {
    cache: [],
    event: {},
    eventError: false,
    loading: false,
    list: [],
    listDate: 0,
    search: {
        label: '',
        list: [],
        tag: '',
    },
};

// cache = [ {event, date} ];
const createEntryCache = (state, payload) => {
    const newCache = state.cache.filter(entry => entry.event.id !== payload.id);
    newCache.push({
        event: payload,
        date: now(),
    });
    return newCache;
};

const event = (state = initialState, action) => {
    const { payload, type } = action;

    if (type === EVENT_ENTRY_FETCH || type === EVENT_LIST_FETCH) {
        return {
            ...state,
            loading: true,
        };
    } else if (type === EVENT_ENTRY_ERROR) {
        return {
            ...state,
            eventError: true,
            loading: false,
        };
    } else if (type === EVENT_ENTRY_SET) {
        return {
            ...state,
            loading: false,
            event: payload,
            cache: createEntryCache(state, payload),
        };
    } else if (type === EVENT_LIST_SET) {
        return {
            ...state,
            loading: false,
            list: payload,
            listDate: now(),
        };
    } else {
        return state;
    }
};

export default event;
