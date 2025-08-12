import React from 'react'
import Navbar from '../component/navbar'
import { Outlet } from 'react-router-dom'
import StyleLayout from '../component/styleLayout'
import Footer from '../component/footer'

export default function RootLayout() {
  return (
    <div>
      <Navbar/>
      <StyleLayout>
        <Outlet />
      </StyleLayout>
      <Footer/>
    </div>
  )
}
