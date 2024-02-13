import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Home from "./Home"
import ProductDetails from './ProductDetails'

import Header from 'Components/Header'
import Footer from 'Components/Footer'
import Sidebar from 'Components/Sidebar'

export default function Index() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Product/:id' element={<ProductDetails />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
            <Sidebar />
            <Footer />
        </>
    )
}
