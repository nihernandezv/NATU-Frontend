import React from 'react';
import './Register.css'; // Asegúrate de que la ruta del archivo CSS sea correcta

export default function Register() {
    const handleRegistro = () => {
        // Aquí puedes agregar la lógica para manejar el registro
        console.log('¡Usuario registrado!');
    };

    return (
        <>
            <title>Register | Natu</title>
            {/* Scripts */}
            <meta
                name="google-signin-client_id"
                content="134771054109-qc1doubbb2akoqg3p0qre6ebheopsq9m.apps.googleusercontent.com"
            />
            {/* Stylesheet */}
            {/* Asegúrate de que la ruta del archivo CSS sea correcta */}
            <link href="Register.css" rel="stylesheet" />
            <div className="background">
                <div className="shape" />
                <div className="shape" />
            </div>
            <form id="login-form">
                <img src="logo.png" className="img-centrada" alt="Logo" /> {/* Asegúrate de que la ruta de la imagen del logo sea correcta */}
                <label htmlFor="username">Nombre Completo:</label>
                <input
                    type="text"
                    className="lgn"
                    placeholder="Nombres y Apellidos"
                    id="username"
                />
                <label htmlFor="email">Correo Electrónico:</label> {/* Cambié el htmlFor de email */}
                <input type="email" className="lgn" placeholder="email" id="email" />
                <label htmlFor="telefono">Número de Teléfono:</label> {/* Cambié el htmlFor de telefono */}
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
                <label htmlFor="confirmPassword">Confirme su Contraseña</label> {/* Cambié el id de confirmPassword */}
                <input
                    type="password"
                    className="lgn"
                    placeholder="Repite la contraseña"
                    id="confirmPassword"
                />
                <input
                    type="button"
                    className="rgt"
                    id="botonRegistro"
                    value="Registrarse"
                    onClick={handleRegistro} // Agregué el controlador de evento onClick
                />
                <div className="vinculos">
                    <a className="link" id="link" href="login.jsx">
                        Ir a login
                    </a>
                    <a className="link1" id="link1" href="index.html">
                        Volver al inicio
                    </a>
                </div>
            </form>
        </>
    );
}
