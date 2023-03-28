
import React, {useEffect} from 'react';

import { Routes, Route, NavLink } from "react-router-dom"
import Home from './Home';   
import Characters from "./Characters"
import Favorites from './Favorites';

const baseURL = "http://localhost:3001/characters"

function App() {

  useEffect(()=>{
    fetch(baseURL)
    .then(r=>r.json())
    .then(characters=>console.log(characters))
  },[])



  return (
    <Routes>
  
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/characters" element={<Characters />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Routes>
  );
}

export default App;
