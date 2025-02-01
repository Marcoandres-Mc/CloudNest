
import './App.css'
import Header from './Components/Header'
import Menu from './Components/Menu'
import Main from './Components/Main'
function App() {

  return (
    <>
      <Header/>
      <div className='flex flex-row'>
        <div>
          <Menu/>
        </div>
        <div className='w-full'>
          <Main/>
        </div> 
        
        
      </div>
      
    </>
  )
}

export default App
