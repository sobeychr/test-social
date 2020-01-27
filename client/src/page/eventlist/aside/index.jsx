import React from 'react';

import CreateButton from './create';
import SearchEvent from './search';
import style from './style';

const AsideList = ({setFilter}) => (
    <aside className='aside aside-list'>
        <CreateButton />
        <SearchEvent setFilter={setFilter} />
    </aside>
);

export default AsideList;
