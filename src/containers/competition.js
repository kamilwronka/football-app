import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { fetchCompetitionDetail } from "../actions";

import CompetitionDetails from '../containers/competition_details';
import CompetitionTable from '../containers/competition_table';
import CompetitionTeams from '../containers/competition_teams';
import CompetitionResults from '../containers/competition_results';
import BottomMenu from '../components/bottom_menu';
import Loader from '../components/loader';


class CompetitionContainer extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        return this.props.fetchCompetitionDetail(id);
    }
    render() {
        const id = this.props.match.params;
        const { competition } = this.props;
        if(!competition) {
            return(
                <Loader />
            )
        }
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/league/:id/teams" exact={true} render={(props) => <CompetitionTeams {...props} data={competition.caption} /> } />                 
                    <Route path="/league/:id/table" exact={true} component={CompetitionTable} />
                    <Route 
                        path="/league/:id/overview" 
                        exact={true} 
                        render={(props) => <CompetitionDetails {...props} data={competition}/>} />
                        <Route path="/league/:id/results"
                        exact={true} 
                        render={(props) => <CompetitionResults {...props} data={competition}/>} />
                </Switch>
                <BottomMenu data={this.props.match.params.id} />
            </React.Fragment>
        );
    }
    
}
function mapStateToProps({ competitions }, ownProps) {
    return { competition:  competitions[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchCompetitionDetail })(CompetitionContainer);