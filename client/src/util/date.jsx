import { zeroFill } from 'Util/number';

const monthStrings = [
    'Januray',
    'February',
    'March',
    'April',
    'May',
    'June',
    'Jully',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const monthToString = (month, cut = false) => {
    const str = monthStrings[month] || '';
    return cut ? str.substring(0, Math.min(str.length, 3)) : str;
};

export const tsToRoundMonth = timestamp => {
    const d = new Date(timestamp);
    return Math.floor(
        new Date(d.getFullYear(), d.getMonth(), 1, 0).getTime() * 0.001,
    );
};

export const tsToDate = timestamp => {
    const d = new Date(timestamp);
    return [
        d.getUTCFullYear(),
        zeroFill(d.getUTCMonth() + 1),
        zeroFill(d.getUTCDate()),
    ].join('-');
};

export const tsToDateTime = timestamp =>
    tsToDate(timestamp) + ' ' + tsToTime(timestamp);

export const tsToTime = timestamp => {
    const d = new Date(timestamp);
    return [
        zeroFill(d.getUTCHours()),
        zeroFill(d.getUTCMinutes()),
        zeroFill(d.getUTCSeconds()),
    ].join(':');
};
