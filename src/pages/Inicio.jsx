import React from 'react'
import Header from '../componentes/Header'
import Hillary from '../imagenes/Hillary.png'
import {Grid,Box} from "@mui/material";
import {GoMarkGithub} from "react-icons/go";
import { FaLinkedinIn,FaCommentDots} from "react-icons/fa";
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
    
        <Grid item className="Inicio" style={{width:"100vw",height:"100vh",overflow:"hidden"}}>
          <Box className = "contenedor-banner">
          <Box className= "contenedor-img">
          <img style={{}}className="Hillary" src={Hillary} alt=""/>
          </Box>
          <h1>Hillary Segura Blanco</h1>
          <h2>Desarolladora Web - Full Stack</h2>
          <GoMarkGithub style={{color:"white",display:"inlineBlock",
  textdecoration:"none",
  border:"1.5px solid #098BB8",
  borderRadius:"100%",
  width:"42px",
  height: "42px",
  lineHeight: "32px",
  margin : "40px 6px",
  fontSize:"20px",
  transition :".3s"}}/>
          <IoLogoLinkedin style={{color: "white",display:"inlineBlock",
  textdecoration:"none",
  border:"1.5px solid #098BB8",
  borderRadius:"100%",
  width:"42px",
  height: "42px",
  lineHeight: "32px",
  margin : "40px 6px",
  fontSize:"20px",
  transition :".3s"}}/>
          <FaCommentDots style={{color:"white",display:"inlineBlock",
  textdecoration:"none",
  border:"1.5px solid #098BB8",
  borderRadius:"100%",
  width:"42px",
  height: "42px",
  lineHeight: "32px",
  margin : "40px 6px",
  fontSize:"20px",
  transition :".3s"}}/>
          </Box>
          <Box class="nav-resposive"> 

          </Box>

</Grid>
    </div>

  )
}
