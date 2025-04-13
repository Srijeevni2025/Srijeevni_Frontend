import React from 'react'
import { image } from '../assets/ImageObject'

const SignIn = () => {
    return (
        <>

            <div className='flex flex-wrap justify-center'>

                <div className='flex w-auto mt-20 bg-red-500'>

                    <div className=''>

                        <img src={image.SidePhoto} alt="side-photo" className='w-full' />

                    </div>

                    <div className=''>

                        <div className='flex justify-center'>

                            <img src={image.User} alt="user" className='h-20 w 20' />

                        </div>

                        <div className=''>

                            <input
                                className='py-1 px-2 bg-gray-200 rounded-lg mt-2'
                                type="text"
                                placeholder='Email'>
                            </input>

                            <br />

                            <input
                                className='py-1 px-2 bg-gray-200 rounded-lg'
                                type="password"
                                placeholder='Password'>
                            </input>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default SignIn