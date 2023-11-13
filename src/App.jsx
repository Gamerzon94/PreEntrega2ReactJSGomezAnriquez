import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline'
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Footer } from './components/Footer/Footer'
import { Cart } from './components/Cart/Cart'

export const App = () =>{
  return(
    <BrowserRouter>
      <CssBaseline />
      <NavBar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer message="Bienvenido nuevo usuario(a), esperamos que disfrute su estadia y seleccione alguno de nuestros productos."/> } />
          <Route path="/cart" element={ <Cart/>} />
          <Route path="/category/:id" element={ <Cart/>} />
          <Route path="/item/:id" element={ <Cart/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}