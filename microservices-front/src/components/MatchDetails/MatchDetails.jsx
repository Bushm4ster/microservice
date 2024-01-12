import React from 'react';
import './matchDetails.css';

function MatchDetails() {
    const match = {
        teams: ['Team A', 'Team B'],
        date: '2022-01-01',
        stadium: 'Example Stadium',
        referee: 'John Doe',
        teamAPlayers: ['Player 1', 'Player 2', 'Player 3'],
        teamBPlayers: ['Player 4', 'Player 5', 'Player 6'],
        teamAPlayersGoals: ['Player 1'],
        teamBPlayersGoals: ['Player 4'],
    };

    return (
        <div className='matchDetailsContainer'>
            <h2 className='matchDetailsHeader'>Match Details</h2>
            <p className='matchDetailsItem'>Teams: <span className='teams'>{match.teams.join(' vs ')}</span></p>
            <p className='matchDetailsItem'>Date: <span className='date'>{match.date}</span></p>
            <p className='matchDetailsItem'>Stadium: <span className='stadium'>{match.stadium}</span></p>
            <p className='matchDetailsItem'>Referee: <span className='referee'>{match.referee}</span></p>

            <h3 className='teamHeader'>Players</h3>
            <table className='playersTable'>
                <thead className='playersTableHead'>
                    <tr className='playersTableRow'>
                        <th className='playerTableHeader'>Team A Players</th>
                        <th className='playerTableHeader'>Team B Players</th>
                    </tr>
                </thead>
                <tbody className='playersTableBody'>
                    {match.teamAPlayers.map((player, index) => (
                        <tr key={index} className='playerRow'>
                            <td className='playerCell'>{player}</td>
                            <td className='playerCell'>
                                {match.teamBPlayers[index] ? match.teamBPlayers[index] : ''}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 className='goalsHeader'>Goals</h3>
            <table className='goalsTable'>
                <thead className='goalsTableHead'>
                    <tr className='goalsTableRow'>
                        <th className='goalsTableHeader'>Team A Goals</th>
                        <th className='goalsTableHeader'>Team B Goals</th>
                    </tr>
                </thead>
                <tbody className='goalsTableBody'>
                    {match.teamAPlayersGoals.map((goal, index) => (
                        <tr key={index} className='goalRow'>
                            <td className='goalCell'>{goal}</td>
                            <td className='goalCell'>
                                {match.teamBPlayersGoals[index] ? match.teamBPlayersGoals[index] : ''}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MatchDetails