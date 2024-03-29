import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../Register/Signup'
import './Layout.css'; // Importa el archivo CSS de estilos
import { BiSearch } from 'react-icons/bi'; // Importa el ícono de búsqueda


const Layout = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Buscar:', searchTerm);
        // Aquí puedes implementar la lógica para manejar la búsqueda
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-fluid py-2" style={{ backgroundColor: '#F9F7F8', color: 'black' }}>
                    <NavLink className="navbar-brand d-flex mx-auto fw-bold justify-content-center py4" to="/">
                        <img src="/natu_logo.png" alt="Logo" className="img-fluid" width="250" height="55"/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Nosotros</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contáctanos</NavLink>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center" style={{ marginLeft: '20px', marginRight: '20px' }}>
                            <form onSubmit={handleSubmit} className="d-flex align-items-center">
                                <input 
                                    className="form-control me-2" 
                                    type="search" 
                                    placeholder="Buscar" 
                                    aria-label="Buscar" 
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    style={{ width: '400px', marginRight: '5px' }} 
                                />
                                <button className="btn btn-outline-success" type="submit">
                                    <BiSearch />
                                </button>
                            </form>

                        </div>
                        <div style={{ marginLeft: '10px' }}>
                            <Login />
                        </div>
                        <div style={{ marginLeft: '10px' }}>
                            <Signup />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Layout;
