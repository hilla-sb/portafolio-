import { Box,Grid } from '@mui/material'
import portafolio from '../imagenes/portafolio.png'
import React from 'react'
import Header from '../componentes/Header'

 


export default function Portafolio() {
  return (
    <> 
<Grid item className="background" style={{width:"100vw",height:"100vh",overflow:"hidden"}}>
<Header/>

 <Box id="proyectos">
      <Box className="proyectos-flow">
        <Box className="proyectos-box">
          <h2 style={{ color:"#098BB8",display:"flex",alignItems:"center",fontSize:"2rem"}} className="mision">Proyectos</h2> 
        </Box>  
        <Box classname="imagenes-box">
          <ul className="imagenes-proyectos">
            <li>
              <a href="https://github.com/hilla-sb/" target="_blank" class="proyecto-hillary" style={{textDecoration:"none",color:"#c35a66", fontFamily: 'Abril Fatface', 
  fontFamily: 'Fira Sans', 
  fontFamily: 'Mochiy Pop One',
  fontFamily: 'Open Sans', 
  fontFamily: 'Philosopher'}}>
              <img style={{}}className="portafolio" src={portafolio} alt=""width="300px"/>
                <p>Proyectos </p>
              </a>
            </li>
            <li>
              <a href="https://github.com/bysmartos" target="_blank" class="proyecto-sandra"style={{textDecoration:"none",color:"#c35a66", fontFamily: 'Abril Fatface', 
  fontFamily: 'Fira Sans', 
  fontFamily: 'Mochiy Pop One',
  fontFamily: 'Open Sans', 
  fontFamily: 'Philosopher'}}>
              <img style={{}}className="portafolio" src={portafolio} alt=""width="300px"/>
                <p>Proyectos </p>
              </a>
            </li>
            <li>
              <a href="https://codepen.io/Juliana-V/pen/QWaBdjK" target="_blank" class="proyecto-juliana" style={{textDecoration:"none",color:"#c35a66",fontFamily: 'Abril Fatface', 
  fontFamily: 'Fira Sans', 
  fontFamily: 'Mochiy Pop One',
  fontFamily: 'Open Sans', 
  fontFamily: 'Philosopher'}}>
              <img style={{}}className="portafolio" src={portafolio} alt=""width="300px"/>
                <p>Proyectos </p>
              </a>
            </li>
            <li>
              <a href="https://scratch.mit.edu/projects/317872548/" target="_blank" class="proyecto-belen" style={{textDecoration:"none",color:"#c35a66", fontFamily: 'Abril Fatface', 
  fontFamily: 'Fira Sans', 
  fontFamily: 'Mochiy Pop One',
  fontFamily: 'Open Sans', 
  fontFamily: 'Philosopher'}}>
              <img style={{}}className="portafolio" src={portafolio} alt=""width="300px"/>
                <p>Proyectos</p>
              </a>
            </li>
          </ul>
        </Box>
        <Box className="light"></Box>
      </Box>
    </Box>

 
 </Grid>
   
    </>
  )
}
