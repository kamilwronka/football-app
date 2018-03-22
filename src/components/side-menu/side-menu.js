import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { menuToggle } from '../../actions';
import CompetitionList from '../../containers/competition_list';
import { NavLink } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class SideMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu : false
        }
        this.onClickButton = this.onClickButton.bind(this);

    }
    onClickButton = () => {
        this.state.showMenu ? this.setState({showMenu: false}) : this.setState({showMenu: true});
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <div className="page-header">
                <h3 className>Football App</h3>
                <button onClick={this.onClickButton} className="hamburger">

                     {this.state.showMenu ? <i className="fas fa-times close-icon"></i> : <i className="fas fa-bars open-icon"></i>}
                    
                    
                </button>

            <div onClick={this.onClickButton} className="page-menu">
            <ReactCSSTransitionGroup
                transitionName="menu-toggle"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {this.state.showMenu ? <div className="page-menu-container"><CompetitionList /></div> : ""}      
            </ReactCSSTransitionGroup> 
            </div>
            </div>
        );
    }
};

export default SideMenu;