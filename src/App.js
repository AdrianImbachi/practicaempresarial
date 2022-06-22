import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
// import { BrowserRouter as Routes, Route, Router, Switch } from 'react-router-dom';

import Inicio from './components/Inicio';
import Personaje from './components/Personaje';
import Validacion from './components/Validacion';
import Visualizar from './components/Visualizar';
import Vista from './components/Vista';

import './css/estilos.css';
import Navigation from './components/Navigator';


function App() {
  const [verPer, setVerPer] = useState(false);
  const [verValidacion, setVerValidacion] = useState(false);

  const Menu = () => {
    return (
      <nav>
        <button type="button" className="btnVerPacientes btn btn-primary"
          onClick={() => { setVerPer(!verPer); }}   >
          {verPer ? "Ocultar Lista" : "Ver lista"}
        </button>

        <button type="button" className="btn btn-dark"
          onClick={() => { setVerValidacion(!verValidacion); }}  >
          {verValidacion ? "Ocultar" : " Validar"}
        </button>
      </nav>
    )
  };

  return (
    <div className='container p-4'>
      <Menu />
      <BrowserRouter>
        <Routes>
          {verPer ? <Route path='/' element={<Inicio></Inicio>} /> : null}
          <Route path='/persona/:id' element={<Personaje></Personaje>} />
          <Route path='/visualizar' element={<Visualizar />} />
          {verValidacion ? <Route path='/' element={<Validacion />} /> : null}
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;