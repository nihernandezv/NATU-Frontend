import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

export default function Layout(){

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/logo.png" alt="Logo" className="img-fluid" width="100" height="24"/>
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

      {/* Footer */}
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          {/* Sección de redes sociales */}
          <section className="mb-4">
              {/* Ejemplo de botón de Facebook */}
              <a className="btn btn btn-floating m-1" href="https://facebook.com" role="button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="Bootstrap" className="img-fluid" width="50" height="24"/>
              </a>
              {/* Agrega más botones de redes sociales aquí */}
          </section>

          {/* Sección de texto */}
          <section className="mb-4">
              <p>
                  Aquí puedes usar filas y columnas para organizar tu pie de página. Bootstrap's grid system
                  te permite crear un layout adaptativo y responsivo fácilmente.
              </p>
          </section>
        </div>

        {/* Derechos de autor */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2024 Derechos reservados:
            <a className="text-white" href="https://tusitioweb.com/">TuSitioWeb.com</a>
        </div>
      </footer>

    </>
  )
};