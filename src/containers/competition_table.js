import React, { Component } from 'react';
import { fetchCompetitionTable } from "../actions";
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

class CompetitionTable extends Component {
    componentDidMount() {
        const id = this.props.comp_id;
        this.props.fetchCompetitionTable(id);
        console.log(id);
    }
    componentWillReceiveProps(nextProps) {
        const { comp_id } = this.props;
        if(comp_id !== nextProps.comp_id) {
            this.props.fetchCompetitionTable(nextProps.comp_id);
        }
    }

    renderTable() {
        const { teams } = this.props;
        console.log(teams);
        return _.map(teams, elem => {
            return(
                <tr key={elem.position}>
                    <td className="align-middle">{elem.position}</td>
                    <td className="align-middle"><img className="img-thumb" src={elem.crestURI} /></td>
                    <td className="align-middle">{elem.playedGames}</td>
                    <td className="align-middle">{elem.points}</td>
                    <td className="align-middle">{elem.wins}</td>
                    <td className="align-middle">{elem.draws}</td>
                    <td className="align-middle">{elem.losses}</td>
                </tr>
            );
        });

    }



    render() {
        return(
            <React.Fragment>
            <table className="table table-hover table-sm">
                <thead>
                <tr>
                    <th className="align-middle" scope="col">#</th>
                    <th className="align-middle" scope="col">team</th>
                    <th className="align-middle" scope="col">games</th>
                    <th className="align-middle" scope="col">points</th>
                    <th className="align-middle" scope="col">wins</th>
                    <th className="align-middle" scope="col">draws</th>
                    <th className="align-middle" scope="col">losses</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderTable()}
                </tbody>
            </table>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        teams: state.tables
    }
}

export default withRouter(connect(mapStateToProps, { fetchCompetitionTable })(CompetitionTable));