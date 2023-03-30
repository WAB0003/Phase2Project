
import React from 'react'
import { Card, Image, List } from 'semantic-ui-react'; 


function FavoriteCard({character}) {
    const{name, images, special, tier} = character

    const displaySpecials = special.map((move,index)=>{
        return <List.Item key={index} >{move}</List.Item> 
   })
  

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
        </Card>


    )
}

export default FavoriteCard;