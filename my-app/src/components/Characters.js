
import React from 'react';
import CharacterCard from "./CharacterCard";
import { Container, Card, Button } from 'semantic-ui-react'; 

function Characters({allCharacters}){

   const characterDisplay = allCharacters.map((character,index)=>{
        return <CharacterCard key={index} character={character} />
   })

    return (
        <Container>
            <Card.Group itemsPerRow={5}>
                {characterDisplay}
            </Card.Group>
        </Container>
    )
}

export default Characters;