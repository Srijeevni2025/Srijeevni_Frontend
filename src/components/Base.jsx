import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Base = ({ children }) => {
    return (
        <div className='relative'>
            <Navbar></Navbar>

            {children}

            <Footer></Footer>
        </div>
    )
}

export default Base
