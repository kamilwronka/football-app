import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompetitionDetail } from "../actions";
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import CompetitionTable from "./competition_table";



class CompetitionDetails extends Component {
    componentDidMount() {
        const { id} = this.props.match.params;
        return this.props.fetchCompetitionDetail(id);
    }
    componentWillReceiveProps() {

    }
    
    render() {

        const { competition } = this.props;

        if(!competition) {
            return <div>Loading...</div>
        }
        return (
            <React.Fragment>
                <h3>Details about: {competition.caption}</h3>
                <ul className="list-group">
                    <li className="list-group-item">Current season: {competition.year}</li>
                    <li className="list-group-item">Current matchday: {competition.currentMatchday}</li>
                    <li className="list-group-item">Number of matchdays: {competition.numberOfMatchdays}</li>
                    <li className="list-group-item">Teams attending: {competition.numberOfTeams}</li>
                </ul>
                <CompetitionTable comp_id={competition.id} />
            </React.Fragment>
        );
    }
}

function mapStateToProps({ competitions }, ownProps) {
    return { competition:  competitions[ownProps.match.params.id] };
}

export default withRouter(connect(mapStateToProps, { fetchCompetitionDetail })(CompetitionDetails));
