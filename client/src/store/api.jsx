import isEmpty from 'lodash/fp/isEmpty';

const delay = 2500; // timeout in milliseconds
const host = 'http://localhost:3300/';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

const request = async (method, path, data = {}) => await timeout(delay, fetch(`${host}${path}`,
        method === 'get' ? {} : {
            method,
            headers,
            body: JSON.stringify(data),
        }
    ))
    .then(res => (res.status === 200 ? res.json() : false))
    .then(json => json)
    .catch(err => {
        console.log('[Api]', 'api request error', err);
        return false;
    });

const timeout = (delay, promise) => new Promise((res, rej) => {
    setTimeout(() => rej(new Error('timeout')), delay);
    promise.then(res, rej);
});

export const get = async path => await request('get', path);

export const post = async (path, data = {}) => await request('post', path, data);
