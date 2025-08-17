import React, { useContext, useEffect } from 'react'
import { image } from '../assets/ImageObject'
import { Context } from '../store/Context'

const SignIn = () => {

    const { setShowSignInTab } = useContext(Context);

    useEffect(() => {
        document.body.style.overflow = 'hidden'   // disable scroll
        return () => {
            document.body.style.overflow = 'auto' // enable scroll back
        }
    }, [])

    const handleCloseTab = (event) => {
        event.preventDefault();

        setShowSignInTab(false);
    }

    return (
        <>
            <div className='fixed inset-0 z-50' onClick={handleCloseTab}>

                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                
                <div className='relative w-full flex justify-center pt-28'>

                    <div className='bg-white rounded-xl overflow-hidden max-w-[800px] w-full' onClick={(e) => e.stopPropagation()}>

                        <div className="grid grid-cols-5 ">

                            <div className="col-span-3">

                                <img src={image.SidePhoto} alt='image' className='w-full rounded-xl shadow-lg' />

                            </div>

                            <div className="col-span-2">

                                <div className='flex justify-end pr-3 pt-1'>

                                    <div className=' rounded-full  py-[1px] px-2 text-cyan-500 font-semibold hover:bg-gray-100 cursor-pointer' onClick={handleCloseTab}>X</div>

                                </div>

                                <div className='flex justify-center'>

                                    <img src={image.User} alt='user-logo' className='h-36 w-36' />

                                </div>

                                <div className='flex justify-center py-3'>

                                    <h4 className='font-semibold text-lg'>Sign In</h4>

                                </div>

                                <div className='flex justify-center pb-2'>

                                    <input type='text' placeholder='Name' className='border-2 border-black rounded-2xl px-3 py-1'></input>

                                </div>

                                <div className='flex justify-center pb-2'>

                                    <input type='number' placeholder='Phone Number' className='border-2 border-black rounded-2xl px-3 py-1'></input>

                                </div>

                                <div className='flex justify-center pb-2'>

                                    <button className='border-2 border-cyan-500 w-[67%] rounded-2xl py-1'>Confirm</button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default SignIn