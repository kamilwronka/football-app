import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompetitions } from "../actions";
import _ from 'lodash';
import { Link, NavLink, withRouter } from 'react-router-dom';

class CompetitionsList extends Component {
    componentDidMount() {
        this.props.fetchCompetitions();
    }

    renderList() {
        if(!this.props.competitions) {
            return(
                <div className="loader">Loading...</div>
            )
        }
        return _.map(this.props.competitions, elem => {
            const link = `/league/${elem.id}`;
            return (
                <li className="nav-item" key={elem.id}>
                    <NavLink className="nav-link" classActiveName="active" to={link}>
                        {elem.caption}
                    </NavLink>
                </li>
            );
        });
    }


    render() {
        return(
            <React.Fragment>
                <ul className="nav navigation-menu nav-pills nav-fill mt-3">
                    <NavLink to="/" exact className="nav-link text-center" activeClassName="active">Home</NavLink>
                    {this.renderList()}
                </ul>
            </React.Fragment>
        );

    }
}

function mapStateToProps(state) {
    return {
        competitions: state.competitions
    }
}

export default withRouter(connect(mapStateToProps, { fetchCompetitions })(CompetitionsList));