import React, {useState} from 'react';
import Inicio from './components/Inicio';
import Personaje from './components/Personaje';
import Vista from './components/Vista';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [verPer, setVerPer] = useState(false);
  const [verPdf, setVerPdf] = useState(false);

  const Menu = () =>{
    return (
    <nav class='nav'>
      <button type="button" class="btn btn-primary"
        onClick={()=>{
          setVerPer(!verPer);        
        }}
      >
      {verPer ? "Ocultar Lista" : "Ver lista"}</button>
      <button type="button" class="btn btn-dark"
        onClick={()=>{
          setVerPdf(!verPdf);
        }}
      >{verPdf ? "Ocultar": " PDF"}</button>
      
      {/* <Button>Descargar PDF</Button> */}
    </nav>
    )
  };
  return (
    <div className="container">
      <br/>
      <Menu/>
      <BrowserRouter>
        <Routes>
          {verPer ? <Route path='/'element ={<Inicio></Inicio>}></Route>: null}
          <Route path='/persona/:id'element={<Personaje></Personaje>}></Route>
        </Routes>
      </BrowserRouter>
      {verPdf ? <Vista/>: null}

    </div>
  );
}

export default App;
