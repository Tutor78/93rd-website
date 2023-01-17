import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

// pages
import Landing from './pages/Landing';
import Home from './pages/Home';
import Engineering from './pages/Engineering';
import Logistics from './pages/Logistics';
import Sentinels from './pages/Sentinels';
import Feats from './pages/Feats';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/engineering' element={<Engineering />} />
          <Route exact path='/logistics' element={<Logistics />} />
          <Route exact path='/sentinels' element={<Sentinels />} />
          <Route exact path='/feats' element={<Feats />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
