
import React, { useState } from 'react'
import { Card, Button, Image, List } from 'semantic-ui-react'; 


function CharacterCard({character , addToFavorites}) {
    const{name, images, special, tier} = character
    // const[isFav, setIsFav] = useState(character.favorite==="yes")
    const[isFav, setIsFav] = useState(false)


    const displaySpecials = special.map((move,index)=>{
        return <List.Item key={index} >{move}</List.Item> 
   })


   const handleFavClick = () => {
    setIsFav((isFav) => !isFav)
    addToFavorites(character)
   }

   function handleButton () {
    if(isFav){
        return (
            <Button>Already Added</Button>
        )
    }else{
        return(
            <Button fluid onClick={handleFavClick} >Add to Favorites</Button>
        )
    }

   }
  
    return(
        <Card>
            <Image src={images.portrait} /*wrapped ui={false}*//>
            <Card.Content>
                <Card.Header textAlign='left'>{name}</Card.Header>
                <Card.Meta>Tier {tier}</Card.Meta>
                <Card.Description>
                    Special Moves:
                </Card.Description>
                <List bulleted>
                {displaySpecials}
                </List>
            </Card.Content>
            <Card.Content extra>
                {handleButton ()}
            </Card.Content>
        </Card>


    )
}

export default CharacterCard;

//*Typical Character Object
// {
//     alsoAppearsIn: [
//       "SSB",
//       "Melee",
//       "Brawl",
//       "SSB4"
//     ],
//     availability: "Starter",
//     images:{
//       icon:"https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501674/Ultimate%20Characters/Icons/120px-MarioHeadSSBUWebsite_hkzzpq.png",
//       "portrait":"https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501176/Ultimate%20Characters/Portraits/350_emjsmz.png"
//     },
//     name:"Mario",
//     order:"1",
//     special: ["Fireball","Cape","Super Jump Punch","F.L.U.D.D."],
//     tier: "A",
//     series:{
//       icon:"https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501902/Series/mario_ncgezx.svg",
//       name:"Mario"
//     }
