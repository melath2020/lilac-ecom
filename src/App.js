import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='product/:id' element={<SingleProduct/>}/>
      <Route path="cart" element={<Cart />} />
    </Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
