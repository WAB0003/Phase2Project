import React,{useState,useEffect} from "react";

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import "./NavBar.css"
import { Button } from "semantic-ui-react";


function FilterDisplay({tier,setTier,avail,setAvail,appeared,setAppeared}){
    
    const handleChange = (event) => {
        setTier(event.target.value);
        
    };
    const handleChange2 = (event) => {
        setAvail(event.target.value);
    };
    const handleChange3 = (event) => {
        setAppeared(event.target.value);
    };
    const handleClear = () => {
        setTier('')
        setAvail('')
        setAppeared('')
    }
    const handleFilter = () =>{
        console.log(tier);
        
    }
    
    return(
        <div>
        <Typography
        variant="h3"
        paddingLeft={2}>
            Filter By:
        </Typography>
        <Divider sx={{pt:2}}/>
            
            <Box sx={{ minWidth: 250 }}>
                <Typography
                variant="h5"
                paddingTop={2}
                paddingLeft={2}>
                    Tier:
                </Typography>
                <FormControl sx={{ minWidth: 100, pl:2,pt:2, color:"black" }} >
                   
                    <Select
                        value={tier}
    
                        onChange={handleChange}
                    >
                        <MenuItem value={"S"}>S</MenuItem>
                        <MenuItem value={"A+"}>A+</MenuItem>
                        <MenuItem value={"B"}>B</MenuItem>
                        <MenuItem value={"C"}>C</MenuItem>
                        <MenuItem value={"D"}>D</MenuItem>
                        <MenuItem value={"E"}>E</MenuItem>
                    </Select>
                </FormControl>
                <Divider sx={{pt:3}}/>
                <Typography
                variant="h5"
                paddingTop={2}
                paddingLeft={2}>
                    Availability:
                </Typography>
                <FormControl sx={{ minWidth: 200, pl:2, pt:2, color:"black"}}>
                    <Select
                        value={avail}
                        onChange={handleChange2}
                    >
                        <MenuItem value={"Starter"}>Starter</MenuItem>
                        <MenuItem value={"Unlockable"}>Unlockable</MenuItem>
                        <MenuItem value={"Downloadable"}>Downloadable</MenuItem>
                    </Select>
                </FormControl>
                <Divider sx={{pt:3}}/>
                <Typography
                variant="h5"
                paddingTop={2}
                paddingLeft={2}>
                    Games appeared in
                </Typography>
                <FormControl sx={{ minWidth: 200, pl:2, pt:2, color:"black"}}>
                    
                    <Select
                        value={appeared}
                        onChange={handleChange3}
                    >
                        <MenuItem value={"SSB"}>Super Smash Bros</MenuItem>
                        <MenuItem value={"Melee"}>SSB Melee</MenuItem>
                        <MenuItem value={"Brawl"}>SSB Brawl</MenuItem>
                        <MenuItem value={"SSB4"}>Super Smash Bros 4</MenuItem>
                        <MenuItem value={"None"}>None</MenuItem>
                    </Select>
                </FormControl>
                <Divider sx={{pt:3}}/>
                <Box paddingLeft={10} paddingTop={3}>
                <Button variant = "primary" size="large" color="black" onClick={handleClear}>
                    Clear
                </Button>
                </Box>
            </Box>
            </div>
      
    )
    
}
export default FilterDisplay;