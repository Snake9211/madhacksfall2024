import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import Submission from './pages/Submission';
// import Trends from './pages/Trends';
import NavBar from './components/navBar';
import Resources from './pages/Resources';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Search />} />
        {/* <Route path="/submission" element={<Submission />} />
        <Route path="/trends" element={<Trends />} /> */}
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;