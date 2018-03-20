import axios from 'axios';

const API_KEY = '91f2afa800d04848a0de608945ebf27c';
const ROOT_URL = 'http://api.football-data.org/v1';

const instance = axios.create({
    baseURL: 'http://api.football-data.org/v1',
    headers: {'X-Auth-Token': API_KEY}
});

export const FETCH_COMPETITIONS = 'fetch_competitions';
export const FETCH_COMPETITION_DETAILS = 'fetch_competition_detail';
export const FETCH_COMPETITION_TABLE = 'fetch_competition_table';

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
