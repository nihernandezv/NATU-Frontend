import React from 'react';
/*import { Carousel } from 'react-bootstrap';*/
import 'animate.css/animate.min.css'; // Importa animate.css
import './Home.css'
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
/*import Carousel from 'react-bootstrap/Carousel';*/
/*import Carousel from './Carousel'; // Importa el componente de carrusel*/


export default function Inicio() {
  return (
    <div>
      <div className="home-page-container">
      <div className="home-page-text-container">
        <h1 className="home-page-title">
          ¿Quieres alimentar tu cuerpo y tu mente con productos naturales y saludables?
        </h1>
        <p className="home-page-description">
          En Natu Tienda Orgánica encontrarás una gran variedad de productos de alta calidad, cultivados y fabricados por productores locales de pueblos y de toda Colombia. 
        </p>
        <Link to="/products" className="home-page-button">
            Productos <FiArrowRight />
        </Link>
      </div>
      </div>
      <div className="home-image-section">
      <img src="../../../Natu_Logo_.png" alt="Banner" className="home-banner-image" />
      </div>

      <div className="acerca-container">
        <div className="titulo-container">
          <h1 className="titulo-texto">Descubre lo auténtico: Productos naturales de la tierra, cultivados con amor</h1>
        </div>
        <div className="texto-container">
          <p className="parrafo-texto">
            En Natu, respaldamos la economía local al ofrecerte productos saludables y naturales, cultivados y elaborados en el campo por familias colombianas trabajadoras. Nuestro objetivo es brindarte una experiencia auténtica y promover un estilo de vida más saludable para que puedas disfrutar plenamente de nuestros productos.
          </p>
          <Link to="/" className="leer-mas-button">
            Leer Más...<FiArrowRight />
            </Link>
        </div>
      </div>
      <div className="acerca-image-section">
      <img src="../../../TomatoesC.png" alt="Banner" className="acerca-banner-image" />
      </div>
      
    </div>

  );
}

