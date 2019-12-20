const path = 'http://localhost:3300/';
const headers = {
    testHeader: 'ttt',
};

/*
const request = async (method, path, body = {}) =>
    await fetch(`http://localhost:3300/${path}`, {
        method,
        headers: {
            // 'Content-Type': 'application/json',
            'testHeader': 'ttt',
        },
        // body,
    })
        .then(res => (res.status === 200 ? res.json() : false))
        .then(json => json)
        .catch(err => {
            console.log('api request error', err);
            return false;
        });
*/

export const get = async path =>
    await fetch(`http://localhost:3300/${path}`)
        .then(res => (res.status === 200 ? res.json() : false))
        .then(json => json)
        .catch(err => {
            console.log('api request error', err);
            return false;
        });

export const post = async (path, body = {}) =>
    await fetch(`http://localhost:3300/${path}`, {
        method: 'post',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
    })
        .then(res => (res.status === 200 ? res.json() : false))
        .then(json => json)
        .catch(err => {
            console.log('api request error', err);
            return false;
        });
