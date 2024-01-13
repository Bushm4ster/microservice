import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Matches from './components/Matches/Matches';
import MatchDetails from './components/MatchDetails/MatchDetails';
import Navbar from './components/NavBar/Navbar';
import Teams from './components/Teams/Teams';
import Team from './components/Teams/Team';
import Players from './components/Players/Players';  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Matches />} />
            <Route path="/match-details" element={<MatchDetails />} />
            <Route path="/teams" element={<Teams />}/>
            <Route path="/team/:id" element={<Team />}/>
            <Route path="/players" element={<Players />}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
