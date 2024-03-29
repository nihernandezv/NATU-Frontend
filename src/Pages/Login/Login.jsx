import React from 'react'
import './Login.css'; // Importa estilos CSS

const Login = () => {
    return (
        <div>
            {/* Botón de Registro */}
            <button 
                type="button" 
                className="btn btn-outline-primary ms-2 px-5 btn-login" 
                data-bs-toggle="modal" 
                data-bs-target="#/">
                    <span className="fa fa-user-plus me-1"></span> Iniciar Sesión
                </button>
            {/* <!-- Modal --> */}

        </div>
    )
}
export default Login