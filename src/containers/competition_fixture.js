import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { fetchFixturesByLeagueId } from '../actions';

class CompetitionFixture extends Component {
    componentDidMount() {
        console.log(this.props.data);
        const { id } = this.props.data;
        return this.props.fetchFixturesByLeagueId(id);
    }
    renderFixtures() {
        console.log(this.props.fixtures);
        const { currentMatchday } = this.props.data;
        const { fixtures } = this.props;
        return _.map(fixtures, elem => {
            if(currentMatchday === elem.matchday) {
                return <div>{elem.homeTeamName}</div>
            }
        }) 
    }
    render() {
        return (
            <div>{this.renderFixtures()}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        fixtures: state.fixtures
    }
}

export default withRouter(connect(mapStateToProps, { fetchFixturesByLeagueId })(CompetitionFixture));