import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTeamDetails } from '../actions';

import TeamPlayers from './team_players';

class TeamDetails extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        return this.props.getTeamDetails(id);
    }
    render() {
        const { team } = this.props;
        const { id } = this.props.match.params;
        return(
            <div className="widget">
                <div className="team-details">
                <img src={team.crestUrl} alt="" className="img-team-details" />
                <h3>{team.name}</h3>
                    <ul className="">
                        <li className="">Shortname: {team.shortName}</li>
                        <li className="">Squad value: {team.squadMarketValue ? team.squadMarketValue : 'Not available'}</li>
                        <li>More info will be added soon, I'm limited by API.</li>
                    </ul>
                </div>
                <TeamPlayers id={id}/>
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