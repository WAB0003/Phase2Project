
import React , {useState,useEffect}  from 'react';
import CharacterCard from "./CharacterCard";
import { Container, Card } from 'semantic-ui-react'; 
import { styled, alpha } from '@mui/material/styles';
import "./NavBar.css"
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SortIcon from '@mui/icons-material/Sort';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import FilterDisplay from "./filterDisplay";
import Grid from '@mui/material/Grid';
import "./Home.css"

function Characters({allCharacters, handleFavorites, baseURL}){
    const [open, setOpen] = useState(false);
    const [search,setSearch] = useState(null)
    const [tier, setTier] = useState(null);
    const [avail, setAvail] = useState(null);
    const [appeared,setAppeared] = useState(null);

  let characterDisplay;

if (search) {
  characterDisplay = allCharacters
    .filter((character) => {
      if (search === null){
        return character
    }else if (search === character){
        return character
    }
    })
    .map((character) => {
      return (
        <CharacterCard
          key={character.id}
          character={character}
          handleFavorites={handleFavorites}
          baseURL={baseURL}
        />
      );
    });
} else if (tier) {
  characterDisplay = allCharacters
    .filter((character) => {
      if(tier === null){
        return character
    }else if(tier===character.tier){
        return character
    }
    })
    .map((character) => {
      return (
        <CharacterCard
          key={character.id}
          character={character}
          handleFavorites={handleFavorites}
          baseURL={baseURL}
        />
      );
    });
} else if (avail) {
  characterDisplay = allCharacters
    .filter((character) => {
      if(avail === null){
        return character
    }else if(avail===character.availability){
        return character
    }
    })
    .map((character) => {
      return (
        <CharacterCard
          key={character.id}
          character={character}
          handleFavorites={handleFavorites}
          baseURL={baseURL}
        />
      );
    });
}else if (appeared) {
  characterDisplay = allCharacters
    .filter((character) => {
      if(appeared === null){
        return character
    }else if(appeared === character.alsoAppearsIn.map((game) =>{return game})){
      return character
    }
  })
    .map((character) => {
      return (
        <CharacterCard
          key={character.id}
          character={character}
          handleFavorites={handleFavorites}
          baseURL={baseURL}
        />
      );
    });
} else {
  characterDisplay = allCharacters.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        character={character}
        handleFavorites={handleFavorites}
        baseURL={baseURL}
      />
    );
  });
}


    /*const characterDisplay = allCharacters.filter((character) =>{
        if (search === null){
            return character
        }else if (search === character){
            return character
        }
    }).map((character)=>{
        return <CharacterCard key={character.id} character={character} handleFavorites={handleFavorites} baseURL={baseURL} />
   })*/

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
        background: '#FAF9F6',
        opacity: 0.65,
        
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
    /*
    const characterDisplay2 = allCharacters.filter((character) => {
        if(tier === null){
            return character
        }else if(tier===character.tier){
            return character
        }
    }).map((character)=>{
      return <CharacterCard key={character.id} character={character} handleFavorites={handleFavorites} baseURL={baseURL} />
    })

    const characterDisplay3 = allCharacters.filter((character) => {
      if(avail === null){
          return character
      }else if(avail===character.availability){
          return character
      }
  }).map((character)=>{
    return <CharacterCard key={character.id} character={character} handleFavorites={handleFavorites} baseURL={baseURL} />
  })
  */
  
    return (
        <div className='bg'>
        <Container style={{paddingTop: "6em"}}>
            <Grid item xs={6} style={{textAlign: "right",display:"flex"}}>
            <Autocomplete spacing={2} sx={{ width: 300,pr:4, pl:5}}
                    freeSolo
                    onChange={handleSubmit}
                    options={allCharacters}
                    getOptionLabel={(character) => character.name}
                    
                    renderOption={(props,character) => (
                      <Box component="li" 
                      sx={{ '& > img': { mr: 2, flexShrink: 0} }} 
                      {...props}
                      >
                      <img
                        loading="lazy"
                        width="20"
                        src={character.images.icon}
                        srcSet={character.images.icon}
                        alt=""
                      />
                      {character.name}
                    </Box>
                    )}
                    renderInput={(params) => (
                    <CssTextField
                      {...params}
                      style={{border:{color:'black'} }}
                      label="Search"
                      sx={{ input: { color: 'black' } }}
                      InputProps={{
                      ...params.InputProps,
                      type: 'search',
                      }}
                    />)}
                  />
                 
                  <IconButton  onClick={() => setOpen(true)}>
                    <SortIcon style={{fontSize:"2.1em",color:"White",pr:10}}/>
                  </IconButton>
                  <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
                    {getList()}
                  </Drawer>
                  </Grid>
            <Card.Group itemsPerRow={5} style={{paddingTop:"2.5em"}}>
                {characterDisplay}
            </Card.Group>
        </Container>
        </div>
    )
}

export default Characters;