import React from 'react'
import Navbar from './Navbar/navbar'
import Home from './Home/home'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App;