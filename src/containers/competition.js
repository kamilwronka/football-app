import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { fetchCompetitionDetail } from "../actions";

import CompetitionDetails from '../containers/competition_details';
import CompetitionFixture from '../containers/competition_fixture';
import CompetitionTable from '../containers/competition_table';
import CompetitionTeams from '../containers/competition_teams';
import BottomMenu from '../components/bottom_menu';


class CompetitionContainer extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        return this.props.fetchCompetitionDetail(id);
    }
    render() {
        const id = this.props.match.params;
        const { competition } = this.props;
        console.log( competition );
        if(!competition) {
            return(
                <div>Loading...</div>
            )
        }
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/league/:id/teams" exact={true} component={CompetitionTeams} />                 
                    <Route path="/league/:id/table" exact={true} component={CompetitionTable} />
                    <Route 
                        path="/league/:id" 
                        exact={true} 
                        render={(props) => <CompetitionDetails {...props} data={competition}/>} />
                    <Route path="/league/:id/fixtures"
                        exact={true} 
                        render={(props) => <CompetitionFixture {...props} data={competition.currentMatchday}/>} />
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