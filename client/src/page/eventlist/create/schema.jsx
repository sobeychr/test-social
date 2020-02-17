export const error = {
    name: {

    }
};

export const schema = {
    type: 'object',
    required: ['name'],
    properties: {
        name: {
            type: 'string',
            title: 'Name',
        }
    },
};

export const ui = {
    name: {
        'ui:autofocus': true,
        'ui:help': 'Required field',
        'ui:placeholder': 'Event Name'
    }
};
