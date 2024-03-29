import React from 'react';
import { Outlet} from "react-router-dom";
import "./Layout.css";
import '../../index.css';

// import { BiSearch } from 'react-icons/bi'; // Importa el ícono de búsqueda
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';

export default function Layout(){

  return (
    <div >
      {/* Navbar */}
      <Header />

      {/* Main content */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  )
};