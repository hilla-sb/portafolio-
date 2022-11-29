import React from 'react'
import Header from '../componentes/Header'
import Hillary from '../imagenes/Hillary.png'
import {Grid,Box} from "@mui/material";
import {GoMarkGithub} from "react-icons/go";
import { FaCommentDots} from "react-icons/fa";
import {IoLogoLinkedin} from "react-icons/io";



export default function Inicio() {
  return (
    <div>
       
        <Header/>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fira+Sans:wght@500&family=Mochiy+Pop+One&family=Open+Sans:wght@300&display=swap');
</style>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fira+Sans:wght@500&family=Mochiy+Pop+One&family=Open+Sans:wght@300&family=Philosopher:ital@1&display=swap');
</style>
    <Box> 
     </Box>
    
        
        <Grid item className="Inicio" style={{width:"100vw",height:"100vh",overflow:"hidden"}}>
                
        
          <Box className = "contenedor-banner">
          <Box className= "contenedor-img">
          <img style={{}}className="Hillary" src={Hillary} alt=""/>
          </Box>
          <h1>Hillary Segura Blanco</h1>
          <h2>Desarolladora Web - Full Stack</h2>
         
          <a href="https://github.com/hilla-sb/" target="_blank"> 
          <GoMarkGithub  style={{color:"#ffff",display:"inlineBlock",
  textdecoration:"none",
  border:"3px solid #faaca8  ",
  borderRadius:"100%",
  width:"42px",
  height: "42px",
  lineHeight: "32px",
  margin : "40px 6px",
  fontSize:"20px",
  transition :".3s!important",
 }}/>
  </a>
  <a href="https://www.linkedin.com/in/hillary-segura-blanco-667544245/" target="_blank" class="linkedIn"> 
          <IoLogoLinkedin style={{color: "white",display:"inlineBlock",
  textdecoration:"none",
  border:"3px solid #faaca8 ",
  borderRadius:"100%",
  width:"42px",
  height: "42px",
  lineHeight: "32px",
  margin : "40px 6px",
  fontSize:"20px",
  transition :".3s"}}/>
  </a>
  <a href="https://wa.me/34658596730?text=Contactame" target="_blank" class="whatsapp"> 
          <FaCommentDots style={{color:"white",display:"inlineBlock",
  textdecoration:"none",
  border:"3px solid #faaca8 ",
  borderRadius:"100%",
  width:"42px",
  height: "42px",
  lineHeight: "32px",
  margin : "40px 6px",
  fontSize:"20px",
  transition :".3s"}}/>
  </a>
  </Box>
         

         
        
</Grid>

    </div>

  )
}
