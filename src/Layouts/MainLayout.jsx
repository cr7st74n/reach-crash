import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar.jsx';

const MainLayout = () => {
  return (
    <div>
        <>  
        <NavBar />
        <Outlet />
        
        </>
        
      
    </div>
  )
}

export default MainLayout
