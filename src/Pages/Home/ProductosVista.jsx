import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function ProductosVista() {
    const [productos] = useState([
      {
        id: 1,
        nombre: "Fresas Camarrosa x 500g",
        imagen: "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_1280.jpg",
        descripcion_corta: "Fresas frescas cultivadas en Chiquinquira, Boyacá",
        precio: 5600,
      },
      {
        id: 2,
        nombre: "Café Molido x 250g",
        imagen: "https://cdn.pixabay.com/photo/2019/01/09/18/27/coffee-3923970_1280.jpg",
        descripcion_corta: "Café santandereno tostado y molido",
        precio: 9800,
      },
      {
        id: 3,
        nombre: "Cebolla Cabezona x 1kg",
        imagen: "https://cdn.pixabay.com/photo/2014/10/22/22/02/vegetable-onion-499083_1280.jpg",
        descripcion_corta: "Cebolla cabezona fresca cultivada en Tenerife, Valle del Cauca",
        precio: 4400,
      },
      {
        id: 4,
        nombre: "Naranjas x 1kg",
        imagen: "https://cdn.pixabay.com/photo/2012/02/19/18/05/oranges-15046_1280.jpg",
        descripcion_corta: "Naranja valencia cultivada en Tocancipá Cundinamarca",
        precio: 1500,
      },
    ]);
  
    return (
      <section className="productos-vista">
        <div className="titulo-ProductosVista">
          <h2 className="productos-titulo">Vista Rápida de Productos</h2>
        </div>  
        <div className="productos-grid">
          {productos.map((producto) => (
            <div className="producto-item" key={producto.id}>
              <Link to={`/productos/${producto.id}`} style={{textDecoration:'none'}}>
                <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
                <h3 className='producto-nombre'>{producto.nombre}</h3>
                <p className="producto-descripcion">{producto.descripcion_corta}</p>
                <span className="producto-precio">${producto.precio}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  };
