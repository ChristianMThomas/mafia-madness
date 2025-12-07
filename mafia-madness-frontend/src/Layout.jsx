import React from 'react'
import NavBar from './components/navbar'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <NavBar />

        <main>
            <Outlet />
        </main>

        <Footer />

       
    </div>
  )
}

export default Layout