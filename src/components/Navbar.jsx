import React from 'react'
import { Link } from 'react-router-dom'
import { image } from '../assets/ImageObject'

// const signinfun = () => {
//     return (
//         <>

//         </>
//     )
// }

const Navbar = () => {
    return (
        <nav>

            <div className='w-full p-3 border-b-2 bg-white border-gray-300 shadow-lg'>

                <div className='px-4 text-black'>

                    <div className='flex flex-wrap justify-between items-center gap-4'>

                        <div className='flex flex-wrap items-center gap-4'>

                            <div>

                                <Link to="/" className='flex items-center'>

                                    <img src={image.SrijeevaniLogo} alt='Logo' className='w-8 h-8' />
                                    <span className='text-lg font-bold ml-2 sreejeevni_text_blue'>SREEJEEVNI</span>
                                    
                                </Link>

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

                            <Link to="/signin">

                                <button className='rounded-l-2xl py-1 pl-3 pr-2 w-20 bg-emerald-400 hover:bg-teal-600 text-white'>Sign In</button>

                            </Link>

                            <Link to="/signup">

                                <button className='rounded-r-2xl py-1 pl-2 pr-3 w-20 bg-emerald-500 hover:bg-teal-600 text-white'>Sign Up</button>

                            </Link>

                        </div>

                        <div className='flex flex-wrap items-center gap-4'>

                            {/* <div>

                                <img src={image.Wallet} alt='Wallet' className='h-7 w-7 cursor-pointer' />

                            </div> */}

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
    )
}

export default Navbar