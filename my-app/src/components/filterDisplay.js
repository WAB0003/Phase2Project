import React,{useState,useEffect} from "react";
import { styled, useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';



function FilterDisplay({allCharacters,open,setOpen}){
    const [tier, setTier] = React.useState('');
    const [avail, setAvail] = React.useState('');

    const handleChange = (event) => {
        setTier(event.target.value);
    };
    const handleChange2 = (event) => {
        setAvail(event.target.value);
    };
    console.log({allCharacters})
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
                <FormControl sx={{ minWidth: 100, pt:2, color:"black", pl:4 }} >
                    <InputLabel>Tier</InputLabel>
                    <Select
                        value={avail}
                        label="Tier"
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

                <FormControl sx={{ minWidth: 200, pt:2, color:"black", pl:4 }} >
                    <InputLabel>Availability</InputLabel>
                    <Select
                        value={tier}
                        onChange={handleChange2}
                        label="Availability"
                    >
                        <MenuItem value={"Starter"}>Starter</MenuItem>
                        <MenuItem value={"Unlockable"}>Unlockable</MenuItem>
                        <MenuItem value={"Downloadable"}>Downloadable</MenuItem>
                    </Select>
                </FormControl>
                
            </Box>
            </div>
      
    )
    
}
export default FilterDisplay;