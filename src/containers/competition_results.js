import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFixturesByLeagueId } from '../actions';
import _ from 'lodash';

import Loader from '../components/loader';

class CompetitionFixture extends Component {
    constructor(props) {
        super(props);
        const matchday = props.data.currentMatchday - 1;
        this.state = {
            value : `${matchday}`
        }
        this.handleChange = this.handleChange.bind(this);
    }
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
    renderResults(selectedMatchday) {
      //  this.setState({ currentMatchday });
        const { fixtures } = this.props.fixtures;
        return fixtures.map(elem => {
           if(elem.matchday === Number(selectedMatchday)) {
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
    renderSelectMatchday(currMatchday) {
        const { numberOfMatchdays } = this.props.data;
        if(!numberOfMatchdays) {
            return <option>Loading...</option>
        }
        const matchdays = _.range(0, numberOfMatchdays);
        return matchdays.map((elem) => {
            return <option key={elem} value={elem}>{elem}</option>
        })
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    render() {
        const { fixtures } = this.props.fixtures;
        if(!fixtures) {
            return(
                <Loader />
            );
        }
        const { currentMatchday } = this.props.data;
        const styling="align-middle";
        return (
            <div className="widget">
            <table className="table table-striped table-dark table-fixtures">
                <thead>
                    <tr>
                        <th colSpan="6">
                            Matchday:
                            <select defaultValue={currentMatchday - 1} onChange={this.handleChange}>
                                {this.renderSelectMatchday(currentMatchday - 1)}
                            </select>
                        </th>
                    </tr>
                <tr> 
                    <th className={styling} scope="col">date</th>
                    <th className={styling} scope="col">home</th>
                    <th colSpan="3" className={styling} scope="col">result</th>
                    <th className={styling} scope="col">away</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderResults(this.state.value)}
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