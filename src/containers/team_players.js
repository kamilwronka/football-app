import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTeamPlayers } from '../actions';
import Loader from '../components/loader';


class TeamPlayers extends Component {
    componentDidMount() {
        const { id } = this.props;
        return this.props.getTeamPlayers(id);
    }
    handleClick() {

    }
    renderPlayersTable() {
        const { players } = this.props.players;
        console.log(players.length);
        return players.map(elem => {
            return (
                    <tr key={elem.name} onClick={this.handleClick}>
                        <td>{elem.jerseyNumber}</td>
                        <td>
                            {elem.name}
                        </td>
                    </tr>
            )
        });
    }
    render() {
        const { players } = this.props.players;

        if(!players) {
            return <Loader />;
        }
        if(players.length > 0) {
            return(
                <table className="players-list">
                    <thead><tr><th colSpan="2">List of players</th></tr></thead>
                    <tbody>
                        {this.renderPlayersTable()}
                    </tbody>
                </table>
        );  
        } else {
            return(
                <div className="players-list-not-available">
                    List of players is not available.
                </div>
            );
        }
          
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps, { getTeamPlayers })(TeamPlayers);