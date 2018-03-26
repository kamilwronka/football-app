import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Loader from '../components/loader';


class CompetitionDetails extends Component {
    render() {
        const competition = this.props.data;
        if(!competition) {
            return(
                <Loader />
            );
        } 
        const progress = ((competition.currentMatchday/competition.numberOfMatchdays) * 100);
        return (   
            <React.Fragment>
                <div className="widget">
                    <h3>League details</h3>
                    <ul className="list-group">
                        <li className="list-group-item">League: {competition.caption}</li>
                        <li className="list-group-item">Current season: {competition.year}</li>
                        <li className="list-group-item">Current matchday: {competition.currentMatchday}</li>
                        <li className="list-group-item">Number of matchdays: {competition.numberOfMatchdays}</li>
                        <li className="list-group-item">
                        Season progress:
                        <div className="progress">
                            <div className="progress-bar progress-bar-animated progress-bar-striped bg-danger" role="progressbar" style={{width: progress + '%'}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </li>
                        <li className="list-group-item">Teams attending: {competition.numberOfTeams}</li>
                    </ul>
                </div>   
                <div>
                </div>             
            </React.Fragment>
        );
    }
}


export default CompetitionDetails;