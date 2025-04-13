import React from 'react'
import { Link } from 'react-router-dom'
import { image } from '../assets/ImageObject'

const Footer = () => {
  return (
    <footer className="w-full">

      <div className='bg-gray-900'>

        <div className='w-3/4 m-auto py-5'>

          <div className='flex justify-center'>

            <div className="text-gray-300 text-lg" >

              <div className='flex flex-wrap justify-between gap-[75px]'>

                <div>

                  <Link to='/'>
                    <img src={image.SrijeevaniLogo} alt='Brand Logo' className='w-60 h-60' />
                  </Link>

                </div>

                <div className='mt-[45px]'>

                  <p className='font-semibold'>WHO ARE WE</p>

                  <ul className='list-none mt-1'>
                    <li><Link to='/company'><small>COMPANY</small></Link></li>
                    <li><Link to='/about'><small>ABOUT US</small></Link></li>
                    <li><Link to='/careers'><small>CAREERS</small></Link></li>
                    <li><Link to='/termsofuse'><small>TERMS OF USE</small></Link></li>
                  </ul>

                </div>

                <div className='mt-[45px]'>

                  <p className='font-semibold'>EXPLORE</p>

                  <ul className='list-none mt-1'>
                    <li><Link to='/termsofservices'><small>TERMS OF SERVICES</small></Link></li>
                    <li><Link to='/customerpolicy'><small>CUSTOMER POLICY</small></Link></li>
                    <li><Link to='/becomeourlabpartner'><small>BECOME OUR LAB PARTNER</small></Link></li>
                  </ul>

                </div>

                <div className='mt-[45px]'>

                  <p className='font-semibold'>CONTACT US</p>

                  <ul className='list-none mt-1'>
                    <li><small>Acropolis Mall, Howrah</small></li>
                    <li><small>+91 1234567890</small></li>
                    <li><small>support@sreejeevni.com</small></li>
                  </ul>

                </div>

                <div className='mt-[45px]'>

                  <p className='font-semibold'>FOLLOW US ON</p>

                  <div className='flex mt-1 space-x-2'>
                    <a href="https://www.facebook.com/" target="_blank"><img src={image.FacebookLogo} alt='Facebook' className='h-7 w-7' /></a>
                    <a href="https://www.instagram.com/" target="_blank"><img src={image.InstagramLogo} alt='Instagram' className='h-7 w-7' /></a>
                    <a href="https://x.com/" target="_blank"><img src={image.XLogo} alt='X' className='h-7 w-7' /></a>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="bg-gray-950 text-gray-400 p-3 flex flex-wrap justify-between gap-2 items-center">

        <span className='flex-1 text-left'>All Rights Reserved.</span>
        <span className='flex-1 text-center'>Made with <span className='text-red-500'>♥</span> in India</span>
        <span className='flex-1 text-right'>© 2024 Shreejeevani</span>

      </div>

    </footer>
  )
}

export default Footer
