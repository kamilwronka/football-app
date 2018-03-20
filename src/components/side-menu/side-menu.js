import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CompetitionList from '../../containers/competition_list';
import Footer from '../../components/footer/footer';

const SideMenu = () => {
    return (
            <div className="side-menu">
                <CompetitionList />
                <Footer />
            </div>
    );
};

export default SideMenu;