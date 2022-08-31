import React from 'react';
import { AppBar, Toolbar, Button, Box} from "@mui/material";
import logo from '../imagenes/logo.png';
import '../App.css';

export default function Navbar () {
    return (
        <AppBar  className ="barra"position='fixed'>
            <Toolbar>
                <img className = "logo2" src={logo} alt="Logo2" />
                
                <Box className="navbar-title">
                  
                <Button href="#Main2" >Inicio</Button>
                <Button href="#Main2" >Acerca de mi</Button>
                <Button href="#Main2" >Lenguajes</Button>
                <Button href="#Main2">Portafolio</Button>
                <Button href="#Main2" >Contactame</Button>
                    
                    
                </Box>
            </Toolbar>
        </AppBar>
    )
}