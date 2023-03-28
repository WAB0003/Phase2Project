
import React from 'react';
import CharacterCard from "./CharacterCard";


function Characters({allCharacters}){

   const characterDisplay = allCharacters.map((character,index)=>{
        return <CharacterCard key={index} character={character} />
   })




    return (
    <div style ={{paddingTop:100}}>
        {characterDisplay}
    </div>
    )
}

export default Characters;