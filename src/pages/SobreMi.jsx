import React from 'react'
import {Box,Grid,Card} from "@mui/material";
import Header from '../componentes/Header';
import direccion from '../imagenes/direccion.png'

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

    <Card className="texto" style={{}}> 
    <h1> 
      Sobre Mi 
    </h1>
    <p>Yo soy una personas muy comunicativa, que trabaja en equipo, que escucha otras opiniones y también defiendo mi propio criterio. Estoy acostumbrada a metodologías ágiles como Scrum y tengo habilidades de organización, gran sentido de responsabilidad y en mis proyectos pasados asumía roles de liderar pero también como trabajar en equipo,ideas ,resolución de problemas, recilencia ,creativa 
      </p>
      <p>Datos Personales</p> 
          <ul>
            <a href = "https://wa.me/34658596730?text=Contactame">
            <li style ={{textDecoration:"none"}}>
              Telefono: +34 658596730
            </li>
            </a>
            <li>
              Codigo Postal: 08026
            </li>
            <li>Correo: hillsegu23@gmail.com
            </li>
            </ul>
            <img src={direccion} alt="direccion"></img>
      </Card>
  
    </Grid>
    
     </>
  )
}
