import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompetitions } from "../actions";
import _ from 'lodash';
import { Link } from 'react-router-dom';

class CompetitionsList extends Component {
    componentDidMount() {
        this.props.fetchCompetitions();
    }

    renderList() {
        return _.map(this.props.competitions, elem => {
            const link = `/league/${elem.id}`;
            return (
                <li className="nav-item bg-dark" key={elem.id}>
                    <Link className="nav-link" to={link}>
                        {elem.caption}
                    </Link>
                </li>
            );
        });
    }


    render() {
        return(
                <ul className="nav nav-pills nav-fill bg-dark">
                    {this.renderList()}
                </ul>
        );

    }
}

function mapStateToProps(state) {
    return {
        competitions: state.competitions
    }
}

export default connect(mapStateToProps, { fetchCompetitions })(CompetitionsList);