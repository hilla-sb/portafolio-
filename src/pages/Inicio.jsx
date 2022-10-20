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
    
        <Grid container className="Inicio">
          <Box Class = "contenedor-banner">
          <Box Class= "contenedor-img">
          <img style={{}}className="Hillary" src={Hillary} alt=""/>
          </Box>
          <h1>Hillary Segura Blanco</h1>
          <h2>Desarollladora Web Full Stack</h2>
          <GoMarkGithub/>
          <FaLinkedin/>
          <FaEnvelope/>
          


          
          </Box>

</Grid>
    </div>

  )
}
