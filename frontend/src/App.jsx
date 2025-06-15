import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import View from './components/View'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  return (
    <>
      
      <Navbar></Navbar>
      <Routes>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/view' element={<View/>}></Route>
        <Route path='/log' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
