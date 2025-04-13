import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Base = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>

            {children}

            <Footer></Footer>
        </>
    )
}

export default Base
