
import './App.css'
import Login from './Login'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Perfil from './pages/Perfil'
import Documentos from './pages/Documentos'
import Fotos from './pages/Fotos'
import Favoritos from './pages/Favoritos'
import Papelera from './pages/Papelera'



function App() {

  return (
    <>
      <div className='flex flex-row'>
        <Routes>
            <Route path='/' element={<Home/>} >
              <Route path='/home/' element={<Main/>}/>
              <Route path='/perfil' element={<Perfil/>} />   

            </Route>
            <Route path='/login' element={<Login/>} />   
        </Routes>
         
    </div>
      
    </>
  )
}

export default App
