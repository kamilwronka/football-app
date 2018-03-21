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
                <li className="nav-item" key={elem.id}>
                    <Link className="nav-link" to={link}>
                        {elem.caption}
                    </Link>
                </li>
            );
        });
    }


    render() {
        return(
            <React.Fragment>
            <h3 className="text-white mt-3">
                <Link to="/">Home</Link>
            </h3>
                <ul className="nav nav-pills nav-fill mt-3">
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

export default connect(mapStateToProps, { fetchCompetitions })(CompetitionsList);