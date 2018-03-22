import React from 'react';
import BottomMenuElem from './bottom_menu-elem';

export default (props) => {
    const { pathname } = window.location;  
    const leagueId = pathname.split('/')[2];
    return(
        <div className="bottom-menu nav-pills">
            <BottomMenuElem name="info" link={leagueId} icon="info"/> 
            <BottomMenuElem name="table" link={leagueId} icon="table"/>
            <BottomMenuElem name="fixtures" link={leagueId} icon="futbol"/>
            <BottomMenuElem name="teams" link={leagueId} icon="users"/>
        </div>
    );
}