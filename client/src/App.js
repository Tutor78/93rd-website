import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

// pages
import Landing from './pages/Landing';
import Home from './pages/Home';
import Foxhole from './pages/Foxhole';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/foxhole' element={<Foxhole />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
