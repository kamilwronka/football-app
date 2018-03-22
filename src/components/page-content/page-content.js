import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CompetitionDetails from '../../containers/competition_details';
import CompetitionFixture from '../../containers/competition_fixture';
import CompetitionTable from '../../containers/competition_table';
import CompetitionTeams from '../../containers/competition_teams';
import CompetitionDetail from '../../containers/competition_details';

import Home from './home';

class PageContent extends Component {
    render() {
        return(
            <div className="page-content container-fluid">
                <Switch>
                    <Route path="/league/:id/teams" exact={true} component={CompetitionTeams} />
                    <Route path="/league/:id/fixtures" exact={true} component={CompetitionFixture} />
                    <Route path="/league/:id/table" exact={true} component={CompetitionTable} />
                    <Route path="/league/:id/info" exact={true} component={CompetitionDetail} />
                    <Route path="/league/:id" exact={true} component={CompetitionDetails}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default PageContent;