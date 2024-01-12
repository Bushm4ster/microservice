import React, { useState } from 'react';
import './team.css';

const Team = () => {
    const [players, setPlayers] = useState(['John', 'Jane', 'Mike']);
    const [newPlayer, setNewPlayer] = useState('');

    const handleAddPlayer = () => {
        setPlayers([...players, newPlayer]);
        setNewPlayer('');
    };

    return (
        <div className="team-container">
            <h1 className="team-title">Team Players</h1>
            <ul className="player-list">
                {players.map((player, index) => (
                    <li key={index} className="player-item">{player}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newPlayer}
                onChange={(e) => setNewPlayer(e.target.value)}
                className="player-input"
            />
            <button onClick={handleAddPlayer} className="add-player-button">Add Player</button>
        </div>
    );
};

export default Team;
