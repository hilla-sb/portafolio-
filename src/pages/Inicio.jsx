import React from 'react'
import Header from '../componentes/Header'
import Hillary from '../imagenes/Hillary.png'
import {Grid,Box} from "@mui/material";
import {GoMarkGithub} from "react-icons/go";
import { FaLinkedin,FaEnvelope} from "react-icons/fa";
export default function Inicio() {
  return (
    <div>
        
        <Header/>
    
        <Grid item className="Inicio" style={{width:"100vw",height:"100vh"}}>
          <Box Class = "contenedor-banner">
          <Box Class= "contenedor-img">
          <img style={{}}className="Hillary" src={Hillary} alt=""/>
          </Box>
          <h1>Hillary Segura Blanco</h1>
          <h2>Desarollladora Web - Full Stack</h2>
          <GoMarkGithub style={{height:"3.5rem",width:"4.5rem"}}/>
          <FaLinkedin style={{height:"3.5rem",width:"4.5rem"}}/>
          <FaEnvelope style={{height:"3.5rem",width:"4.5rem"}}/>
          


          
          </Box>

</Grid>
    </div>

  )
}
