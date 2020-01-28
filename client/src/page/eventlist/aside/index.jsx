import React from 'react';

import CreateButton from './create';
import FilterEvent from './filter';
import style from './style';

const AsideList = ({ setFilter }) => (
    <aside className='aside aside-list'>
        <div className='aside-list-block'>
            <CreateButton />
            <FilterEvent setFilter={setFilter} />
        </div>
    </aside>
);

export default AsideList;
