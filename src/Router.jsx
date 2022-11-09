import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import Inicio from './pages/Inicio'
import SobreMi from './pages/SobreMi'
import Skills from './pages/Skills'

import Portafolio from './pages/Portafolio'
import Contacto from './pages/Contacto'





export default function Router() {
    return (
      <div>
               <Routes> 
               <Route exact path="/" element={<Inicio />} />
               <Route exact path="/SobreMi" element={<SobreMi />} />
               <Route exact path="/Skills" element={<Skills />} />
               <Route exact path="/Portafolio" element={<Portafolio />} />
               <Route exact path="/Contacto" element={<Contacto />} />


                    </Routes>

        </div>
       
       )}

