import React from 'react'
import { Outlet } from 'react-router-dom'
import Error from '../component/Error'
import Header from '../component/cartheader'
import StyleLayout from '../component/styleLayout'
import CartTab from '../component/Cart'
import Footer from '../component/footer'

export default function AboutLayout() {
  return (
    <div>
      <StyleLayout>
        <CartTab/>
        <Header/>
        <Outlet/>
        <Error/>
        <Footer/>
      </StyleLayout>
      
    </div>
  )
}