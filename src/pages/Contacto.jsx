import {React} from 'react'
import Header from '../componentes/Header'
import {Grid,Box} from "@mui/material";
import Spline from '@splinetool/react-spline';
import phone from '../imagenes/phone.png';
import icon from '../imagenes/scene.splinecode';
import mensaje from '../imagenes/mensaje.png';
import Contactos from '../componentes/Contactos.js';

export default function Contacto() {
 
  return (
<>


<Box className="caja-princi" style={{display:"flex",height:"100%",weigth:"100%"}}>
  <Header/>

 

 <Grid className="grid-co" style={{display:"flex",justifyContent:"space-between"}}>
  
 <Spline scene={icon} className ="spline"/>
 <form className="form">

  <h2 className="contactof" style={{color:"#c35a66"}}>CONTACT US</h2>
  <p className="name" type="Name:"><input placeholder="Write your name here.."></input></p>
  <p className="email" type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
  <p type="Message:" className="message"><textarea placeholder="What would you like to tell us.." className="message2"></textarea></p>
  <button className="send2">Send Message</button>
<Box className="contacto-icon"> 
  <span ><img src ={phone} alt ="phone" style={{width:"1.8rem"}}></img></span>+34 658596730
    <span ><img src ={mensaje} alt ="mensaje" style={{width:"1.8rem"}}></img></span> hillsegu23@gmail.com
    </Box>
</form>
 </Grid>


    
    </Box>

</>
  )
}