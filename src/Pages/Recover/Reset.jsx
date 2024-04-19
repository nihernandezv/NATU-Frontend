import React from 'react';
import "./Reset.css"; // Importa los estilos CSS

export default function Reset() {
    return (
        <div id="Reset">
            <form id="reset-form">
                <div id="logo">
                    {/* Puedes agregar contenido aquí si es necesario */}
                </div>
                <img src="logo.png" id="img-centrada" alt="Logo" />
                <label htmlFor="username">Correo de usuario</label>
                <input type="text" id="username" placeholder="Email" />




                <input
                    type="button"
                    id="btnReset"
                    className="btnrst"
                    defaultValue="Reset password"
                />



                <button
                    type="button"
                    id="btnReset"
                    className="btnrst"
                    defaultValue="Regresar"
                    onClick={() => { window.location.href='login'; }}
                />
            </form>
            <a id="link2" href="register">
                ¿Aun no estoy registrado?
            </a>
        </div>
    );
}
