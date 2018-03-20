import { FETCH_COMPETITIONS, FETCH_COMPETITION_DETAILS } from '../actions/index';
import _ from 'lodash';


export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_COMPETITION_DETAILS:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_COMPETITIONS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}