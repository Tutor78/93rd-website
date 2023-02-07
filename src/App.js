import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

// pages
import Landing from './pages/Landing';
import Home from './pages/Home';
import Divisions from './pages/Divisions';
// import Logistics from './pages/Logistics';
// import Sentinels from './pages/Sentinels';
import Media from './pages/Media';

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/divisions' element={<Divisions />} />
          {/* <Route exact path='/logistics' element={<Logistics />} /> */}
          {/* <Route exact path='/sentinels' element={<Sentinels />} /> */}
          <Route exact path='/media' element={<Media />} />
        </Routes>
      </Router>
  );
}

export default App;
