import React from 'react';   //importar react
import ReactDOM from 'react-dom/client';
import './index.css'; //importar estilos
import App from './App'; //importar app que contiene todos los otros componentes


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

