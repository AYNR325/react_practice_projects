import { useState } from 'react'
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
function App() {
 
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
