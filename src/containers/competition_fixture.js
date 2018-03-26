import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFixturesByLeagueId } from '../actions';

import Loader from '../components/loader';

class CompetitionFixture extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        return this.props.fetchFixturesByLeagueId(id);
    }

    componentWillReceiveProps(nextProps) {
       const { id } = this.props.match.params;
        if( id !== nextProps.match.params.id) {
           return this.props.fetchFixturesByLeagueId(nextProps.match.params.id);
       }
    }

    renderFixtures() {
        const currentMatchday = this.props.data;
        const { fixtures } = this.props.fixtures;

        return fixtures.map(elem => {
           if(elem.matchday === currentMatchday) {
               const { result } = elem;
               const date = new Date(elem.date);
               const options = {hour: "2-digit", minute: "2-digit", localeMatcher: "best fit" };
               return(
                    <tr key={elem.homeTeamName}>
                       <td>{date.toLocaleDateString("pl", options)}</td>
                        <td>{elem.homeTeamName}</td>
                        <td>{result.goalsHomeTeam === null ? '-' : result.goalsHomeTeam}</td>
                        <td> : </td>
                        <td>{result.goalsAwayTeam === null ? '-' : result.goalsAwayTeam}</td>
                        <td>{elem.awayTeamName}</td>
                    </tr>
               );
           }
       })
    }
    render() {
        const { fixtures } = this.props.fixtures;

        if(!fixtures) {
            return(
                <Loader />
            );
        }

        const currentMatchday = this.props.data;
        const styling="align-middle";
        return (
            <div className="widget">
            <table className="table table-striped table-dark table-fixtures">
                <thead>
                    <tr>
                        <th colSpan="6">Matchday: {currentMatchday}</th>
                    </tr>
                <tr> 
                    <th className={styling} scope="col">date</th>
                    <th className={styling} scope="col">home</th>
                    <th colSpan="3" className={styling} scope="col">result</th>
                    <th className={styling} scope="col">away</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderFixtures()}
                </tbody>
            </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        fixtures: state.fixtures
    }
}

export default withRouter(connect(mapStateToProps, { fetchFixturesByLeagueId })(CompetitionFixture));