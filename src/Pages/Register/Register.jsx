import "./Register.css";
import React from 'react';

export default function Register() {
    return (
        <>
        <title>Register | Natu</title>
        {/* Scrips */}
        <meta
          name="google-signin-client_id"
          content="134771054109-qc1doubbb2akoqg3p0qre6ebheopsq9m.apps.googleusercontent.com"
        />
        {/*  */}
        {/*Stylesheet*/}
        <link href="assets/css/style-registrar.css" rel="stylesheet" />
        <div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>
        <form>
          <img src="logo.png" className="img-centrada" />
          <label htmlFor="username">Nombre Completo:</label>
          <input
            type="text"
            className="lgn"
            placeholder="Nombres y Apellidos"
            id="username"
          />
          <label htmlFor="username">Correo Electronico:</label>
          <input type="email" className="lgn" placeholder="email" id="email" />
          <label htmlFor="username">Numero de Telefono:</label>
          <input type="text" className="lgn" placeholder="(+57)" id="telefono" />
          <div className="col direccion">
            <label htmlFor="direccion">Dirección:</label>
            <input
              type="text"
              className="lgn"
              placeholder="Dirección"
              id="direccion"
            />
          </div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="lgn"
            placeholder="Al menos 8 caracteres"
            id="password"
          />
          <label htmlFor="password">Confirme su Contraseña</label>
          <input
            type="password"
            className="lgn"
            placeholder="Repite la contraseña"
            id="password"
          />
          <input
            type="button"
            className="rgt"
            id="botonLoginAYUDA"
            defaultValue="Registrarse"
          />
          <div className="vinculos">
            <a className="link" id="link" href="login.jsx">
              {" "}
              Ya estoy registrado
            </a>
            <a className="link1" id="link1" href="index.html">
              {" "}
              Volver al inicio
            </a>
          </div>
        </form>
      </>
      
    );
}