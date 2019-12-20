export const schema = {
    type: 'object',
    required: [
        'username',
        'password',
        'secret',
    ],
    properties: {
        username: {
            type: 'string',
            enumNames: ['test', 'mark', 'bob']
        },
        password: {
            type: 'string',
        },
        secret: {
            type: 'string',
            default: 'ttt',
        },
    },
    'ui:order': [
        'username',
        'password',
        'secret',
    ],
};

export const uiSchema = {
    username: {
        'ui:autofocus': true,
        'ui:emptyValue': '',
        'ui:placeholder': 'Username',
        'ui:options': {
            label: false,
        },
    },
    password: {
        'ui:placeholder': 'Password',
        'ui:widget': 'password',
        'ui:options': {
            label: false,
        },
    },
    secret: {
        'ui:widget': 'hidden',
    },
};
