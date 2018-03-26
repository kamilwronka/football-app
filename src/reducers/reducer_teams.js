import { FETCH_COMPETITION_TEAMS } from '../actions';
import _ from 'lodash';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_COMPETITION_TEAMS:
            return _.mapKeys(action.payload.data.teams, 'shortName');
        default:
            return state;
    }
}