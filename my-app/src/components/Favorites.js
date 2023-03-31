
import React from 'react';
import { Container, Card } from 'semantic-ui-react'; 
import CharacterCard from './CharacterCard';

function Favorites ({allCharacters, handleFavorites, baseURL}){

    const favoriteCharacters = allCharacters.filter((character)=>{
        if(character.favorite==="yes"){
            return character
        }
    })

   const characterDisplay = favoriteCharacters.map((character,index)=>{
        return <CharacterCard key={index} character={character} handleFavorites={handleFavorites} baseURL={baseURL}/>
   })

    return (
        <div className='bg' >
            <Container style={{paddingTop: "6em"}}>
                <Card.Group itemsPerRow={5}>
                    {characterDisplay}
                </Card.Group>
            </Container>
        </div>
    )
}

export default Favorites;