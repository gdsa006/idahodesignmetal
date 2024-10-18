import logo from './logo.svg';
import React from 'react';
import './App.css';
import HomePage from './Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
