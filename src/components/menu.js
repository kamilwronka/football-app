import React, { Component } from 'react';
import CompetitionList from '../containers/competition_list';
import { Link } from 'react-router-dom';
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
                <Link to="/">
                    <h3>Football App</h3>
                </Link>
                <button onClick={this.onClickButton} className="hamburger">
                        {this.state.showMenu ? <i className="fas fa-times close-icon"></i> : <i className="fas fa-bars open-icon"></i>}             
                </button>


            <ReactCSSTransitionGroup
                transitionName="menu-toggle"
                transitionEnterTimeout={400}
                transitionLeaveTimeout={400}>
                {this.state.showMenu ? <div onClick={this.onClickButton} className="page-menu"><CompetitionList /></div> : ""}      
            </ReactCSSTransitionGroup> 

            </div>
        );
    }
};

export default SideMenu;