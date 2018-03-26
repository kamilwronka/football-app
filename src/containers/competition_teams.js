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
                <Link key={elem.shortName} to={link}>
                    <li className="nav-link nav-item">
                        <img className="img-thumb" src={elem.crestUrl} alt="" /> {elem.name}
                    </li>
                </Link>
            );
        })
    }
    render() {
        return(
            <div className="widget">
            <h3>{this.props.data}</h3>
            <p>Select a team in order to get detailed informations.</p>
            <ul className="nav flex-column nav-pills nav-fill">
                    {this.renderTeams()}
            </ul>
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