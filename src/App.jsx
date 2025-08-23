import { useState, } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RootLayout from './layout/rootLayout'
import Home from './pages/home'
import ProductLayout from './layout/productLayout'
import Product from './pages/product'
import Contact from './pages/contact'
import ContactLayout from './layout/contactLayout'
import About from './pages/about'
import AboutLayout from './layout/aboutLayout'


function App() {

  return (
    <>
    <BrowserRouter basename='/vito-webproject/'>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      </Route>
       <Route path='/about' element={<AboutLayout/>}>
      <Route index element={<About/>}/>
      </Route>
        <Route path='/product' element={<ProductLayout/>}>
      <Route index element={<Product/>}/>
      </Route>
         <Route path='/contact' element={<ContactLayout/>}>
      <Route index element={<Contact/>}/>
      </Route>

    </Routes>
    
    </BrowserRouter>
    
    
    </>
  )
}

export default App
