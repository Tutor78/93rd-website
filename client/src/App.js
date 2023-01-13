import React, { useState } from 'react';

import './App.css';

// components
import Navbar from './components/Navbar';

function App() {
  const [anchorElNav, setAnchorElNav] = useState('landing');

  console.log(anchorElNav.textContent);

  return (
    <Navbar setAnchorElNav={ setAnchorElNav } />
  );
}

export default App;
