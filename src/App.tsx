import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import Trends from './pages/Trends';
import NavBar from './components/NavBar';
import Resources from './pages/Resources';
import Search from './pages/Search';
import Submission from './pages/Submission';

function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/submission" element={<Submission />} />
        {/* <Route path="/trends" element={<Trends />} /> */}
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;