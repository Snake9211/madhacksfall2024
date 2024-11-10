import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuroraHero } from './components/AuroraHero';
import NavBar from './components/NavBar';
import Resources from './pages/Resources';
import Search from './pages/Search';
import Submission from './pages/Submission';
import Trends from './pages/Trends';

function App() {
  return (
    <Router>
      <div className="content-container">
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;