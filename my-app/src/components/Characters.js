import React from 'react';
import CharacterCard from "./CharacterCard";
import { Container, Card } from 'semantic-ui-react'; 

function Characters({allCharacters, handleAddFavorites}){

   const characterDisplay = allCharacters.map((character)=>{
        return <CharacterCard key={character.id} character={character} handleAddFavorites={handleAddFavorites} />
   })

    return (
        <Container style={{paddingTop: "6em"}}>
            <Card.Group itemsPerRow={5}>
                {characterDisplay}
            </Card.Group>
        </Container>
    )
}

export default Characters;