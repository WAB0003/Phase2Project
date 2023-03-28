// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'; 

function CharacterCard({character}) {
    <div>{character.name}</div>
//   <Card>
//     <Image src={character.images.portrait} wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>{character.name}</Card.Header>
//       <Card.Meta>
//         <span className='date'>Joined in 2015</span>
//       </Card.Meta>
//       <Card.Description>
//         Matthew is a musician living in Nashville.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         22 Friends
//       </a>
//     </Card.Content>
//   </Card>
}

export default CharacterCard;




// function CharacterCard ({character}) {

//   return(
//                 <Card sx={{ maxWidth: 345 }}>
//                 <CardMedia
//                     component="img"
//                     alt={character.name}
//                     height="auto"
//                     image={character.images.portrait}
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                     {character.name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         {character.special}
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                     <Button size="small">Add to Favorites</Button>
//                 </CardActions>
                    
//                 </Card> 
    
//   )
// }

// export default CharacterCard;



/* //   <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt={character.name}
//         height="auto"
//         image={character.images.portrait}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {character.name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Add to Favorites</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card> */