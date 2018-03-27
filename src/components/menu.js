import React, { Component } from 'react';
import CompetitionList from '../containers/competition_list';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter } from "react-router-dom";



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
                <Link to="/">
                    <h3>football app</h3>
                </Link>
                <button onClick={this.onClickButton} className="hamburger">
                        <i className="fas fa-ellipsis-v fa-lg"></i>            
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

export default withRouter(SideMenu);