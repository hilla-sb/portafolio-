import React from 'react';
import { AppBar, Toolbar, Button, Box,Grid} from "@mui/material";
import logo from '../imagenes/logo.png';

import { Link } from 'react-router-dom';

export default function Header
 () {
    return (
        <AppBar  id ="barra" style={{width:"100%",height:"150px"}}>
            <Toolbar>
            <Link to ="/" style={{textDecoration:"none",color:"#fff"}}>
                <img className = "logo2" src={logo} alt="Logo2" /></Link>
                
                <Box className="navbar-title">
               
                <Link to ="/" style={{textDecoration:"none",color:"#fff"}}>
                <p >Inicio</p></Link>

                <Link to ="/SobreMi" style={{textDecoration:"none",color:"#fff"}}>
                <p >Sobre Mi</p> </Link>

                <Link to ="/Skills" style={{textDecoration:"none",color:"#fff"}}>
                <p>Skills</p></Link>


                <Link to ="/Portafolio"style={{textDecoration:"none",color:"#fff"}}>
                <p >Portafolio</p></Link>

                <Link to ="/Contacto"style={{textDecoration:"none",color:"#fff"}}>
                <p >Contacto</p></Link>


                </Box>
                
            </Toolbar>
        </AppBar>

     
       
    )
}