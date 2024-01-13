import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'; // Adjust this import to the actual path of your api.js
import './matches.css';

const Matches = () => {
    const [matches, setMatches] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await api.getMatches();
                setMatches(response.data);
            } catch (error) {
                console.error('Error fetching matches:', error);
            }
        };

        fetchMatches();
    }, []);

    const handleRowClick = (id) => {
        navigate(`/match-details/${id}`);
    };

    return (
        <div className='matchesContainer'>
            <h1 className='matchesHeader'>Today's Football Matches</h1>
            <table className='matchesTable'>
                <thead className='matchesTableHead'>
                    <tr className='tableHeaderRow'>
                        <th className='tableHeader'>Equipe One</th>
                        <th className='tableHeader'>Equipe Two</th>
                        <th className='tableHeader'>Time</th>
                    </tr>
                </thead>
                <tbody className='matchesTableBody'>
                    {matches.map((match) => {
                        // Assuming the first team in the array is always "equipeOne" and the second is "equipeTwo"
                        const equipeOneName = match.equipeMatchDTOS[0]?.name;
                        const equipeTwoName = match.equipeMatchDTOS[1]?.name;

                        const matchTime = match.dateMatch ? new Date(match.dateMatch).toLocaleTimeString() : 'TBD';

                        return (
                            <tr key={match.id} className={`tableRow ${match.id % 2 === 0 ? 'evenRow' : ''}`} onClick={() => handleRowClick(match.id)}>
                                <td className='tableCell'>{equipeOneName}</td>
                                <td className='tableCell'>{equipeTwoName}</td>
                                <td className='tableCell'>{matchTime}</td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    );
};

export default Matches;
