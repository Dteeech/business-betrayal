// Dans App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Nav';
import HomePage from './components/HomePage';
import Rules from './components/Rules';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/rules' element={<Rules />} />
        <Route path='/' element={<HomePage />} />
      </Routes>

    </Router>
  );
}

export default App;
