import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Home from './home';
import About from './about';
import CompetitionContainer from '../containers/competition';
import TeamDetails from '../containers/team_details';
import PlayerDetails from '../containers/player_details';

class PageContent extends Component {
    render() {
        return(
            <div className="page-content container-fluid">
                <Switch>
                    <Route path="/player/:playername" component={PlayerDetails} />
                    <Route path="/team/:id/:teamname" component={TeamDetails} />
                    <Route path="/league/:id" component={CompetitionContainer}/>
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default PageContent;