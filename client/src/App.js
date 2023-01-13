import React, { useState } from 'react';

import './App.css';

// pages
import Landing from './pages/Landing';

function App() {
  const [anchorElNav, setAnchorElNav] = useState('landing');

  console.log(anchorElNav.textContent);

  return (
    <Landing setAnchorElNav={setAnchorElNav}/>
  );
}

export default App;
