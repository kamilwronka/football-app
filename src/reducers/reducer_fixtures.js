import _ from 'lodash';
import { FETCH_FIXTURES_BY_LEAGUE_ID } from '../actions';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_FIXTURES_BY_LEAGUE_ID:
            return _.mapKeys(action.payload.data.fixtures, 'matchday');
        default:
            return state;
    }
}