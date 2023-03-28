
import React, {useEffect} from 'react';
import AddCharacter from './AddCharacter';

import CharacterDisplay from './CharacterDisplay';
import {BrowserRouter as Router, Routes, Router, } from "react-router-dom"
import Home from './Pages/Home';
import Characters from "./Pages/Characters"
import Favorites from './Pages/Favorites';

const baseURL = "http://localhost:3000/characters"

function App() {

  useEffect(()=>{
    fetch(baseURL)
    .then(r=>r.json())
    .then(characters=>console.log(characters))
  },[])



  return (
    <Router>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/characters" element={<Characters />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
