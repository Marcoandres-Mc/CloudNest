import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Perfil from './pages/Perfil'
import Header from './Components/Header'
const Home = () => {
  return (
    <div className='flex flex-col'>
    <Header/>
      <div className='flex flex-row'>
        <Routes>
            <Route path='/*' element={<Main/>}/>
            <Route path='/perfil' element={<Perfil/>} />   
        </Routes>
      
    </div>

    
    
    
    
    </div>
        
  )
}

export default Home