import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFixturesByLeagueId } from '../actions';

class CompetitionFixture extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        return this.props.fetchFixturesByLeagueId(id);
    }

    componentWillReceiveProps(nextProps) {
       const { id } = this.props.match.params;
       console.log(id, nextProps.match.params.id);
        if( id !== nextProps.match.params.id) {
           return this.props.fetchFixturesByLeagueId(nextProps.match.params.id);
       }
    }

    renderFixtures() {
        const currentMatchday = this.props.data;
        const { fixtures } = this.props.fixtures;

        if(!fixtures) {
            return(
                <tr><td colSpan="5">Loading...</td></tr>
            );
        }

       return fixtures.map(elem => {
           if(elem.matchday === currentMatchday) {
               const { result } = elem;
               return(
                    <tr key={elem.homeTeamName}>
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
        console.log(this.props);
        const currentMatchday = this.props.data;
        const styling="align-middle";
        return (
            <div className="widget">
            <h3>League table</h3>
            <table className="table table-striped table-dark table-fixtures">
                <thead>
                    <tr>
                        <th colSpan="5">Matchday: {currentMatchday}</th>
                    </tr>
                <tr> 
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