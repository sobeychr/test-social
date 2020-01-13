import { zeroFill } from 'Util/number';

export const tsToDate = timestamp => {
    const d = new Date(timestamp);
    return [
        d.getFullYear(),
        zeroFill(d.getMonth()),
        zeroFill(d.getDate()),
    ].join('-');
};

export const tsToDateTime = timestamp => tsToDate(timestamp) + ' ' + tsToTime(timestamp);

export const tsToTime = timestamp => {
    const d = new Date(timestamp);
    return [
        zeroFill(d.getHours()),
        zeroFill(d.getMinutes()),
        zeroFill(d.getSeconds()),
    ].join(':');
};
