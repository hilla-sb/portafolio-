import React from 'react';
import { AppBar, Toolbar, Button, Box,Grid} from "@mui/material";
import logo from '../imagenes/logo.png';

import { Link } from 'react-router-dom';

export default function Header
 () {
    return (
        <AppBar  className ="barra" position='fixed' style={{width:"100%",height:"150px"}}>
            <Toolbar>
                <img className = "logo2" src={logo} alt="Logo2" />
                
                <Box className="navbar-title">
               
                <Link to ="/" style={{textDecoration:"none",color:"#fff"}}>
                <p >Inicio</p></Link>

                <Link to ="/AcercaDeMi" style={{textDecoration:"none",color:"#fff"}}>
                <p >Acerca de mi</p> </Link>

                <Link to ="/Lenguajes" style={{textDecoration:"none",color:"#fff"}}>
                <p>Lenguajes</p></Link>

                <Link to ="/Portafolio" style={{textDecoration:"none",color:"#fff"}}>
                <p>Portafolio</p></Link>

                <Link to ="/Contactame"style={{textDecoration:"none",color:"#fff"}}>
                <p >Contacto</p></Link>

                </Box>
                
            </Toolbar>
        </AppBar>

     
       
    )
}