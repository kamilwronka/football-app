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
        console.log(this.props);
        if(this.props.type === "nav") {
            const className = "nav-link";
            const activeClassName = "nav-active";
        } else {
            const className = "";
            const activeClassName = "";
        }
        return _.map(this.props.competitions, elem => {
            const link = `/league/${elem.id}/overview`;
            if(elem.id === 464 || elem.id === 458) { 
                //idk why it doesnt work with !== || !==
            } else {
                return (
                    <li className={this.className} key={elem.id}>
                        <NavLink className={this.className} activeClassName={this.activeClassName} to={link}>
                            {elem.caption}
                        </NavLink>
                    </li>
                );
            }
        });
    }


    render() {
        return(
            <React.Fragment>
                <ul className="navigation-menu">
                {this.props.type === "nav" ?
                    <li><NavLink to="/" exact className="" activeClassName="nav-active">Home</NavLink></li> : "" }
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