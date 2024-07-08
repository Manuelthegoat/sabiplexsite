import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import NotFound from './Pages/NotFound'
import Cart from './Components/Cart'
import ProductsDetails from './Pages/ProductsDetails'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product-details' element={<ProductsDetails />} />
        </Routes>
    </>
  )
}

export default Routing