import { useState, } from 'react'
import {createBrowserRouter , RouterProvider, Router} from 'react-router-dom'
import RootLayout from './layout/rootLayout'
import Home from './pages/home'
import ProductLayout from './layout/productLayout'
import Product from './pages/product'
import Contact from './pages/contact'
import ContactLayout from './layout/contactLayout'
import About from './pages/about'
import AboutLayout from './layout/aboutLayout'


function App() {
  const router = createBrowserRouter([



    {
      path :'/',
      element: <RootLayout/>,
      children:[{ 
      index: true,
      element: <Home/>
      }, 
    ]
      
  
    },
    {
      path : '/product',
      element : <ProductLayout/>,
      children: [{
        index : true,
        element: <Product/>
      },]
    },
    {
      path : '/contact',
      element: <ContactLayout/>,
      children: [{
        index : true,
        element : <Contact/>
      },]
    },
    {
      path : '/about',
      element : <AboutLayout/>,
      children: [{
        index : true,
        element : <About/>
    }]
    }

 

  


])


  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
