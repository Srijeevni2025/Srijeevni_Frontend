import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { image } from '../assets/ImageObject'
import { Context } from '../store/Context'

// const signinfun = () => {
//     return (
//         <>

//         </>
//     )
// }

const Navbar = () => {
    const { setShowSignInTab, setShowSignUpTab, setShowLocationTab } = useContext(Context);

    const handleSignInClick = (event) => {
        event.preventDefault();

        setShowSignInTab(true);

        setShowSignUpTab(false); // making sure signup tab is off
    }

    const handleSignUpClick = (event) => {
        event.preventDefault();

        setShowSignUpTab(true);

        setShowSignInTab(false); // making sure signin tab is off
    }

    const handleLocationClick = (event) => {
        event.preventDefault();

        setShowLocationTab(true);
    }

    return (
        <nav>

            <div className='w-full p-3 bg-white shadow-lg fixed top-0 z-1'>

                <div className='px-10 text-black'>

                    <div className='flex flex-wrap justify-between items-center gap-4'>

                        <div className='flex flex-wrap items-center gap-4'>

                            <div>

                                <Link to="/" className='flex items-center'>

                                    <img src={image.SrijeevaniLogo} alt='Logo' className='w-8 h-8' />
                                    <span className='text-lg font-bold ml-2 sreejeevni_text_blue '>SRIJEEVNI</span>
                                    
                                </Link>

                            </div>

                            <div className='cursor-pointer' onClick={handleLocationClick}>

                                <h1 className='flex text-sm items-center'>
                                    
                                    <span>
                                        <img src={image.LocationPin} alt='location' className='h-4 w-4' />
                                    </span>
                                    Update Location

                                </h1>

                            </div>

                            <div>

                                <input className='sm:w-[400px] md:w-[550px] border-2 border-black rounded-2xl py-1 px-4 ' placeholder="⌕ Search for tests or labs"></input>

                            </div>

                        </div>

                        <div>

                            {/* <Link to="/signin"> */}

                                <button className='rounded-l-2xl py-1 pl-3 pr-2 w-20 bg-emerald-400 hover:bg-teal-600 text-white hover:shadow-md hover:shadow-green-950  transition-transform duration-200 hover:-translate-y-1 hover:scale-110 hover:shadow-lg' onClick={handleSignInClick}>Login</button>

                            {/* </Link> */}

                            {/* <Link to="/signup"> */}

                                <button className='rounded-r-2xl py-1 pl-2 pr-3 w-20 bg-emerald-500 hover:bg-teal-600 text-white hover:shadow-md hover:shadow-green-950  transition-transform duration-200 hover:-translate-y-1 hover:scale-110 hover:shadow-lg' onClick={handleSignUpClick}><span className = "font-sans:roboto">Sign Up</span></button>

                            {/* </Link> */}

                        </div>

                        <div className='flex flex-wrap items-center gap-4'>

                            {/* <div>

                                <img src={image.Wallet} alt='Wallet' className='h-7 w-7 cursor-pointer' />

                            </div> */}

                            <div>

                                <img src={image.ShoppingCart} alt='Cart' className='h-7 w-7 cursor-pointer' />

                            </div>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-9 w-8 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-110 hover:shadow-lg">
                                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                                </svg>

                                {/* <img src={image.HamburgerMenu} alt='Menu' className='h-9 w-8 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-110 hover:shadow-lg' /> */}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </nav>
    )
}

export default Navbar