import _ from 'lodash';
import { FETCH_COMPETITION_TABLE } from "../actions";

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_COMPETITION_TABLE:
            const { standing } = action.payload.data;
            return _.mapKeys(standing, 'position');
        default:
            return state;
    }
}