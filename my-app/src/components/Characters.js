
import React from 'react';
import CharacterCard from "./CharacterCard";
import { Container, Card } from 'semantic-ui-react'; 

function Characters({allCharacters}){

   const characterDisplay = allCharacters.map((character,index)=>{
        return <CharacterCard key={index} character={character} />
   })

   const handleSubmit = (event,value) =>{
        console.log(value);
        setSearch(value);
        setTier('')
        setAvail('')
        setAppeared('')  
    }
   

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#89CFF0',
    },
    
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: '#89CFF0',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#89CFF0',
      },
    }
  });
 
    const getList = () => (
        <FilterDisplay tier={tier} 
        setTier={setTier} 
        avail={avail} 
        setAvail={setAvail} 
        appeared={appeared} 
        setAppeared={setAppeared}
        />
    )
    /*const characterDisplay2 = characterDisplay.filter((character) => {
        if(tier === ''){
            return character
        }else if (tier === character.tier){
            return character
        }
    })*/
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