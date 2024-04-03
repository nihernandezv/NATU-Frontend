import "./Reset.css";
import React from 'react';

export default function Register() {
    return (
        <>
            <title>Login | Natu</title>
            {/*Stylesheet*/}
            <link href="Reset.css" rel="stylesheet" />
            <div id="background">
                <div id="shape" />
                <div id="shape" />
            </div>
            <form id="login-form">
                <div id="logo">
                    {/* <h1><a href="index.html">Gestore</a></h1> */}
                    {/* <a href="index.html"><img src="assets/img/logo.png" alt="" id="img-fluid"></a>*/}
                </div>
                <img src="logo.png" id="img-centrada" />
                <label htmlFor="username">Correo de usuario</label>
                <input type="text" className="username" placeholder="Email" />
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
                    onClick={() => { window.location.href='login'; }}
                />
                <a id="link" href="register">
                    ¿Aun no estoy registrado?
                </a>
            </form>
        </>
    );
}
