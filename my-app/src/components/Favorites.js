
import React from 'react';
import { Container, Card } from 'semantic-ui-react'; 
import FavoriteCard from './FavoriteCard';

function Favorites ({favoriteCharacters}){

   const characterDisplay = favoriteCharacters.map((character,index)=>{
    console.log(character.id)
        return <FavoriteCard key={index} character={character} />
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