import { combineReducers } from 'redux';
import CompetitionsReducer from './reducer_competitions';
import TablesReducer from './reducer_tables';
import FixtureReducer from './reducer_fixtures';
import TeamsReducer from './reducer_teams';
import TeamDetailsReducer from './reducer_team_details';

const rootReducer = combineReducers({
    competitions: CompetitionsReducer,
    fixtures: FixtureReducer,
    tables: TablesReducer,
    teams: TeamsReducer,
    team: TeamDetailsReducer
});

export default rootReducer;
