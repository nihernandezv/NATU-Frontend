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
            <link href="Register.css" rel="stylesheet" />
            <div id="background1">
                <div id="shape1" />
                <div id="shape1" />
            </div>
            <form id="register-form" >
                <img src="logo.png" id="img-centrada" alt="Logo" /> {/* Asegúrate de que la ruta de la imagen del logo sea correcta */}
                <label htmlFor="username">Nombre Completo:</label>
                <input
                    type="text"
                    className="username"
                    placeholder="Nombres y Apellidos"
                />
                <label htmlFor="email">Correo Electrónico:</label> {/* Cambié el htmlFor de email */}
                <input type="email" id="email" className="username" placeholder="email" />
                <label htmlFor="telefono">Número de Teléfono:</label> {/* Cambié el htmlFor de telefono */}
                <input type="text" id="telefono" className="username" placeholder="(+57)" />
                <div className="col direccion">
                    <label htmlFor="direccion">Dirección:</label>
                    <input
                        type="text"
                        id="direccion"
                        className="username"
                        placeholder="Dirección"
                    />
                </div>
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="confirmPassword"
                    className="username"
                    placeholder="Al menos 8 caracteres"
                />
                <label htmlFor="confirmPassword">Confirme su Contraseña</label> {/* Cambié el id de confirmPassword */}
                <input
                    type="password"
                    id="confirmPassword"
                    className="username"
                    placeholder="Repite la contraseña"
                />
                <input
                    type="button"
                    id="botonRegistro"
                    value="Registrarse"
                    onClick={handleRegistro} // Agregué el controlador de evento onClick
                />
                <div className="vinculos">
                    <a id="link" href="login">
                        Ir a login
                    </a>
                    <a id="link1" href="/">
                        Volver al inicio
                    </a>
                </div>
            </form>
        </>
    );
}
