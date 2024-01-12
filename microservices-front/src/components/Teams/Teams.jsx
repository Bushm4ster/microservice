import React from 'react';
import { Link } from 'react-router-dom';
import './teams.css';

const Teams = () => {
    const teams = [
        { id: 1, name: 'Team A' },
        { id: 2, name: 'Team B' },
        { id: 3, name: 'Team C' },
    ];

    return (
        <div className="teams-container">
            <h1 className="teams-title">List of Teams</h1>
            <ul className="teams-list">
                {teams.map((team) => (
                    <li key={team.id} className="team-item">
                        <Link to={`/team`} className="team-link">{team.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Teams;
