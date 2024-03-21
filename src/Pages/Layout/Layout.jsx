import { Outlet, Link } from "react-router-dom";

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
    </>
  )
};