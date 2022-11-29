import React from 'react'
import {Box,Grid,Card} from "@mui/material";
import Header from '../componentes/Header';
import direccion from '../imagenes/direccion.png';
import phone from '../imagenes/phone.png';
import mundo from '../imagenes/mundo.png';
import mensaje from '../imagenes/mensaje.png';
import cv from '../imagenes/cv.png';
import resume from '../imagenes/Resume-Hillary.pdf';


export default function SobreMi() {
  return (
<> 
<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fira+Sans:wght@500&family=Mochiy+Pop+One&family=Open+Sans:wght@300&display=swap');
</style>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fira+Sans:wght@500&family=Mochiy+Pop+One&family=Open+Sans:wght@300&family=Philosopher:ital@1&display=swap');
</style>
    
    <Grid item className="background" style={{width:"100vw",height:"100vh",overflow:"hidden"}}>
    <Header/>

    <Card className="texto" style={{}} > 
    <Box id ="sobreMi" style={{display:"flex",alignItems:"center",color:"#098BB8",textShadow: "black 0.15em 0.5em 0.5em"}}> 
    <h1>Sobre Mi</h1> </Box>
    <p><strong style={{color:"#faaca8"}}>Yo soy una persona</strong> muy comunicativa, que trabaja en equipo, que escucha otras opiniones y también defiendo mi propio criterio.<br/>Estoy acostumbrada a metodologías ágiles como Scrum y tengo habilidades de organización, gran sentido de responsabilidad y en <br/>mis proyectos pasados asumía roles de liderar pero también como trabajar en equipo,ideas ,resolución de problemas, recilencia <br/>,creativa 
      </p>
      <h1 id ="datos-per" style={{color:"#D2D2C9",textShadow: "black 0.15em 0.5em 0.5em"}}>Datos Personales</h1> 
          <Box id="box-per" style={{display:"flex",marginTop:"25px"}}>
          <ul style={{textDecoration:"none",color:"white",listStyle: "none",marginTop:"30px"}}>
          
            <li><img src={mundo} alt="mundo" style={{width:"1.8rem"}}></img>
              <strong id="codigo">
            Codigo Postal:
            </strong>
            08026
            </li>
            <li><img src ={mensaje} alt="correo"style={{width:"1.8rem"}}></img>
              <strong id="correo">Correo:
                </strong>
               hillsegu23@gmail.com
            </li>
            <a href = "https://wa.me/34658596730?text=Contactame" target ="_blank"style ={{textDecoration:"none",color:"white"}}>
            <li>
              <img src={phone} alt="phone" style={{width:"1.8rem"}}></img>
              <strong id ="Phone"style={{textDecoration:"none",color:"white",listStyleType:"spaceCounter",width:"5rem"}}>Telefono: </strong>

              +34 658596730
            </li>
            </a>
            </ul>
              
              <button id ="button-cv" style={{marginleft:"20px"}}>
              <a href="../imagenes/Resume-Hillary.pdf" download>
                <img src={cv}style={{width:"1.8rem"}}>
                </img>
                Descargar CV
                </a>
              </button>

        
            <img src={direccion} alt="direccion"style={{marginLeft:"30px",width:"350px",height:"auto"}} ></img>
            </Box>
      </Card>
  
    </Grid>
    
     </>
  )
}
