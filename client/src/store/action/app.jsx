import {
    APP_INIT,
    APP_SECRET_ERROR,
    APP_SECRET_FETCH,
    APP_SECRET_SET,
} from 'Store/type';

export const initApp = { type: APP_INIT };
export const secretError = { type: APP_SECRET_ERROR };
export const secretFetch = { type: APP_SECRET_FETCH };

export const hasError = state => state.app.error;
export const isLoading = state => state.app.loading;
export const secretGet = state => state.app.secret;
export const secretSet = payload => ({
    type: APP_SECRET_SET,
    payload,
});
