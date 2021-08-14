import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import Rotas from './Paginas/Rotas';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
    </div>
  );
}

export default App;
