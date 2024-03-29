import React from 'react'
import { Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './components/Layout'
import Product from './pages/product/Product'
import Description from './pages/product/Description'
import ShippingInfo from './pages/product/ShippingInfo'
import Specification from './pages/product/Specification'
import KniveInfo from './pages/product/KniveInfo'
import Checkout from './pages/Checkout'

export default function App() {
  return ( 
    <Routes>
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='checkout' element={< Checkout/>} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='knives' element={<Product />} >
        <Route index element={<Description />}/>
        <Route path='shipping-info' element={<ShippingInfo />} />
        <Route path='specification' element={<Specification />} >
          <Route index element={<KniveInfo />} />
        </Route>
      </Route>
    </Route>
  </Routes>
  )
}