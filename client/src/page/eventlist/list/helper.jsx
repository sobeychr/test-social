import last from 'lodash/last';
import { tsToRoundMonth } from 'Util/date';

const dateKey = 'start';

export const splitByMonth = entries => {
    const list = [];
    entries.map(entry => {
        const tsMonth = tsToRoundMonth(entry.start * 1000);

        if (!last(list) || last(list).start !== tsMonth) {
            list.push({
                start: tsMonth,
                list: [],
            });
        }

        last(list).list.push(entry);
    });

    return list;
};
