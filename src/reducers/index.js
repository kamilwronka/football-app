import { combineReducers } from 'redux';
import CompetitionsReducer from './reducer_competitions';
import TablesReducer from './reducer_tables';
import FixtureReducer from './reducer_fixtures';

const rootReducer = combineReducers({
    competitions: CompetitionsReducer,
    fixtures: FixtureReducer,
    tables: TablesReducer
});

export default rootReducer;
