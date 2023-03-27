
import React, {useEffect} from 'react';
import AddCharacter from './AddCharacter';

import CharacterDisplay from './CharacterDisplay';

const baseURL = "http://localhost:3000/characters"

function App() {

  useEffect(()=>{
    fetch(baseURL)
    .then(r=>r.json())
    .then(characters=>console.log(characters))
  },[])



  return (
    <div >
        <CharacterDisplay />
        <AddCharacter />
    </div>
  );
}

export default App;
