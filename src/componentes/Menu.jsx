import React from 'react';
import { AppBar, Toolbar, Typography, Stack, Button, Box} from "@mui/material";
import logo from '../imagenes/logo.png';

export default function Navbar () {
    return (
        <AppBar position='fixed' style={{backgroundColor: "transparent", background: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(47,48,58,0.742734593837535) 37%, rgba(47,48,58,1) 86%)", boxShadow: "0px 0px 0px 0px", paddingTop: "2%"}}>
            <Toolbar>
                <img src={logo} alt="Logo" style={{ width:"10rem" , marginLeft: "2rem"}} />
                
                <Box style={{marginRight: "0.5rem"}}>
                <Button href="#Main2" style={{color: "white", fontFamily: "Poppins", fontWeight: "300", fontSize: "2rem", textTransform: "capitalize", marginRight: "5rem"}}>Inicio</Button>
                <Button href="#Main2" style={{color: "white", fontFamily: "Poppins", fontWeight: "300", fontSize: "2rem", textTransform: "capitalize", marginRight: "5rem"}}>Acerca de mi</Button>
                <Button href="#Main2" style={{color: "white", fontFamily: "Poppins", fontWeight: "300", fontSize: "2rem", textTransform: "capitalize", marginRight: "5rem"}}>Lenguajes</Button>
                <Button href="#Main2" style={{color: "white", fontFamily: "Poppins", fontWeight: "300", fontSize: "2rem", textTransform: "capitalize", marginRight: "5rem"}}>Portafolio</Button>
                <Button href="#Main2" style={{color: "white", fontFamily: "Poppins", fontWeight: "300", fontSize: "2rem", textTransform: "capitalize", marginRight: "5rem"}}>Contactame</Button>
                    
                    
                </Box>
            </Toolbar>
        </AppBar>
    )
}