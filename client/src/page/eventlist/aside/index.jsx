import React from 'react';

import CreateButton from './create';
import FilterEvent from './filter';
import style from './style';

const AsideList = ({ onFilter, onShowForm }) => (
    <aside className='aside aside-list'>
        <div className='aside-list-block'>
            <CreateButton onShowForm={onShowForm} />
            <FilterEvent onFilter={onFilter} />
        </div>
    </aside>
);

export default AsideList;
