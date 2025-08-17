import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/Context'

// import Orb from '../components/animation/Orb' // For landing page
// import SplitText from '../components/animation/SplitText' // For landing page
// import FallingText from '../components/animation/FallingText' // For landing page

import Base from '../components/Base'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import LocationTab from '../components/LocationTab'
import { image } from '../assets/ImageObject'
import { popularScans, popularTestData, prescriptionData, specialFeatureData, testByHealtCondition } from '../assets/ProductObject'

const Home = () => {
  //------------------------------- For landing page -------------------------------------------
  // const [loader, setLoader] = useState(true); // For landing page

  // // For landing page
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 3000)
  // });
  //------------------------------------------------------------------------------------------

  const { showSignInTab, showSignUpTab, showLocationTab } = useContext(Context);

  return (
    <Base>

      {showSignInTab && (<SignIn />)}

      {showSignUpTab && (<SignUp />)}

      {showLocationTab && (<LocationTab />)}

      <div className='relative z-0'>

        {/* Carousel */}
        <div className='pt-32 pb-14 px-16 w-full overflow-hidden'>

          <img src={image.Carousel_01} alt='Carousel' className='w-full h-[400px] rounded-xl' />

        </div>

        {/* Upload Prescription */}
        <div className='px-14'>

          <div className='grid grid-cols-1 sm:grid-cols-3 border-2 border-emerald-300 rounded-xl overflow-hidden'>

            <div className='sm:col-span-1 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 p-6 sm:p-8 bg-emerald-300'>

              <div className='flex justify-center'>

                <img src={image.Prescription} alt='Prescription' className='h-24 w-24' />

              </div>

              <div className='my-auto text-center'>

                <div className='pb-3 font-semibold text-xl'>Upload Your Prescription</div>

                <div className='flex justify-center'>

                  <button type='button' className='px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl'>Select Files</button>

                </div>

              </div>

            </div>

            <div className='sm:col-span-2 px-4 pt-1 pb-2'>

              <p className='pt-1 pb-3'>How it works?</p>

              <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4'>

                {prescriptionData.map((curEle, index) => {

                  const { id, message, row, col } = curEle

                  return (

                    <p key={index} className={`flex items-center sm:row-start-${row} sm:col-start-${col}`}>

                      <span className='px-3 py-1 bg-emerald-400 text-xl text-white rounded-lg'>{id}</span>

                      <span className='pl-2 text-lg'>{message}</span>

                    </p>
                  )

                })}

              </div>

            </div>

          </div>

        </div>

        {/* Special Features */}
        <div className='px-14 py-16 flex flex-wrap justify-between gap-4'>

          {specialFeatureData.map((curEle, index) => {
            const { image, message, bg_color, bg_hover } = curEle;

            return (
              <div className={`w-80 p-4 flex justify-between ${bg_color} ${bg_hover} rounded-xl cursor-pointer`} key={index}>

                <div className='pl-3'>

                  <img src={image} alt={message} className='h-24 w-24' />

                </div>

                <div className='flex items-center text-center pr-3 text-xl text-wrap font-semibold'>

                  <p>{message}</p>

                </div>

              </div>
            )
          })}

        </div>

        {/* Emergency */}
        <div className='flex justify-center'>

          <div className='px-8 py-2 flex justify-center gap-8 border-3 border-red-500 rounded-xl'>

            <div>

              <img src={image.EmergencyCall} alt="Emergency Call Number" className='h-14 w-14' />

            </div>

            <div className='my-auto text-center'>

              <p className='text-sm'>For Emergency Call:</p>

              <p className='font-semibold text-2xl'>033 1234 4567</p>

            </div>

          </div>

        </div>

        {/* Popular Tests & Popular Scans */}
        <div className='my-16 bg-gradient-to-r from-[#89D5B6] via-[#54C295] to-[#2E8B70]'>

          <div className='px-14 py-8'>

            {/* Popular Tests */}
            <div>

              <p className='text-lg font-bold pb-2'>Popular Tests</p>

              <div className='flex justify-between flex-wrap gap-4'>

                {popularTestData.map((curEle, index) => {

                  const { image, message } = curEle;

                  return (
                    <div className='cursor-pointer' key={index}>

                      <img src={image} alt={message} className='h-44 w-48 rounded-xl object-cover' />

                      <div className='flex justify-center'>

                        <p className='w-[150px] text-sm text-center text-wrap font-semibold pt-2'>{message}</p>

                      </div>

                    </div>
                  )
                })}

              </div>

            </div>

            {/* Popular Scans */}
            <div className='pt-8 pb-1'>

              <p className='text-lg font-bold pb-2'>Popular Scans</p>

              <div className='flex justify-between flex-wrap gap-4'>

                {popularScans.map((curEle, index) => {

                  const { image, message } = curEle;

                  return (
                    <div className='cursor-pointer' key={index}>

                      <img src={image} alt={message} className='h-44 w-48 rounded-xl object-cover' />

                      <div className='flex justify-center'>

                        <p className='w-[150px] text-sm text-center text-wrap font-semibold pt-2'>{message}</p>

                      </div>

                    </div>
                  )
                })}

              </div>

            </div>

          </div>

        </div>

        {/* Test By Health Condition & Health Package */}
        <div className='px-14'>

          {/* Test By Health Condition */}
          <div>

            <p className='text-lg font-bold pb-2'>Test By Health Condition</p>

            <div className='flex justify-between flex-wrap gap-4'>

              {testByHealtCondition.map((curEle, index) => {

                const { image, message } = curEle;

                return (
                  <div className='cursor-pointer' key={index}>

                    <div className='flex justify-center'>

                      <div className='flex justify-center items-center h-24 w-24 bg-[#93D6FC] rounded-full'>

                        <img src={image} alt={message} className='h-16 w-16' />

                      </div>

                    </div>

                    <div className='flex justify-center'>

                      <p className='w-[150px] text-sm text-center text-wrap font-semibold pt-2'>{message}</p>

                    </div>

                  </div>
                )
              })}

            </div>

          </div>

          {/* Health Package */}
          <div className='pt-8'>

            <p className='text-lg font-bold pb-2'>Health Package</p>

            <div className='flex justify-between flex-wrap gap-4'>

              {popularScans.map((curEle, index) => {

                const { image, message } = curEle;

                return (
                  <div className='cursor-pointer' key={index}>

                    <img src={image} alt={message} className='h-44 w-48 rounded-xl object-cover' />

                    <div className='flex justify-center'>

                      <p className='w-[150px] text-sm text-center text-wrap font-semibold pt-2'>{message}</p>

                    </div>

                  </div>
                )
              })}

            </div>

          </div>

        </div>

        {/* Feedback & Lab Partners */}
        <div className='my-16 bg-gradient-to-r from-[#2E8B70] via-[#54C295] to-[#89D5B6]'>

          <div className='px-14 py-8'>

            {/* Feedback */}
            <div>

              <p className='text-lg font-bold pb-2'>Feedback</p>

              <div className='flex justify-between flex-wrap gap-4'>

                {popularTestData.map((curEle, index) => {

                  const { image, message } = curEle;

                  return (
                    <div className='cursor-pointer' key={index}>

                      <img src={image} alt={message} className='h-44 w-48 rounded-xl object-cover' />

                      <div className='flex justify-center'>

                        <p className='w-[150px] text-sm text-center text-wrap font-semibold pt-2'>{message}</p>

                      </div>

                    </div>
                  )
                })}

              </div>

            </div>

            {/* Lab Partners */}
            <div className='pt-4 pb-1'>

              <p className='text-lg text-center font-bold pb-3'>Lab Partners</p>

              <div className='flex justify-between flex-wrap gap-4'>

                {testByHealtCondition.map((curEle, index) => {

                  const { image, message } = curEle;

                  return (
                    <div className='cursor-pointer' key={index}>

                      <div className='flex justify-center'>

                        <div className='flex justify-center items-center h-24 w-24 bg-[#93D6FC] rounded-full'>

                          <img src={''} alt={message} className='h-16 w-16' />

                        </div>

                      </div>

                      <div className='flex justify-center'>

                        <p className='w-[150px] text-sm text-center text-wrap font-semibold pt-2'>{message}</p>

                      </div>

                    </div>
                  )
                })}

              </div>

            </div>

          </div>

        </div>

        {/* Emergency */}
        <div className='flex justify-center pb-16'>

          <div className='px-8 py-2 flex justify-center gap-8 border-3 border-red-500 rounded-xl'>

            <div>

              <img src={image.EmergencyCall} alt="Emergency Call Number" className='h-14 w-14' />

            </div>

            <div className='my-auto text-center'>

              <p className='text-sm'>For Emergency Call:</p>

              <p className='font-semibold text-2xl'>033 1234 4567</p>

            </div>

          </div>

        </div>

      </div>

    </Base>
  )
}

export default Home
