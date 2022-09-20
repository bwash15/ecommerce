import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import './App.css';
import AppLayout from "./AppLayout";
import Home from './pages/Home';
import ProductsList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/" element={ <AppLayout /> } >
          <Route index element={ <Home /> }
          />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/products/:category" element={ <ProductsList /> } />
          <Route path="/product/:id" element={ <Product /> } />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
