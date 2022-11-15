import React from 'react'
import { Box, Grid } from "@mui/material";
import Header from '../componentes/Header';


export default function Skills() {
  return (
    

      
       <Grid container className="princi" style={{width:"100vw",height:"100vh",display: "grid"}}>
      <Header /><style>
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fira+Sans:wght@500&family=Mochiy+Pop+One&family=Open+Sans:wght@300&display=swap');
      </style><style>
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fira+Sans:wght@500&family=Mochiy+Pop+One&family=Open+Sans:wght@300&family=Philosopher:ital@1&display=swap');
      </style>

  <Box className="skills" >  
    <h1 style={{display:"flex",alignItems:"center",fontSize:"2rem"}}>Personal Skills</h1>
  </Box>
      
    <Box className="contenido-seccion">


    <Box className="col">
      <h3 style={{ color: "#D9D9D9" }}> Technical Ability</h3>
      <Box className="skill" style={{}}>
        <span>Html5,Html, Css & Sass</span>
        <Box className="barra-Skills">
          <Box className="progreso html" >
            <span>100%</span>
          </Box>
        </Box>
      </Box>


      <Box className="skill" style={{}}>
        <span>Java Script & Type Script</span>
        <Box className="barra-Skills">
          <Box className="progreso javascript">
            <span>50%</span>
          </Box>
        </Box>
      </Box>


      <Box className="skill" style={{}}>
        <span>React,MUI,Boostrap & Nest JSX</span>
        <Box className="barra-Skills">
          <Box className="progreso react">
            <span>80%</span>
          </Box>
        </Box>
      </Box>


      <Box className="skill" style={{}}>
        <span>Node & Expres</span>
        <Box className="barra-Skills">
          <Box className="progreso expres">
            <span>70%</span>
          </Box>
        </Box>
      </Box>


      <Box className="skill" style={{}}>
        <span>Postman & JSON</span>
        <Box className="barra-Skills">
          <Box className="progreso json">
            <span>90%</span>
          </Box>
        </Box>
      </Box>


      <Box className="skill" style={{}}>
        <span>Ionic & PHP Laravel</span>
        <Box className="barra-Skills">
          <Box className="progreso ionic">
            <span>50%</span>
          </Box>
        </Box>
      </Box>
     


    </Box>
    <Box className="col">

      <h3 style={{ color: "#D9D9D9" }}> Professional Ability</h3>
      <Box className="skill" style={{}}>
        <span>Trabajo en Equipo</span>
        <Box className="barra-Skills">
          <Box className="progreso equipo">
            <span>100%</span>
          </Box>
        </Box>
      </Box>

      <Box className="skill" style={{}}>
        <span>Comunicación</span>
        <Box className="barra-Skills">
          <Box className="progreso comunicacion">
            <span>100%</span>
          </Box>
        </Box>
      </Box>

      <Box className="skill" style={{}}>
        <span>Liderazgo</span>
        <Box className="barra-Skills">
          <Box className="progreso liderazgo">
            <span>90%</span>
          </Box>
        </Box>
      </Box>


      <Box className="skill" style={{}}>
        <span>Metodologias Agiles</span>
        <Box className="barra-Skills">
          <Box className="progreso agiles">
            <span>90%</span>
          </Box>
        </Box>
      </Box>


      <Box className="skill" style={{}}>
        <span>Creatividad</span>
        <Box className="barra-Skills">
          <Box className="progreso creatividad">
            <span>90%</span>
          </Box>
        </Box>
      </Box>


      <Box className="skill" style={{}}>
        <span> UI,UX & Innovación</span>
        <Box className="barra-Skills">
          <Box className="progreso innovacion">
            <span>90%</span>
          </Box>
        </Box>
      </Box>


</Box>
    </Box>
</Grid>
    







  )
}



