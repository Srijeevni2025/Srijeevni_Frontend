import React, { useEffect, useState } from 'react'
import Orb from '../components/animation/Orb'
import SplitText from '../components/animation/SplitText'
import FallingText from '../components/animation/FallingText'
import { image } from '../assets/ImageObject'

const LandingPage = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 3000)
    });

    return (
        <div className='bg-black'>

            {/************************** Navbar *****************************/}

            <nav>

                <div className='w-full p-3 border-b-2 bg-white border-gray-300 shadow-lg'>

                    <div className='px-4 text-black'>

                        <div className='flex flex-wrap justify-between items-center gap-4'>

                            <div className='flex flex-wrap items-center gap-4'>

                                <div className='flex items-center cursor-pointer'>

                                    <img src={image.SrijeevaniLogo} alt='Logo' className='w-8 h-8' />
                                    <span className='text-lg font-bold ml-2 sreejeevni_text_blue'>SREEJEEVNI</span>


                                </div>

                                <div className='cursor-pointer'>

                                    <h1 className='flex text-sm font-light items-center'>

                                        <span>
                                            <img src={image.LocationPin} alt='location' className='h-4 w-4' />
                                        </span>
                                        Update Location

                                    </h1>

                                </div>

                                <div>

                                    <input className='sm:w-[400px] md:w-[550px] border-2 border-black rounded-2xl py-1 px-4' placeholder="⌕ Search for tests or labs"></input>

                                </div>

                            </div>

                            <div>

                                <button className='rounded-l-2xl py-1 pl-3 pr-2 w-20 bg-emerald-400 hover:bg-teal-600 text-white'>Sign In</button>

                                <button className='rounded-r-2xl py-1 pl-2 pr-3 w-20 bg-emerald-500 hover:bg-teal-600 text-white'>Sign Up</button>

                            </div>

                            <div className='flex flex-wrap items-center gap-4'>

                                <div>

                                    <img src={image.Wallet} alt='Wallet' className='h-7 w-7 cursor-pointer' />

                                </div>

                                <div>

                                    <img src={image.ShoppingCart} alt='Cart' className='h-7 w-7 cursor-pointer' />

                                </div>

                                <div>

                                    <img src={image.HamburgerMenu} alt='Menu' className='h-9 w-8 cursor-pointer' />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </nav>

            {/*********************** Home Page Body *************************/}

            <div>

                {loader ? (

                    <div className='my-20' style={{ width: '100%', height: '600px', position: 'relative' }}>
                        <Orb
                            hoverIntensity={0.5}
                            rotateOnHover={true}
                            hue={0}
                            forceHoverState={false}
                        />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold pointer-events-none z-10">
                            <SplitText
                                text="Loading..."
                                className="text-5xl font-semibold text-center"
                                delay={150}
                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"
                            />
                        </div>

                    </div>

                ) : (

                    <div className='text-white' style={{ width: '100%', height: '660px' }}>
                        <FallingText
                            text={`Stay tuned India!!! We are launching soon... 😎`}
                            highlightWords={["India", "launching"]}
                            highlightClass="highlighted"
                            trigger="hover"
                            backgroundColor="transparent"
                            wireframes={false}
                            gravity={0.56}
                            fontSize="2rem"
                            mouseConstraintStiffness={0.9}
                        />
                    </div>

                )}

            </div>

            {/*************************** Footer *****************************/}

            <footer className="w-full">

                <div className='bg-white'>

                    <div className='w-3/4 m-auto py-5'>

                        <div className='flex justify-center'>

                            <div className="text-lg" >

                                <div className='flex flex-wrap justify-between gap-[75px]'>

                                    <div>

                                        <img src={image.SrijeevaniLogo} alt='Brand Logo' className='w-60 h-60 cursor-pointer' />

                                    </div>

                                    <div className='mt-[45px]'>

                                        <p className='font-semibold'>WHO ARE WE</p>

                                        <ul className='list-none mt-1'>
                                            <li><small className='cursor-pointer'>COMPANY</small></li>
                                            <li><small className='cursor-pointer'>ABOUT US</small></li>
                                            <li><small className='cursor-pointer'>CAREERS</small></li>
                                            <li><small className='cursor-pointer'>TERMS OF USE</small></li>
                                        </ul>

                                    </div>

                                    <div className='mt-[45px]'>

                                        <p className='font-semibold'>EXPLORE</p>

                                        <ul className='list-none mt-1'>
                                            <li><small className='cursor-pointer'>TERMS OF SERVICES</small></li>
                                            <li><small className='cursor-pointer'>CUSTOMER POLICY</small></li>
                                            <li><small className='cursor-pointer'>BECOME OUR LAB PARTNER</small></li>
                                        </ul>

                                    </div>

                                    <div className='mt-[45px]'>

                                        <p className='font-semibold'>CONTACT US</p>

                                        <ul className='list-none mt-1'>
                                            <li><small>Acropolis Mall, Howrah</small></li>
                                            <li><small className='cursor-pointer'>+91 1234567890</small></li>
                                            <li><small className='cursor-pointer'>support@sreejeevni.com</small></li>
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
                    <span className='flex-1 text-right'>© 2025 Shreejeevani</span>

                </div>

            </footer>

        </div>
    )
}

export default LandingPage
