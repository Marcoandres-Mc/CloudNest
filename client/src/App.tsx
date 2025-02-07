
import './App.css'
import { useState } from 'react'
import Header from './Components/Header'
import Menu from './Components/Menu'
import Main from './Components/Main'
import { Routes, Route } from 'react-router-dom'
import Documentos from './pages/Documentos'
import Fotos from './pages/Fotos'
import Papelera from './pages/Papelera'
import Favoritos from './pages/Favoritos'
function App() {

  return (
    <>
      <Header/>
      <div className='flex flex-row'>
        <div>
          <Menu/>
        </div>
        <div className='w-full'>
          <div className="p-6 bg-white rounded-xl shadow-md items-center justify-center w-full h-full m-5">
            <div className="text-center">
              <Routes>
                <Route path='/home' element={<Main/>} />
                <Route path='/documentos' element={<Documentos/>} />
                <Route path='/fotos' element={<Fotos/>} />
                <Route path='/favoritos' element={<Favoritos/>} />
                <Route path='/papelera' element={<Papelera/>} />
              </Routes>
            </div> 
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
