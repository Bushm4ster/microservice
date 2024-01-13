import axios from 'axios';

const API_URL = 'http://localhost:8086';

export default {
    getPlayers() {
        return axios.get(`${API_URL}/joueurs/`);
    },
    getPlayer(id) {
        return axios.get(`${API_URL}/joueurs/${id}`);
    },
    getTeamPlayers(id) {
        return axios.get(`${API_URL}/joueurs/equipe/${id}`);
    },
    addPlayer(player) {
        return axios.post(`${API_URL}/joueurs/`, player);
    },

    getTeams() {
        return axios.get(`${API_URL}/equipes/`);
    },
    getTeam(id) {
        return axios.get(`${API_URL}/equipes/${id}`);
    },

    getMatches() {
        return axios.get(`${API_URL}/matches/`);
    },
    getMatch(id) {
        return axios.get(`${API_URL}/matches/${id}`);
    }
};