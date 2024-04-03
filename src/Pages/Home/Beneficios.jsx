import React from 'react';
import 'animate.css/animate.min.css';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Beneficios() {
  return (
    <div className="beneficios-container">
      <h2 className="beneficios-titulo">Beneficios de una alimentación natural y saludable</h2>
      <ul className="beneficios-lista">
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="https://n9.cl/2bz0c" alt="Cultivados en el campo" />
          <h3>Cultivados en el campo</h3>
          <p>Productos orgánicos para tu bienestar y el del tu familia.</p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="https://n9.cl/argyd" alt="Productos locales" />
          <h3>Productos Locales</h3>
          <p>Apoyamos la economía local colombiana </p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="https://n9.cl/rql85" alt="Saludables" />
          <h3>Saludables</h3>
          <p>Productos cultivados y elaborados con cuidado y atención</p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="https://n9.cl/i2s8d" alt="Frescos" />
          <h3>Frescos</h3>
          <p>Seleccionamos cuidadosamente los productos más frescos.</p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="https://n9.cl/ehuxl" alt="Nutritivos" />
          <h3>Nutritivos</h3>
          <p>Ricos en vitaminas, minerales y antioxidantes.</p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="https://n9.cl/b8793" alt="Sabrosos" />
          <h3>Sabrosos</h3>
          <p>Disfruta de una gran variedad de sabores y texturas.</p>
        </li>
      </ul>
      <Link to="/productos" className="beneficios-boton">
        Descubre más sobre nuestros productos
      </Link>
    </div>
  );
};