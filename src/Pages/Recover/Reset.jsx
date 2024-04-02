import "./Reset.css";
import React from 'react';

export default function Register() {
    return (
        <>
  <title>Login | Natu</title>
  {/*Stylesheet*/}
  <link href="assets/css/style-resetp.css" rel="stylesheet" />
  <div className="background">
    <div className="shape" />
    <div className="shape" />
  </div>
  <form>
    <div className="logo">
      {/* <h1><a href="index.html">Gestore</a></h1> */}
      {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
    </div>
    <img src="logo.png" className="img-centrada" />
    <label htmlFor="username">Correo de usuario</label>
    <input type="text" className="lgn" placeholder="Email" id="username" />
    <input
      type="button"
      id="btnLogin"
      className="btn"
      defaultValue="Reset password"
    />
    <input
      type="button"
      id="btnLogin"
      className="btn"
      defaultValue="Regresar"
      onclick="window.location.href='login.html';"
    />
    <a className="link" href="register">
      ¿Aun no estoy registrado?
    </a>
  </form>
</>





      
        );
    }