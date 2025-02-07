import React from 'react'

import Menu from '../Components/Menu'
import { Outlet } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Documentos from './Documentos'
import Fotos from './Fotos'
import Favoritos from './Favoritos'
import Papelera from './Papelera'

const Main = () => {
  return (
    <>
        <div>
            <Menu/>
            </div>
            <div className='w-full'>
            <div className="p-6 bg-white rounded-xl shadow-md items-center justify-center w-full h-full m-5">
                <div className="text-center">
                    <Routes>
                    <Route path='/documentos' element={<Documentos/>} />
                    <Route path='/fotos' element={<Fotos/>} />
                    <Route path='/favoritos' element={<Favoritos/>} />
                    <Route path='/papelera' element={<Papelera/>} />
                    </Routes>
                </div> 
            </div>
        </div> 
    </>
    
  )
}

export default Main