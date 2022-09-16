import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import AppLayout from "./AppLayout";
import Home from './pages/Home';
import Products from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <AppLayout /> } >
          <Route index element={ <Home /> }
          />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/products/:category" element={ <Products /> } />
          <Route path="/product/:id" element={ <Product /> } />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
