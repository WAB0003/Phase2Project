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
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import "./NavBar.css";
import FilterDisplay from "./filterDisplay";



function NavBar({allCharacters}) { 
  const [open, setOpen] = useState(false);
  

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
 
  const getList = () => (
    <FilterDisplay allCharacters={allCharacters} open={open} setOpen={setOpen}/>
  );
  return (
      <div pd="">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar display={'inline-flex'}  
          style={{ background: '#17252A' }}>
            <Toolbar>
              <Button variant="text">
                <Typography
                  variant="h6"
                  noWrap
                  paddingRight="2.5em"
                  paddingLeft={"2.5em"}>
                <NavLink
                  to="/"
                  style={{color:"white"}}
                  sx={{ mr:10 }}
                >
                  Home
                </NavLink>
                </Typography>
              </Button>
              
              <Button variant="text">
                <Typography
                  variant="h6"
                  noWrap
                  paddingRight={"2.5em"}
                  paddingLeft={"2.5em"}
                  >
                  <NavLink
                    to="/characters"
                    style={{color:"white"}}
                  >
                    Characters
                  </NavLink>
                  </Typography>
                </Button>

                <Button variant="text">
                  <Typography
                    variant="h6"
                    noWrap 
                    paddingRight={"2.5em"}
                    paddingLeft={"2.5em"}
                    sx={{ flexGrow: 1 }}>
                    <NavLink
                      to="/addCharacter"
                      style={{color:"white"}}
                    >
                      Add Characters
                    </NavLink>
                  </Typography>
                </Button>

                  <Autocomplete spacing={2} sx={{ width: 300,pr:3, pl:5 }}
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
                 
                  <IconButton  onClick={() => setOpen(true)}>
                    <SortIcon style={{fontSize:"1.9em",color:"white"}}/>
                  </IconButton>
                  <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
                    {getList()}
                  </Drawer>
                        
                      
                    
                </Toolbar>
              </AppBar>
            </Box>
        </div>
      )
  }  
 
  export default NavBar;
