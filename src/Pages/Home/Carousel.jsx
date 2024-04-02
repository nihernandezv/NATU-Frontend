import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'


function CarouselComponent() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://n9.cl/u8uru"
            alt="Primera imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://n9.cl/efcbx"
            alt="Segunda imagen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://n9.cl/c83r9"
            alt="Tercera imagen"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
