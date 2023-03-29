
import React from 'react';
import CharacterCard from "./CharacterCard";
import { Container, Card } from 'semantic-ui-react'; 

function Characters({allCharacters}){

   const characterDisplay = allCharacters.map((character,index)=>{
        return <CharacterCard key={index} character={character} />
   })

    return (
<<<<<<< HEAD
        <Container style={{paddingTop: "6em"}}>
=======
        <Container style={{paddingTop: "6em"}} >
>>>>>>> 266c0e9f6864f35f8ced31549d3fbecceb722221
            <Card.Group itemsPerRow={5}>
                {characterDisplay}
            </Card.Group>
        </Container>
    )
}

export default Characters;