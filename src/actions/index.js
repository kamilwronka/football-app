import axios from 'axios';

const API_KEY = '91f2afa800d04848a0de608945ebf27c';
const ROOT_URL = 'http://api.football-data.org/v1';

const instance = axios.create({
    baseURL: ROOT_URL,
    headers: {'X-Auth-Token': API_KEY}
});

export const FETCH_COMPETITIONS = 'fetch_competitions';
export const FETCH_COMPETITION_DETAILS = 'fetch_competition_detail';
export const FETCH_COMPETITION_TABLE = 'fetch_competition_table';
export const FETCH_FIXTURES_BY_LEAGUE_ID = 'fetch_fixtures_by_league_id';
export const FETCH_COMPETITION_TEAMS = 'fetch_competition_teams';
export const GET_TEAM_DETAILS = 'get_team_details';

export const SHOW_MENU = 'show_menu';

export function fetchCompetitions() {
    const request = instance.get('/competitions');

    console.log(request);

    return {
        type: FETCH_COMPETITIONS,
        payload: request
    }
}

export function fetchCompetitionDetail(id) {
    const request = instance.get(`/competitions/${id}`);

    return {
        type: FETCH_COMPETITION_DETAILS,
        payload: request
    }
}

export function fetchCompetitionTable(id) {
    const request = instance.get(`/competitions/${id}/leagueTable`);

    return {
        type: FETCH_COMPETITION_TABLE,
        payload: request
    }
}

export function fetchFixturesByLeagueId(id) {
    const request = instance.get(`/competitions/${id}/fixtures`);

    return {
        type: FETCH_FIXTURES_BY_LEAGUE_ID,
        payload: request
    }
}

export function fetchCompetitionTeams(id) {
    const request = instance.get(`/competitions/${id}/teams`);

    return {
        type: FETCH_COMPETITION_TEAMS,
        payload: request
    }
}

export function getTeamDetails(id) {
    const request = instance.get(`/teams/${id}`);

    return {
        type: GET_TEAM_DETAILS,
        payload: request
    }
}

export function menuToggle() { 
    return {
        type: SHOW_MENU
    }
}