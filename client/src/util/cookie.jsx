let cookies = [];
let parsed = false;

const parseCookies = () => {
    if (parsed) {
        return;
    }
    parsed = true;
    const list = document.cookie.toString().split('; ');
    cookies = list.map(entry => {
        const [name, value] = entry.split('=');
        return { name, value };
    });
};

export const delayMinute = 1000 * 60;
export const delayHour = delayMinute * 60;
export const delayDay = delayHour * 24;
export const delayWeek = delayDay * 7;
const delayDefault = delayWeek;

export const get = name => {
    parseCookies();
    const cookie = cookies.find(entry => entry.name === name);
    return cookie ? cookie.value : null;
};

export const remove = (name, path = '/') => {
    parseCookies();
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
    cookies = cookies.filter(entry => entry.name !== name);
};

export const set = (name, value, options = {}) => {
    parseCookies();
    const { delay = delayDefault, path = '/' } = options;
    const date = new Date(Date.now() + delay);
    cookies.push({ name, value });
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=${path}`;
};
