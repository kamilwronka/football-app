import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CompetitionList from '../../containers/competition_list';

const SideMenu = () => {
    return (
            <div className="side-menu bg-dark">
                <CompetitionList />
            </div>
    );
};

export default SideMenu;