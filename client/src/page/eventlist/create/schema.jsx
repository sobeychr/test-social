import React from 'react';
import { simpleImage, simpleName } from 'Component/form/property';

export const schema = {
    type: 'object',
    required: [
        'name',
        'title',
        'short',
        'description',
        'type',
        'thumbnail',
        'start',
        'end',
    ],
    properties: {
        name: simpleName({
            title: 'Name',
        }),
        title: simpleName({
            title: 'Title',
        }),
        short: {
            type: 'string',
            title: 'Short Description',
        },
        description: {
            type: 'string',
            title: 'Long Description',
        },
        type: {
            type: 'integer',
            title: 'Type',
        },
        thumbnail: simpleImage({
            title: 'Thumbnail Path',
        }),
        start: {
            type: 'string',
            title: 'Starting Datetime',
            // format: 'date-time',
        },
        end: {
            type: 'string',
            title: 'Ending Datetime',
            // format: 'date-time',
        },
    },
};

const CustomField = ({...props}) => (
    <div>Custom Field</div>
);

export const ui = {
    name: {
        'ui:autofocus': true,
        'ui:description': 'Internal code name',
        'ui:placeholder': 'Name',
    },
    title: {
        'ui:description': 'Public displayed name',
        'ui:placeholder': 'Title',
    },
    short: {
        'ui:description': 'Displayed on the listing',
        'ui:placeholder': 'Short description',
        'ui:options': {
            rows: 2,
        },
        'ui:widget': 'textarea',
    },
    description: {
        'ui:description': 'Displayed on the event page',
        'ui:placeholder': 'Full description',
        'ui:options': {
            rows: 5,
        },
        'ui:widget': 'textarea',
    },
    tag: {
        'ui:description': 'List of keywords',
    },
    thumbnail: {
        'ui:description': 'Image shown on list and event page',
        'ui:placeholder': 'thumb-image.jpg',
    },
    /*
    start: {
        // 'ui:widget': CustomField,
        classNames: 'col-md-2',
    },
    end: {
        // 'ui:widget': CustomField,
        classNames: 'col-md-2',
    },
    */
};
