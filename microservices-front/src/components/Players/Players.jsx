import React, { useState, useEffect } from 'react';
import './players.css';
import api from '../../services/api'; 

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [selectedTeam, setSelectedTeam] = useState(''); // Added state for selected team
    const [playerNumber, setPlayerNumber] = useState('');
    const [playerNation, setPlayerNation] = useState(''); // Added state for player nation

    const [teams, setTeams] = useState([]); // Added state for teams

    // Fetch player data from the API and update the state
    useEffect(() => {
        // Fetch players
        api.getPlayers()
            .then(response => {
                // Update the players state with the fetched data
                setPlayers(response.data);
            })
            .catch(error => {
                console.error('Error fetching players:', error);
            });

        // Fetch teams (assuming you have an API endpoint for teams)
        api.getTeams()
            .then(response => {
                // Update the teams state with the fetched data
                setTeams(response.data);
            })
            .catch(error => {
                console.error('Error fetching teams:', error);
            });
    }, []); // The empty dependency array ensures that this effect runs once on mount

    const handleFirstNameChange = (e) => {
        setNewFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setNewLastName(e.target.value);
    };

    const handleTeamChange = (e) => {
        setSelectedTeam(e.target.value);
    };

    const handlePlayerNumberChange = (e) => {
        setPlayerNumber(e.target.value);
    };

    const handlePlayerNationChange = (e) => {
        setPlayerNation(e.target.value);
    };

    const handleAddPlayer = async (e) => {
        e.preventDefault();
        const teamId = parseInt(selectedTeam);
        const playerNum = parseInt(playerNumber);
        
        const player = {
            firstName: newFirstName,
            lastName: newLastName,
            equipe_id: teamId, // Send as an integer
            numero: playerNum, // Send as an integer
            nation: playerNation,
        };

        // Make a POST request to add the new player to the API (assuming your API supports this)
        try {
            // Make a POST request to add the new player to the API
            await api.addPlayer(player);
    
            // If the player was added successfully, update the players state with the new player
            setPlayers([...players, player]);
            setNewFirstName('');
            setNewLastName('');
            setSelectedTeam('');
            setPlayerNumber('');
            setPlayerNation('');
        } catch (error) {
            console.log(player)
            console.error('Error adding player:', error);
        }
    };

    return (
        <div className="players-container">
            <h1 className="players-heading">Players</h1>

            <table className="players-table">
                <thead>
                    <tr>
                        <th className="player-column">Player</th>
                        <th className="number-column">Number</th>
                        <th className="nation-column">Nation</th> {/* Added column for player nation */}
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td className="player-name">{player.firstName} {player.lastName}</td> {/* Display player's full name */}
                            <td className="player-number">{player.numero}</td> {/* Display player's number */}
                            <td className="player-nation">{player.nation}</td> {/* Display player's nation */}
                        </tr>
                    ))}
                </tbody>
            </table>

            <form className="add-player-form" onSubmit={handleAddPlayer}>
                <label>
                    First Name:
                    <input className="player-input" type="text" value={newFirstName} onChange={handleFirstNameChange} />
                </label>
                <label>
                    Last Name:
                    <input className="player-input" type="text" value={newLastName} onChange={handleLastNameChange} />
                </label>
                <label>
                    Team:
                    <select className="team-dropdown" value={selectedTeam} onChange={handleTeamChange}>
                        <option value="">Select a Team</option>
                        {teams.map((team) => (
                            <option key={team.id} value={team.id}>
                                {team.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Number:
                    <input className="number-input" type="text" value={playerNumber} onChange={handlePlayerNumberChange} />
                </label>
                <label>
                    Nation:
                    <input className="nation-input" type="text" value={playerNation} onChange={handlePlayerNationChange} />
                </label>
                <button className="add-player-button" type="submit">Add Player</button>
            </form>
        </div>
    );
};

export default Players;
