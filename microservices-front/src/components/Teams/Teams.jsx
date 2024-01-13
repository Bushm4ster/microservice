import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './teams.css';
import api from '../../services/api'; // Import your API module from the correct path

const Teams = () => {
    // Define a state variable to store the fetched teams data
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        // Use useEffect to fetch data when the component mounts
        api.getTeams()
            .then(response => {
                // Update the teams state with the fetched data
                setTeams(response.data);
            })
            .catch(error => {
                console.error('Error fetching teams:', error);
            });
    }, []); // The empty dependency array ensures that this effect runs once on mount

    return (
        <div className="teams-container">
            <h1 className="teams-title">List of Teams</h1>
            <ul className="teams-list">
                {teams.map((team) => (
                    <li key={team.id} className="team-item">
                        {/* Link to the team's details page using the team's ID */}
                        <Link to={`/team/${team.id}`} className="team-link">{team.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Teams;
