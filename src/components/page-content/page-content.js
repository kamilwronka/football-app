import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CompetitionDetails from '../../containers/competition_details';
import Home from './home';

class PageContent extends Component {
    render() {
        return(
            <div className="page-content container-fluid">
                <Switch>
                    <Route path="/league/:id" exact={true} component={CompetitionDetails}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default PageContent;