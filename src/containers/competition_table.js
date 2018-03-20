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
        const styling = "align-middle";
        return _.map(teams, elem => {
            return(
                <tr key={elem.position}>
                    <th scope="row" className={styling}>{elem.position}</th>
                    <td className={styling}><img className="mx-auto d-block img-thumb" src={elem.crestURI} /></td>
                    <td className={styling}>{elem.teamName}</td>
                    <td className={styling}>{elem.playedGames}</td>
                    <td className={styling}>{elem.points}</td>
                    <td className={styling}>{elem.wins}</td>
                    <td className={styling}>{elem.draws}</td>
                    <td className={styling}>{elem.losses}</td>
                </tr>
            );
        });

    }



    render() {
        const styling = "align-middle";
        return(
            <React.Fragment>
            <table className="table table-striped table-sm table-dark">
                <thead>
                <tr>
                    <th className={styling} scope="col">#</th>
                    <th colSpan="2" className={styling} scope="col">team</th>
                    <th className={styling} scope="col">M</th>
                    <th className={styling} scope="col">P</th>
                    <th className={styling} scope="col">W</th>
                    <th className={styling} scope="col">D</th>
                    <th className={styling} scope="col">L</th>
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