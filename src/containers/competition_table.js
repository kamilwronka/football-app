import React, { Component } from 'react';
import { fetchCompetitionTable } from "../actions";
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

class CompetitionTable extends Component {
    componentDidMount() {
        const id = this.props.comp_id;
        this.props.fetchCompetitionTable(id);
    }
    componentWillReceiveProps(nextProps) {
        const { comp_id } = this.props;
        if(comp_id !== nextProps.comp_id) {
            this.props.fetchCompetitionTable(nextProps.comp_id);
        }
    }

    renderTable() {
        const { teams } = this.props;
        return _.map(teams, elem => {
            return(
                <tr key={elem.position}>
                    <th scope="row">{elem.position}</th>
                    <td><img alt={elem.teamName} className="d-block img-thumb" src={elem.crestURI} /></td>
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
        const styling = "align-middle";
        return(
            <div className="widget">
            <table className="table-sm table-dark table-striped league-table">
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