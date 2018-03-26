import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompetitions } from "../actions";
import _ from 'lodash';
import { NavLink, withRouter } from 'react-router-dom';

class CompetitionsList extends Component {
    componentDidMount() {
        this.props.fetchCompetitions();
    }

    renderList() {
        return _.map(this.props.competitions, elem => {
            const link = `/league/${elem.id}`;
            return (
                <li className="" key={elem.id}>
                    <NavLink className="nav-link" activeClassName="nav-active" to={link}>
                        {elem.caption}
                    </NavLink>
                </li>
            );
        });
    }


    render() {
        return(
            <React.Fragment>
                <ul className="navigation-menu">
                    <li><NavLink to="/" exact className="" activeClassName="nav-active">Home</NavLink></li>
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