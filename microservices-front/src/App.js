import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Matches from './components/Matches/Matches';
import MatchDetails from './components/MatchDetails/MatchDetails';
import Navbar from './components/NavBar/Navbar';
import Teams from './components/Teams/Teams';
import Team from './components/Teams/Team';


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
            <Route path="/team" element={<Team />}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
