import { APP_INIT, APP_SECRET_FETCH, APP_SECRET_SET } from 'Store/type';

export const initApp = {
    type: APP_INIT,
};

export const isLoading = state => state.app.loading;

export const secretFetch = { type: APP_SECRET_FETCH };
export const secretGet = state => state.app.secret;
export const secretSet = payload => ({
    type: APP_SECRET_SET,
    payload,
});
