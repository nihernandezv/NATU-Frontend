import React from 'react'
import './Signup.css'; // Importa estilos CSS

const Signup = () => {
    return (
        <div>
            {/* Botón de Registro */}
            <button 
                type="button" 
                className="btn btn-outline-primary ms-2 px-5 btn-register" 
                data-bs-toggle="modal" 
                data-bs-target="#/">
                    <span className="fa fa-user-plus me-1"></span> Registrarse
                </button>
            {/* <!-- Modal --> */}

        </div>
    )
}

export default Signup