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
          <img src="images/beneficio-organico.png" alt="Cultivados sin pesticidas" />
          <h3>Cultivados sin pesticidas</h3>
          <p>Productos orgánicos para tu bienestar y el del planeta.</p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="images/beneficio-local.png" alt="Cultivados localmente" />
          <h3>Cultivados localmente</h3>
          <p>Apoyamos la economía local y reducimos la huella de carbono.</p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="images/beneficio-gluten.png" alt="Libres de gluten" />
          <h3>Libres de gluten</h3>
          <p>Ideales para personas con celiaquía o sensibilidad al gluten.</p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="images/beneficio-vegano.png" alt="Veganos" />
          <h3>Veganos</h3>
          <p>No contienen ingredientes de origen animal.</p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="images/beneficio-fresco.png" alt="Frescos" />
          <h3>Frescos</h3>
          <p>Seleccionamos cuidadosamente los productos más frescos.</p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="images/beneficio-nutritivo.png" alt="Nutritivos" />
          <h3>Nutritivos</h3>
          <p>Ricos en vitaminas, minerales y antioxidantes.</p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="images/beneficio-sabroso.png" alt="Sabrosos" />
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