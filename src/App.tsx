import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Compare from './pages/Resources'
import Search from './pages/Search';

// import Submission from './pages/Submission';
// import Trends from './pages/Trends';

function NavigationBar() {
  return (
    <nav>
      <a href="/">Search </a>
      <a href="/submission">Submission </a>
      <a href="/trends">Trends </a>
      <a href="/resources">Resources </a>
      
    </nav>
  );
}

function MainApp() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Search />} />
        {/* <Route path="/submission" element={<Submission />} />
        <Route path="/trends" element={<Trends />} /> */}
        <Route path="/resources" element={<Compare />} />
      </Routes>
    </Router>
  );
}

export default MainApp;