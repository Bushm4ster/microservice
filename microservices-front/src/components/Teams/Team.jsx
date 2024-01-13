import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './team.css';
import api from '../../services/api';

const Team = () => {
    const { id } = useParams();
    const [team, setTeam] = useState({});
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        api.getTeam(id)
            .then(response => {
                setTeam(response.data);
                setPlayers(response.data.joueurListDTO);
            })
            .catch(error => {
                console.error('Error fetching team data:', error);
            });
    }, [id]);

    return (
        <div className="team-container">
            <h1 className="team-title">Team Players for <span style={{ color: 'red' }}>{team.name}</span></h1>
            <ul className="player-list">
                {players.map((player) => (
                    <li key={player.id} className="player-item">
                        {player.firstName} {player.lastName}
                        <span style={{ float: 'right' }}>{player.numero}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Team;
