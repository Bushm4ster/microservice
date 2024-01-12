import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './matches.css';

const Matches = () => {
    // const [matches, setMatches] = useState([]);

    // useEffect(() => {
    //     // Fetch today's football matches data from an API
    //     const fetchMatches = async () => {
    //         const response = await fetch('API_ENDPOINT');
    //         const data = await response.json();
    //         setMatches(data.matches);
    //     };

    //     fetchMatches();
    // }, []);
    const matches = [
        { id: 1, homeTeam: 'Liverpool', awayTeam: 'Manchester United', time: '11:00', homeScore: 1, awayScore: 0 },
        { id: 2, homeTeam: 'Manchester City', awayTeam: 'Chelsea', time: '13:00', homeScore: 2, awayScore: 1 },
    ];
    let navigate = useNavigate();

    const handleRowClick = () => {
        navigate(`/match-details`);
    };

    return (
        <div className='matchesContainer'>
            <h1 className='matchesHeader'>Today's Football Matches</h1>
            <table className='matchesTable'>
                <thead className='matchesTableHead'>
                    <tr className='tableHeaderRow'>
                        <th className='tableHeader'>Home Team</th>
                        <th className='tableHeader'>Score</th>
                        <th className='tableHeader'>Away Team</th>
                        <th className='tableHeader'>Time</th>
                    </tr>
                </thead>
                <tbody className='matchesTableBody'>
                    {matches.map((match, index) => (
                        <tr key={match.id} className={`tableRow ${index % 2 === 0 ? 'evenRow' : ''}`} onClick={() => handleRowClick(match.id)}>
                            <td className='tableCell'>{match.homeTeam}</td>
                            <td className='tableCell scoreCell'>
                                {match.homeScore} - {match.awayScore}
                            </td>
                            <td className='tableCell'>{match.awayTeam}</td>
                            <td className='tableCell'>{match.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default Matches;
