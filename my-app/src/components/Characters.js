import React from 'react';
import CharacterCard from "./CharacterCard";
import { Container, Card } from 'semantic-ui-react'; 
import './Home.css'

function Characters({allCharacters, handleFavorites, baseURL}){

   const characterDisplay = allCharacters.map((character)=>{
        return <CharacterCard key={character.id} character={character} handleFavorites={handleFavorites} baseURL={baseURL} />
   })

    return (
        <div className='bg'>
            <Container style={{paddingTop: "6em"}}>
                <Card.Group itemsPerRow={5}>
                    {characterDisplay}
                </Card.Group>
            </Container>
        </div>
        )


}

export default Characters;