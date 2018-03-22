import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompetitionDetail } from "../actions";
import { withRouter } from 'react-router-dom';


class CompetitionDetails extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        return this.props.fetchCompetitionDetail(id);
    }
    componentWillUnmount() {
        //here i will reset state of app
    }
    render() {
        const { competition } = this.props;
        if(!competition) {
            return(
                <div className="loader">
                    <div className="item item-1"></div>
                    <div className="item item-2"></div>
                    <div className="item item-3"></div>
                    <div className="item item-4"></div>
                </div>
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
                            <div className="progress-bar progress-bar-animated progress-bar-striped bg-success" role="progressbar" style={{width: progress + '%'}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
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

function mapStateToProps({ competitions }, ownProps) {
    return { competition:  competitions[ownProps.match.params.id] };
}

export default withRouter(connect(mapStateToProps, { fetchCompetitionDetail })(CompetitionDetails));
