import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { menuToggle } from '../../actions';
import CompetitionList from '../../containers/competition_list';
import { NavLink } from 'react-router-dom';



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
    }
    render() {
        return (
            <div className="page-header">
                <h3 className>Football App</h3>
                <button onClick={this.onClickButton} className="hamburger">
                    <i className="fas fa-bars open-icon"></i>
                    <i className="fas fa-times close-icon"></i>
                </button>
            <div className="page-menu">
            {this.state.showMenu ? <CompetitionList /> : ""}
                
               
            </div>
            </div>
        );
    }
};

export default SideMenu;