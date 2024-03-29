import React from 'react';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './Pages/HomePage';
import NosotrosPage from './Pages/NosotrosPage';
import Servicios from './Pages/ServiciosPage';
import CuidadoDelCoche from './Pages/CuidadoDelCoche';
import Novedades from './Pages/NovedadesPage';
import Contacto from './Pages/ContactoPage';


import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import novedades from './Pages/NovedadesPage';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='Nosotros' element={<NosotrosPage />} />
          <Route path='Servicios' element={<Servicios />} />
          <Route path='Cuidado-Del-Coche' element={<CuidadoDelCoche />} />
          <Route path='Novedades' element={<Novedades />} />
          <Route path='Contacto' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
