import React, { Component } from 'react';
import CompetitionList from '../containers/competition_list';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter } from "react-router-dom";
import _ from 'lodash';



class SideMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu : false
        }
        this.onClickButton = this.onClickButton.bind(this);

    }
    handleBack = () => {
        this.props.history.goBack();
    }
    onClickButton = () => {
        this.state.showMenu ? this.setState({showMenu: false}) : this.setState({showMenu: true});
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
    renderPageTitle() {
        const pathname = _.last(this.props.location.pathname.split("/"));
        if(typeof pathname !== Number) {
            return pathname.charAt(0).toUpperCase() + pathname.slice(1);
        }
    }
    render() {
        return (
            <div className="page-header">
                {this.props.match.path === "/" && this.props.match.isExact === true ?
                "" : 
                    <button 
                        onClick={this.handleBack} 
                        className="back-button">
                        <i className="fas fa-chevron-left fa-lg"></i>
                    </button> 
                }
                <h3>
                    {this.props.match.path === "/" && this.props.match.isExact === true ? "Football App" : this.renderPageTitle()}
                </h3>
                <button onClick={this.onClickButton} className="hamburger">
                        <i className="fas fa-ellipsis-v fa-lg"></i>            
                </button>


            <ReactCSSTransitionGroup
                transitionName="menu-toggle"
                transitionEnterTimeout={400}
                transitionLeaveTimeout={400}>
                {this.state.showMenu ? <div onClick={this.onClickButton} className="page-menu"><CompetitionList type="nav"/></div> : ""}      
            </ReactCSSTransitionGroup> 

            </div>
        );
    }
};

export default withRouter(SideMenu);