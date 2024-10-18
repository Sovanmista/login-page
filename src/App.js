import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
