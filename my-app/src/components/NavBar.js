import React,{useState,useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NavLink } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SortIcon from '@mui/icons-material/Sort';
import "./NavBar.css"


function NavBar({allCharacters}) { 
  const handleSubmit = (e) =>{

  }

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#89CFF0',
    },
    
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: '#89CFF0',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#89CFF0',
      },
    }
  });

  return (
      <div alignItems={"center"}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar display={'inline-flex'} 
          alignItems={'center'} 
          style={{ background: '#17252A' }}>
            <Toolbar>
            
              <Typography
                variant="h6"
                noWrap
                paddingRight="5em"
                paddingLeft={"1em"}>
              <NavLink
                  to="/"
                  style={linkStyles}
                  sx={{ mr:10 }}
                >
                  Home
                </NavLink>
              </Typography>

              <Typography
                variant="h6"
                noWrap
                paddingRight="5em"
                >
                  <NavLink
                    to="/characters"
                    style={{color:"white"}}
                  >
                    Characters
                  </NavLink>
                </Typography>

                <Typography
                  variant="h6"
                  noWrap 
                  component="div" 
                  color="white"
                  sx={{ flexGrow: 1 }}>
                  <NavLink
                    to="/addCharacter"
                    style={{color:"white"}}
                  >
                    Add Characters
                  </NavLink>
                  </Typography>
                  
                  <Autocomplete spacing={2} sx={{ width: 200,pr:3 }}
                    freeSolo
                    
                    options={allCharacters}
                    getOptionLabel={(character) => character.name}

                    renderOption={(props,character) => (
                      <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
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
                      style={{border:{color:'white'} }}
                      label="Search"
                      sx={{ input: { color: 'white' } }}
                      InputProps={{
                      ...params.InputProps,
                      type: 'search',
                      }}
                    />)}
                  />
                  <SortIcon style={{fontSize:"1.9em"}}/>
                </Toolbar>
              </AppBar>
            </Box>
        </div>
      )
  }  
 
  export default NavBar;
