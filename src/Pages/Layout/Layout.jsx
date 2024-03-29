import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import Footer from './Footer';

export default function Layout(){

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/natu_logo.png" alt="Logo" className="img-fluid" width="200" height="50"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/login" className="nav-link">Inicio de sesión</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">Registro</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      <Footer />
    </>
  )
};
