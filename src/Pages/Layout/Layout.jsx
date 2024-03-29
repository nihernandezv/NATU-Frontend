import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { BiSearch } from 'react-icons/bi'; // Importa el ícono de búsqueda
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';

export default function Layout(){

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
      {/* Navbar */}
      <Header />

      {/* Main content */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </>
  )
};