import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompetitionDetail } from "../actions";
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import CompetitionTable from "./competition_table";
import CompetitionInfo from '../components/widgets/competition_info';
import CompetitionFixture from './competition_fixture';


class CompetitionDetails extends Component {
    componentDidMount() {
        const { id} = this.props.match.params;
        return this.props.fetchCompetitionDetail(id);
    }
    componentWillUnmount() {
        //here i will reset state of app
    }
    render() {

        const { competition } = this.props;
        if(!competition) {
            return(
                <div className="loader">
                    <div className="item item-1"></div>
                    <div className="item item-2"></div>
                    <div className="item item-3"></div>
                    <div className="item item-4"></div>
                </div>
            );
        }
        return (
            <React.Fragment>
                <h3 className="my-2">Details about: {competition.caption}</h3>
                    <CompetitionTable comp_id={competition.id} />
                    <CompetitionInfo data={competition} />             
                    <CompetitionFixture data={competition} />
            </React.Fragment>
        );
    }
}

function mapStateToProps({ competitions }, ownProps) {
    return { competition:  competitions[ownProps.match.params.id] };
}

export default withRouter(connect(mapStateToProps, { fetchCompetitionDetail })(CompetitionDetails));
