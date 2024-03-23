import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

export default function Layout(){

  return (
    <>
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
      </nav>

      <Outlet />

      <footer>
        <p>Footer</p>
      </footer>
    </>
  )
};