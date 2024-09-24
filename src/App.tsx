import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import UserSearch from './pages/UserSearch';
import RepoSearch from './pages/RepoSearch';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC = () => (
  <Router>
    <AppNavbar />
    <Routes>
      <Route path="/user-search" element={<UserSearch />} />
      <Route path="/repo-search" element={<RepoSearch />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </Router>
);

export default App;