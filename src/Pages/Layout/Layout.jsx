import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

export default function Layout(){

  return (
    <>{/*
      <nav>
        <ul>
          <li>
            <Link to="/">Natu</Link>
          </li>
          <li>
            <Link to="/login">Inicio de sesión</Link>
          </li>
          <li>
            <Link to="/register">Registro</Link>
          </li>
        </ul>
      </nav>*/}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/logo.png" class="img-fluid" alt="Bootstrap" width="100" height="24"/>
          </Link>
          <div className="collapse navbar-collapse">
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

      <footer>
        <p>Footer</p>
      </footer>
    </>
  )
};