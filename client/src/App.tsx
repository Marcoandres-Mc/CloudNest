
import Login from './Login'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='flex flex-row w-full justify-center'>
        <Routes>        
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home/*" element={
                <Home/>
              } />
        </Routes>
         
    </div>
      
    </>
  )
}

export default App
