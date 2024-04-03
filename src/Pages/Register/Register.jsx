import React, {useEffect, useState} from 'react';
import './Register.css'; // Asegúrate de que la ruta del archivo CSS sea correcta

export default function Register() {

    const [Nombres, setNombres] = useState(''); // Agregué el estado Nombres
    const [Email, setEmail] = useState(''); // Agregué el estado Email
    const [Telefono, setTelefono] = useState(''); // Agregué el estado Telefono
    const [Direccion, setDireccion] = useState(''); // Agregué el estado Direccion
    const [Password, setPassword] = useState(''); // Agregué el estado Password
    const [ConfirmPassword, setConfirmPassword] = useState(''); // Agregué el estado ConfirmPassword


    const checkInputs = () => {
        // Aquí puedes agregar la lógica para manejar el registro
        
        if (Password != ConfirmPassword ) {
            alert('¡Las contraseñas no coinciden!');
        }
        else if (Nombres === '' || Email === '' || Telefono === '' || Direccion === '' || Password === '' || ConfirmPassword === '') {
            alert('¡Por favor llena todos los campos!');
        } 
        else {
            registerUser();
        }
    };

    const registerUser = () => {
        // Aquí puedes agregar la lógica para registrar el usuario
        fetch('http://localhost:4000/api/compradores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Nombres_comprador: Nombres,
                Correo_usuario: Email,
                Teléfono_comprador: Telefono,
                Dirección_comprador: Direccion,
                Contraseña_encriptada: Password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                return alert(data.error);
            }
            else {
                alert('¡Usuario registrado!');
                window.location.href = '/login';
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });

    }

    return (
        <div className='register-container'>
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
            <form id="register-form">
                <img src="logo.png" id="img-centrada" alt="Logo" /> {/* Asegúrate de que la ruta de la imagen del logo sea correcta */}
                <label htmlFor="username">Nombre Completo:</label>
                <input
                    type="text"
                    className="username"
                    placeholder="Nombres y Apellidos"
                    value={Nombres}
                    onChange={(e) => setNombres(e.target.value)}
                />
                <label htmlFor="email">Correo Electrónico:</label> {/* Cambié el htmlFor de email */}
                <input 
                    type="email" 
                    id="email" 
                    className="username" 
                    placeholder="email" 
                    value={Email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="telefono">Número de Teléfono:</label> {/* Cambié el htmlFor de telefono */}
                <input 
                    type="text" 
                    id="telefono" 
                    className="username" 
                    placeholder="(+57)" 
                    value={Telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
                <div className="col direccion">
                    <label htmlFor="direccion">Dirección:</label>
                    <input
                        type="text"
                        id="direccion"
                        className="username"
                        placeholder="Dirección"
                        value={Direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                    />
                </div>
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="confirmPassword"
                    className="username"
                    placeholder="Al menos 8 caracteres"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="confirmPassword">Confirme su Contraseña</label> {/* Cambié el id de confirmPassword */}
                <input
                    type="password"
                    id="confirmPassword"
                    className="username"
                    placeholder="Repite la contraseña"
                    value={ConfirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input
                    type="button"
                    id="botonRegistro"
                    value="Registrarse"
                    onClick={checkInputs}
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
        </div>
    );
}
