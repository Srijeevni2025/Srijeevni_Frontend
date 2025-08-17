import React, { useContext, useEffect } from 'react'
import { Context } from '../store/Context';
import { image } from '../assets/ImageObject';

const LocationTab = () => {

    const { setShowLocationTab, setShowSignInTab, setShowSignUpTab } = useContext(Context);

    useEffect(() => {
            document.body.style.overflow = 'hidden'   // disable scroll
            return () => {
                document.body.style.overflow = 'auto' // enable scroll back
            }
        }, [])

    const handleCloseTab = (event) => {
        event.preventDefault();

        setShowSignUpTab(false); // making sure signup tab is off
        setShowLocationTab(false); // making sure location tab is off
    }

    const handleSignInClick = (event) => {
        event.preventDefault();

        setShowSignInTab(true);

        setShowLocationTab(false);
    }

    return (
        <>
            <div className='fixed inset-0 z-50' onClick={handleCloseTab}>

                <div className='absolute inset-0 bg-black bg-opacity-50'></div>

                <div className='relative w-full pl-64 pt-12'>

                    <div className='bg-white rounded-xl overflow-hidden max-w-[350px] w-full' onClick={(e) => e.stopPropagation()}>

                        <div className='flex justify-end pr-3 pt-1'>

                            <div className='border-2 rounded-full border-cyan-500 py-1 px-2 text-cyan-500 text-xs font-semibold hover:bg-gray-100 cursor-pointer' onClick={handleCloseTab}>X</div>

                        </div>

                        <div className='flex justify-center pb-1 text-xl font-bold'>Choose your location</div>

                        <div className='flex justify-center p-1'>

                            <button className='flex justify-center items-center w-[300px] rounded-2xl py-1 px-2 bg-cyan-200 text-white hover:bg-cyan-300' onClick={handleSignInClick}>
                                Sign in to see saved address  
                                <span><img src={image.LocationPinWhite} alt='location' className='pl-2 h-5' /></span>
                            </button>

                        </div>

                        <div className='flex justify-center py-2 text-gray-600 text-xs'>or enter your pincode</div>

                        <div className='flex justify-center pt-1 pb-4'>

                            <input type='number' placeholder='Pincode' className='w-32 border-2 border-black rounded-2xl px-3 py-1'></input>

                            <button className='ml-2 rounded-2xl px-3 py-1 sreejeevni_bg_green text-white'>Apply</button>

                            <button className='ml-2 rounded-2xl px-3 py-1 sreejeevni_bg_blue text-white' onClick={handleCloseTab}>Done</button>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default LocationTab