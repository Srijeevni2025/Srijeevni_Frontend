import  React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/Context'






const PrescriptionUpload = ({showPrescriptionUpload, setShowPrescriptionUpload})=>{


    const [pinCode, setPinCode] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [mobile, setMobile] = useState('');

    useEffect(function(){
        document.body.style.overflow = 'hidden';
        return ()=>{
            document.body.style.overflow = 'auto'
        }
    },[])
    function handlePinCode(value){
        if(value.length > 7)
            return
        setPinCode(value)
    }
    return (
        
           <div className = "w-screen h-screen bg-black bg-opacity-50 inset-0  fixed z-40 flex items-center justify-center p-4" onClick = {()=>setShowPrescriptionUpload(()=>!showPrescriptionUpload)}>
                <div className = "  bg-[#ffffff] border rounded-lg shadow-sm w-full max-w-4xl p-4 sm:p-6 md:p-10 " onClick = {(e)=>e.stopPropagation()} >
                    
                    {/*Upload box*/}
                    <div className = " border rounded-[1rem] p-4 bg-gray-300">
                        {/* <div className = "w-auto max-w-3xl h-40 border-4 border-dashed  m-4 bg-[#D9D9D9] flex place-content-center items-center"> */}
                            <label htmlFor = "upload" className=" w-full  h-40 border-[3px] border-dashed   bg-gray-200 flex justify-content-center items-center cursor-pointer"><span className = "text-4xl text-gray-400 scale-[1.5]">+</span></label>
                            <input id = "upload" type = "file" hidden/>
                        {/* </div> */}
                    </div>
        
                    <div className = "grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
                        <div className ="flex flex-col gap-3">
                            <p className = "text-lg  md:text-xl font-bold">Enter Pincode: {pinCode}</p>
                            <input type = "number" max = "9999999" min = "1000000" required name = "pincode" value = {pinCode} className = "w-full border rounded bg-[#D9D9D9] p-2 font-semibold text-gray-950" onChange = {(e)=>{handlePinCode(e.target.value)}}/>
                        </div>


                        <div className = "flex flex-col gap-3">
                            <p className='text-lg md:text-xl font-bold'>Preferred Date & Time Slot</p>
                            <div className = "flex gap-3">
                                <input type ="date" placeholder = "00/00/0000" className = "flex-1 border rounded bg-[#D9D9D9] p-2"/>
                                <input type = "time" placeholder='00:00' className = "flex-1 border rounded bg-[#D9D9D9] p-2"/>
                            </div> 
                        </div>

                        <div className = "flex flex-col gap-3">
                            <p className='text-lg md:text-xl font-bold'>Enter mobile number</p>
                            <div className = "flex gap-3">
                                <input type ="text" disabled placeholder = "+91" className = " border rounded bg-[#D9D9D9] p-2 w-[20%]"/>
                                <input type = "number" className = "w-[80%] border rounded bg-[#D9D9D9] p-2"/>
                            </div> 
                        </div>
                        <div className = "flex items-end">
                            <select className = "flex-1 border rounded bg-[#D9D9D9] p-2">
                                <option className="bg-green-500">Suraksha</option>
                            </select>
                        </div>
                         
                    </div>
                    <div className = "flex place-content-center p-4">
                        <button className = "bg-green-400 px-6 py-2 border rounded-lg font-semibold" onClick={(e)=>{e.preventDefault();
                            console.log(e)}}>Submit</button>
                    </div>
                </div>
            </div>
        
       
    )
}

export default PrescriptionUpload;