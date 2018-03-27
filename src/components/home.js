import React from 'react';
import CompetitionList from '../containers/competition_list';

const Home = () => {
    return(
        <div className="splash">
            <h2>Willkommen!</h2>
            <ul>
                <CompetitionList type="home"/>
            </ul>
        </div>
        
    );
};
export default Home;