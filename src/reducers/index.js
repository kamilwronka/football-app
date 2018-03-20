import { combineReducers } from 'redux';
import CompetitionsReducer from './reducer_competitions';
import TablesReducer from './reducer_tables';

const rootReducer = combineReducers({
    competitions: CompetitionsReducer,
    tables: TablesReducer
});

export default rootReducer;
