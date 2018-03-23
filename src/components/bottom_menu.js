import React from 'react';
import BottomMenuElem from './bottom_menu-elem';

export default (props) => {
    const id = props.data;
    return(
        <div className="bottom-menu nav-pills">
            <BottomMenuElem name="info" link={id} icon="info"/> 
            <BottomMenuElem name="table" link={id} icon="table"/>
            <BottomMenuElem name="fixtures" link={id} icon="futbol"/>
            <BottomMenuElem name="teams" link={id} icon="users"/>
        </div>
    );
}