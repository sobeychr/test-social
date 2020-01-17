import get from 'lodash/get';
import {
    EVENT_ENTRY_FETCH,
    EVENT_ENTRY_SET,
    EVENT_LIST_FETCH,
    EVENT_LIST_SET,
} from 'Store/type';
import { now } from 'Util/date';

const delay = 60 * 5 * 1000; // 5 min

export const entryFetch = id => ({
    type: EVENT_ENTRY_FETCH,
    payload: id,
});
export const entrySet = payload => ({
    type: EVENT_ENTRY_SET,
    payload,
});

export const listFetch = { type: EVENT_LIST_FETCH };
export const listSet = payload => ({
    type: EVENT_LIST_SET,
    payload,
});

export const isLoading = state => state.event.loading;
export const isLoadedList = state => now() - delay < state.event.listDate;
// export const isLoadedEvent = id => state => now() - delay < state.event.listDate;
export const getEvent = state => state.event.event;
export const getEventCache = id => state => {
    const timeCheck = now() - delay;
    const cache = state.event.cache.find(entry => {
        console.log('[getEventCache]', {
            id,
            timeCheck,
            eventId: entry.event.id,
            entryDate: entry.date,
        });

        return entry.event.id === id && timeCheck < entry.date;
    });
    return get(cache, 'event', null);
};
export const getList = state => state.event.list;
