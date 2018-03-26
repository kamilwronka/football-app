import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Home from './home';
import CompetitionContainer from '../containers/competition';
import TeamDetails from '../containers/team_details';

class PageContent extends Component {
    render() {
        return(
            <div className="page-content container-fluid">
                <Switch>
                    <Route path="/team/:id" component={TeamDetails} />
                    <Route path="/league/:id" component={CompetitionContainer}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default PageContent;