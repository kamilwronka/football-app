import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTeamDetails } from '../actions';

class TeamDetails extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        return this.props.getTeamDetails(id);
    }
    render() {
        const { team } = this.props;
        return(
            <div className="widget">
            <img src={team.crestUrl} alt="" className="img-team-details" />
            <h3>{team.name}</h3>
                <ul className="list-group">
                    <li className="list-group-item">Shortname: {team.shortName}</li>
                    <li className="list-group-item">Squad value: {team.squadMarketValue ? team.squadMarketValue : 'Not available'}</li>
                    <li className="list-group-item">League place: </li>
                    <li className="list-group-item">Next match: </li>
                    <li className="list-group-item">List of players </li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        team: state.team
    }
}

export default connect(mapStateToProps, { getTeamDetails })(TeamDetails);