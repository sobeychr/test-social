import React, { useState, useEffect } from 'react';
// TODO: switch timer to debounce
// import debounce from 'lodash/debounce';

// Bsed on Bootstrap grid - https://react-bootstrap.github.io/layout/grid/
const displayList = [
    { name: 'xl', size: 1200 },
    { name: 'lg', size: 992 },
    { name: 'md', size: 768 },
    { name: 'sm', size: 576 },
    { name: 'xs', size: 0 },
];
const delay = 75;
const defaultDisplay = displayList[0].name;

let dispatch = true;

const getDisplay = width => displayList.find(entry => entry.size < width).name;

const onDebounce = () => {
    console.log('onDebounce');
};

const withWindowSize = Component => {
    return props => {
        const [display, setDisplay] = useState(defaultDisplay);
        const [height, setHeight] = useState(0);
        const [width, setWidth] = useState(0);

        let timer;

        const onResize = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                const { innerWidth: width, innerHeight: height } = window;
                setDisplay(getDisplay(width));
                setHeight(height);
                setWidth(width);
            }, delay);
        };

        /*
        const onResize = () => {
            console.log('onResize');
            debounce(onDebounce, delay, {
                maxWait: 1200,
            });
        };
        */

        useEffect(() => {
            window.addEventListener('resize', onResize);
            if (dispatch) {
                window.dispatchEvent(new Event('resize'));
                dispatch = false;
            }
            return () => window.removeEventListener('resize', onResize);
        });

        return (
            <Component
                windowDisplay={display}
                windowHeight={height}
                windowWidth={width}
                {...props}
            />
        );
    };
};

export default withWindowSize;
