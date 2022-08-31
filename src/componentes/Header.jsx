import React from 'react';
import background from '../imagenes/background.png';
import {Grid} from "@mui/material";
// import '../App.css';
export default function Header () {

    return (
<Grid >
                <img src={background} alt="" style={{width: "100%",opacity:"0.8" }}/>
            </Grid>
        
        )
    }

    

