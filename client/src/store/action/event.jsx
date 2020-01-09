import { EVENT_FETCH, EVENT_SET } from 'Store/type';

export const listFetch = { type: EVENT_FETCH };
export const listSet = payload => ({
    type: EVENT_SET,
    payload,
});

export const isLoaded = state => state.event.loaded;
export const isLoading = state => state.event.loading;
export const getList = state => state.event.list;
