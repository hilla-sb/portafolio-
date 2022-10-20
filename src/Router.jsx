import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import Inicio from './pages/Inicio'

import Portafolio from './pages/Portafolio'
import Lenguajes from './pages/Lenguajes'
import Readme from './pages/Readme'
import Contactame from './pages/Contactame'



export default function Router() {
    return (
      <div>
               <Routes> 
               <Route exact path="/" element={<Inicio />} />
               <Route exact path="/Portafolio" element={<Portafolio />} />
               <Route exact path="/Lenguajes" element={<Lenguajes />} />
               <Route exact path="/AcercaDeMi" element={<Readme />} />
               <Route exact path="/Contactame" element={<Contactame />} />


                    </Routes>

        </div>
       
       )}

