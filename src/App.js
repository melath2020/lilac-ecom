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
import { PrivateRoute } from './routing/PrivateRoute';
import { OpenRoute } from './routing/OpenRoute';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route path='login' element={<OpenRoute><Login/></OpenRoute>}/>
      <Route path='signup' element={<OpenRoute><Signup/></OpenRoute>}/>
      <Route path='product/:id' element={<SingleProduct/>}/>
      <Route path="cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
    </Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
