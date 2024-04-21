import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Product from './Pages/Product/Product.jsx';
import Register from './Pages/Register/Register.jsx';
import Login from './Pages/Login/Login.jsx';
import Layout from './Pages/Layout/Layout.jsx';
import Reset from './Pages/Recover/Reset.jsx';
import Catalog from './Pages/Home/ProductosVista.jsx';
import Vendor from './Pages/Vendor/Vendor.jsx';
import VendorProduct from './Pages/Vendor/Products/Products.jsx';
import VendorProfile from './Pages/Vendor/Profile/Profile.jsx';
import VendorTransactions from './Pages/Vendor/Transactions/Transactions.jsx';

function App() {
  return (
    <BrowserRouter classname="p-3 m-0 border-0 bd-example m-0 border-0">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="products" element={<Catalog/>} />
          <Route path="vendor" element={<Vendor/>} />
          <Route path="vendor/products" element={<VendorProduct/>} />
          <Route path="vendor/products/:id" element={<VendorProfile/>} />
          <Route path="vendor/transactions" element={<VendorTransactions/>} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
          <Route path="reset" element={<Reset/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
