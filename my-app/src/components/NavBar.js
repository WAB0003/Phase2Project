import React,{useState,useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';

import { NavLink } from "react-router-dom";

function NavBar() { 
  const linkStyles = {
    display: "flex",
    width: "50px",
    padding: "24px",
    margin: "0 10px 10px",
    textDecoration: "none",
    color: "white",
  };
    return (
       <div>
        <AppBar style={{ background: '#17252A' }}>
            <Toolbar>
                <NavLink
                  to="/"
                  exact
                  style={linkStyles}
                  activeStyle={{
                  }}
                >
                </NavLink>
                <NavLink
                  to="/characters"
                  exact
                  style={linkStyles}
                  activeStyle={{
                  }}
                >
                  Characters
                </NavLink>
                <NavLink
                  to="/addCharacter"
                  exact
                  style={linkStyles}
                  activeStyle={{
                  }}
                >
                   Add Characters
                </NavLink>
            </Toolbar>
        </AppBar>
    </div>
    )
  }  
 
  export default NavBar;
