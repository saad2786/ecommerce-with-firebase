import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

export default function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}
