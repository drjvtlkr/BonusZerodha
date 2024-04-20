import React from 'react'
import  Navbar  from './navBar'
import SideBarr from './SideBarr'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Navbar/>

    <SideBarr/>
    {/* <Outlet/> */}
    </>
  )
}

export default Layout