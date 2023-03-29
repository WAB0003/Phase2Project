
import React, {useEffect, useState} from 'react';

import { Routes, Route } from "react-router-dom"
import Home from './Home';   
import Characters from "./Characters"
import Favorites from './Favorites';
import NavBar from './NavBar';
import AddCharacter from './AddCharacter';

const baseURL = "http://localhost:3001/characters"


function App() {
  const [allCharacters,setAllCharacter]=useState([])

  useEffect(()=>{
    fetch(baseURL)
    .then(r=>r.json())
    .then(characters=>setAllCharacter(characters))
  },[])

  return (
    <div>
    <NavBar allCharacters={allCharacters}/>
    <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/characters" element={<Characters allCharacters={allCharacters} />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/addCharacters" element={<AddCharacter />}/>
    </Routes>
    </div>
  );
}

export default App;
