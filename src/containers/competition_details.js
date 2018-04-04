import React, { Component } from 'react';

import Loader from '../components/loader';


class CompetitionDetails extends Component {
    render() {
        const competition = this.props.data;
        if(!competition) {
            return(
                <Loader />
            );
        } 
        const progress = ((competition.currentMatchday/competition.numberOfMatchdays) * 100).toFixed(0);
        return (   
            <React.Fragment>
                <div className="widget">
                    <table className="details-table">
                        <thead>
                            <tr><th colSpan="2">{competition.caption}</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="logo" colSpan="2">
                                    <img alt="" className="details-logo" src={`${process.env.PUBLIC_URL}/images/${competition.league}.svg`} />
                                </td>
                            </tr>
                            <tr>
                                <td>Current season:</td>
                                <td>{competition.year}</td>
                            </tr>
                            <tr>
                                <td>Current matchday:</td>
                                <td>{competition.currentMatchday}</td>
                            </tr>
                            <tr>
                                <td>Number of matchdays:</td>
                                <td>{competition.numberOfMatchdays}</td>
                            </tr>
                            <tr>
                                <td>Season progress:</td>
                                <td>
                                    <div className="progressbar-container">
                                        <p>{`${progress}%`}</p>
                                        <div style={{width: `${progress}%`}} className="progressbar"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Teams attending:</td>
                                <td>{competition.numberOfTeams}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>           
            </React.Fragment>
        );
    }
}


export default CompetitionDetails;