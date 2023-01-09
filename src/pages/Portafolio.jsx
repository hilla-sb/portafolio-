import { Box,Grid } from '@mui/material'

import hackathon from '../imagenes/hackathon.jpg'
import lasfm from '../imagenes/lastfm.jpg'
import soterrania from '../imagenes/soterrania.jpg'
import soundwave from '../imagenes/soundwave.jpg'
import React from 'react'
import Header from '../componentes/Header'

 


export default function Portafolio() {
  return (
    <> 
<Grid item className="background" style={{width:"100vw",height:"100vh",overflow:"hidden"}}>
<Header/>

 <Box id="proyectos"  >
      <Box className="proyectos-flow" >
        <Box className="proyectos-box">
          <h2 style={{ color:"#D2D2C9",display:"flex",alignItems:"center",fontSize:"2rem",textShadow: "black 0.15em 0.5em 0.5em"
         }} className="mision">Proyectos</h2> 
        </Box>  
        <Box classname="imagenes-box">
          <ul className="imagenes-proyectos">
            <li>
              <a href="https://github.com/soterraniaBcn/la-soterrania" target="_blank" class="proyecto-hillary" style={{textDecoration:"none",color:"#c35a66", fontFamily: 'Abril Fatface', 
  fontFamily: 'Fira Sans', 
  fontFamily: 'Mochiy Pop One',
  fontFamily: 'Open Sans', 
  fontFamily: 'Philosopher'}}>
              <img style={{}}className="portafolio" src={soterrania} alt=""width="300px"/>
                <p>Pagina la soterrania </p>
              </a>
            </li>
            <li>
              <a href="https://github.com/Cristian-Calderon/hackathonEquipo17" target="_blank" style={{textDecoration:"none",color:"#c35a66", fontFamily: 'Abril Fatface', 
  fontFamily: 'Fira Sans', 
  fontFamily: 'Mochiy Pop One',
  fontFamily: 'Open Sans', 
  fontFamily: 'Philosopher'}}>
              <img style={{}}className="portafolio" src={hackathon} alt=""width="300px"/>
                <p>Pagina EcoWhim 
              </p>
              </a>
            </li>
            <li>
              <a href="https://github.com/Sirisiris/clon-lastfm" target="_blank" style={{textDecoration:"none",color:"#c35a66",fontFamily: 'Abril Fatface', 
  fontFamily: 'Fira Sans', 
  fontFamily: 'Mochiy Pop One',
  fontFamily: 'Open Sans', 
  fontFamily: 'Philosopher'}}>
              <img style={{}}className="portafolio" src={lasfm} alt=""width="300px"/>
                <p>Pagina Last.Fm </p>
              </a>
            </li>
            <li>
              <a href="https://github.com/hilla-sb/sound" target="_blank" class="proyecto-belen" style={{textDecoration:"none",color:"#c35a66", fontFamily: 'Abril Fatface', 
  fontFamily: 'Fira Sans', 
  fontFamily: 'Mochiy Pop One',
  fontFamily: 'Open Sans', 
  fontFamily: 'Philosopher'}}>
              <img style={{}}className="portafolio" src={soundwave} alt=""width="300px"/>
                <p>Pagina Sound Wave</p>
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
