import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi'; // Importa el ícono de búsqueda
import "./Header.css";
import '../../../index.css';

export default function Header() {
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fontHeader">
          <div className="container-fluid py-2" style={{ backgroundColor: '#F9F7F8', color: 'black' }}>
              <Link className="navbar-brand d-flex mx-auto fw-bold justify-content-center py4" to="/">
                  <img src="/natu_logo.png" alt="Logo" className="img-fluid" width="250" height="55"/>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                            <button class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </button>
                            <ul class="dropdown-menu dropdown-menu-light">
                                <li><a class="dropdown-item" href="#">Legumbres</a></li>
                                <li><a class="dropdown-item" href="#">Frutas</a></li>
                                <li><a class="dropdown-item" href="#">Verduras</a></li>
                                <li><a class="dropdown-item" href="#">Cafés</a></li>
                            </ul>
                            </li>
                        </ul>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                      <li className="nav-item">
                          <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/products">Productos</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/about">Nosotros</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/contact">Contáctanos</Link>
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
                              style={{ width: '300px', marginRight: '5px' }} 
                          />
                          <button className="btn btn-outline-success" type="submit">
                              <BiSearch />
                          </button>
                      </form>

                  </div>
                  <div style={{ marginLeft: '10px' }}>
                    <Link to="/login"
                      type="button" 
                      className="btn btn-outline-primary ms-2 px-5 btn-login" 
                      data-bs-toggle="modal" 
                      data-bs-target="#/">
                        <span className="fa fa-user-plus me-1"></span> Iniciar Sesión
                    </Link>
                  </div>
                  <div style={{ marginLeft: '10px' }}>
                    <Link to="/register"
                      type="button" 
                      className="btn btn-outline-primary ms-2 px-5 btn-register" 
                      data-bs-toggle="modal" 
                      data-bs-target="#/">
                        <span className="fa fa-user-plus me-1"></span> Registrarse
                    </Link>
                  </div>
              </div>
          </div>
      </nav>
    )
}
