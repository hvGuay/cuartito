import React from "react";   //importar react
import ReactDOM from "react-dom/client";
import "./index.css"; //importar estilos
import App from "./App"; //importar app que contiene todos los otros componentes
import "bootstrap/dist/css/bootstrap.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app"s Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeDRQsL-XT-6P-OebkDjqufkJ5LJDmfs0",
  authDomain: "cuartito-case.firebaseapp.com",
  projectId: "cuartito-case",
  storageBucket: "cuartito-case.appspot.com",
  messagingSenderId: "365535676760",
  appId: "1:365535676760:web:82c74c46d8fef402f5fd2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

