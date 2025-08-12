import React from 'react'
import { Outlet } from 'react-router-dom'
import Error from '../component/Error'
import Header from '../component/cartheader'
import StyleLayout from '../component/styleLayout'
import CartTab from '../component/Cart'

export default function ProductLayout() {
  return (
    <div>
      <StyleLayout>
        <CartTab/>
        <Header/>
        <Outlet/>
        <Error/>
      </StyleLayout>
      
    </div>
  )
}

