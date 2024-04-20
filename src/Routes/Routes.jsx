import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home.jsx';
import Product from '../Pages/Product/Product.jsx';
import Register from '../Pages/Register/Register.jsx';
import Login from '../Pages/Login/Login.jsx';
import Layout from '../Pages/Layout/Layout.jsx';
import Reset from '../Pages/Recover/Reset.jsx';
import Catalog from '../Pages/Home/ProductosVista.jsx';

export default function Routing() {
    return (
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path="products" element={<Catalog/>} />
              <Route path="register" element={<Register/>} />
              <Route path="login" element={<Login/>} />
              <Route path="reset" element={<Reset/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
}
    