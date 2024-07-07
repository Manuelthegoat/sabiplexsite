import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
        </Routes>
    </>
  )
}

export default Routing