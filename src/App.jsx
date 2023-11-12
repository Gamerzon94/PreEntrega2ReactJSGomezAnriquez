import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Footer } from './components/Footer/Footer'

export const App = () =>{
  return(
    <>
      <CssBaseline />
      <NavBar/>
      <ItemListContainer message="Bienvenido nuevo usuario(a), esperamos que disfrute su estadia y seleccione alguno de nuestros productos."/>
      <Footer/>
    </>
  )
}