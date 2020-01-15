import last from 'lodash/last';
import { tsToRoundMonth } from 'Util/date';

const dateKey = 'start';

const getEnd = timestamp => {
    const d = new Date(timestamp * 1000);
    return Math.floor(
        new Date(d.getFullYear(), d.getMonth() + 1, 0).getTime() * 0.001,
    );
};

const getNextMonth = (entries, minimum = 0) => {
    const entry = entries.find(entry => entry[dateKey] > minimum);
    const start = tsToRoundMonth(entry[dateKey] * 1000);
    return {
        start,
        end: getEnd(start),
    };
};

const filterByMonth = (entries, start, end) =>
    entries.filter(entry => start <= entry[dateKey] && entry[dateKey] <= end);

export const splitByMonth = entries => {
    const list = [];
    const lastDate = last(entries)[dateKey];
    let previous = 0;

    while (previous < lastDate) {
        const { start, end } = getNextMonth(entries, previous);
        const sublist = filterByMonth(entries, start, end);

        list.push({
            start,
            list: sublist,
        });
        previous = end + 1;
    }

    return list;
};
