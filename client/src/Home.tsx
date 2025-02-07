import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Perfil from './pages/Perfil'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Header/>
      <div className='flex flex-row'>
        <Outlet/>
    </div>
    
    
    
    
    </>
        
  )
}

export default Home