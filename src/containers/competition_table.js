import React, { Component } from 'react';
import { fetchCompetitionTable } from "../actions";
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import Loader from '../components/loader';

class CompetitionTable extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchCompetitionTable(id);
    }
   // componentWillReceiveProps(nextProps) {
   //     const { id } = this.props.match.params;
    //    if(comp_id !== nextProps.match.params) {
   //         this.props.fetchCompetitionTable(nextProps.comp_id);
    //    }
   // }

    renderTable() {
        const { teams } = this.props;
        return _.map(teams, elem => {
            return(
                <tr key={elem.position}>
                    <th scope="row">{elem.position}</th>
                    <td><img alt="" className="d-block img-thumb" src={elem.crestURI} /></td>
                    <td>{elem.teamName}</td>
                    <td>{elem.playedGames}</td>
                    <td>{elem.points}</td>
                    <td>{elem.wins}</td>
                    <td>{elem.draws}</td>
                    <td>{elem.losses}</td>
                </tr>
            );
        });

    }
    render() {
        const { teams } = this.props;
        if(!teams) {
            return <Loader />
        }
        return(
            <div className="widget">
            <h3>League table</h3>
            <table className="table table-striped table-sm table-dark table league-table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th colSpan="2" scope="col">team</th>
                    <th scope="col">M</th>
                    <th scope="col">P</th>
                    <th scope="col">W</th>
                    <th scope="col">D</th>
                    <th scope="col">L</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderTable()}
                </tbody>
            </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        teams: state.tables
    }
}

export default withRouter(connect(mapStateToProps, { fetchCompetitionTable })(CompetitionTable));