import React from 'react'
import Navbar from './Navbar/navbar'
import Home from './Home/home'
import SignIn from './Signstatus/signIn.js'
import SignUp from './Signstatus/signUp.js'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App;