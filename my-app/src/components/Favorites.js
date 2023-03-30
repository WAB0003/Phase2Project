
import React from 'react';
import { Container, Card } from 'semantic-ui-react'; 
import CharacterCard from './CharacterCard';

function Favorites ({allCharacters}){

    const favoriteCharacters = allCharacters.filter((character)=>{
        if(character.favorite==="yes"){
            return character
        }
    })

   const characterDisplay = favoriteCharacters.map((character,index)=>{
    console.log(character.id)
        return <CharacterCard key={index} character={character} />
   })

    return (
        <Container style={{paddingTop: "6em"}}>
            <Card.Group itemsPerRow={5}>
                {characterDisplay}
            </Card.Group>
        </Container>
    )
}

export default Favorites;