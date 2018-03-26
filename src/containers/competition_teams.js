import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCompetitionTeams } from '../actions';

import Loader from '../components/loader';

class CompetitionTeams extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        return this.props.fetchCompetitionTeams(id);
    }
    renderTeams() {
        const { teams } = this.props;
        if(!teams) {
            return <Loader />
        }
        return _.map(teams, (elem) => {
            const team_id = elem._links.self.href.split("/");
            const link = `/team/${team_id[5]}`;
            return (      
                    <tr key={elem.shortName}>
                        <td><img className="img-thumb" src={elem.crestUrl} alt="" /></td>
                        <td> <Link to={link}> {elem.name} </Link></td>
                    </tr>
            );
        })
    }
    render() {
        return(
            <div className="widget">
            <table>
                <thead>
                <tr> 
                    <th colSpan="2" scope="col">team</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderTeams()}
                </tbody>
            </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        teams: state.teams
    }
}

export default connect(mapStateToProps, { fetchCompetitionTeams })(CompetitionTeams);