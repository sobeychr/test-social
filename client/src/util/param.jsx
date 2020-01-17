import get from 'lodash/get';

export const getUrlParams = props => get(props, 'match.params', {});

export const getParam = (props, key) => get(props, `match.params.${key}`, null);

export const getParamFloat = (props, key) =>
    parseFloat(get(props, `match.params.${key}`, 0));

export const getParamInt = (props, key) =>
    parseInt(get(props, `match.params.${key}`, 0));

export const getParamString = (props, key) =>
    get(props, `match.params.${key}`, '').toString();
