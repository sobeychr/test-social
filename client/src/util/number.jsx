import padStart from 'lodash/padStart';

export const zeroFill = (number, length = 2) => padStart(number, length, '0');
