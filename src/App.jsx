import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Shipping from './pages/Shipping'
import Layout from './components/Layout'
import Product from './pages/product/Product'

export default function App() {

  return ( 
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='shipping' element={<Shipping />} />
          <Route path='knives' element={<Product />} />
        </Route>
      </Routes>
  )
}
