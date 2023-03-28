
import React from 'react';
import CharacterCard from "./CharacterCard";
import { Card } from 'semantic-ui-react'; 

function Characters({allCharacters}){

   const characterDisplay = allCharacters.map((character,index)=>{
        return <CharacterCard key={index} character={character} />
   })




    return (
    <Card.Group itemsPerRow={3}>
        {characterDisplay}
    </Card.Group>
    )
}

export default Characters;