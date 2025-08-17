function LabProfile(){
    return (
        <div className = "w-full h-screen ">
            <div className = "bg-[#20B3C9] w-screen h-[12%] shadow-2xl shadow-blue text ">

            </div>

            <div className = "px-20 pt-4 ">  
                <div className ="flex gap-8 border-b-2 border-[#CBF1C9]">
                    <img src ="" alt = "img" className = "h-10 w-10 m-10"/>
                    <div className = " ">
                        <h1 className = "font-bold text-xl line-clamp-1 ">Lab Name</h1>
                        <p className = "font-semibold text-sm">194 a, Maniktalla main road, scheme VI-M, Phool bagan,<br></br>
                         Kankurgachi, Kolkata, West Bengal 700054</p>
                        <p>Get Directions</p>
                    </div>
                </div>
                <div className = "py-4 border-b-2 border-[#CBF1C9]">
                    <h3 className = "font-bold text-lg pb-2">About the Lab</h3>
                    <p className = "font-semibold text-sm normal-case ">Welcome to labName, your trusted partner in medical diagnostics. We provide a full length of accurate
                        and timely lab tests, from routine bollodd work to specialized diagnostics, all conducted with the highest
                        standarts of quality and care. With advanced technology and a skilled team, we are committed to supporting healthcare providers
                        and patients in making informed health decisions.</p>
                </div>
                <div className = "py-4  border-b-2 border-[#CBF1C9]">
                    <h4 className = "font-bold font-sans py-2">Lab Services</h4>
                    <p className = "inline-block mr-6">Test type</p>
                    <p className = "inline-block">Visit Type</p>
                </div>
                <div className = "py-4 border-b-2 border-[#CBF1C9]">
                    <h3 className = "font-bold text-lg pb-2">List of Tests</h3>
                    <div className = "flex justify-between gap-4">
                        <input type = 'text' placeholder="Search test name" className = "border-2 border-gray-300 rounded p-2 flex-1"/>
                        <button className = "bg-[#21B4CA] px-3 rounded-lg text-white contrast-150">Search</button>
                        <button className = "bg-[#21B4CA] px-3 rounded-lg text-white contrast-150"><span className = "">Upload Prescription</span></button>
                        <button className = "bg-[#8DDE87] px-3 rounded-lg text-white contrast-150"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                                </svg>
                        </button>
                    </div>
                </div>
                <div className = "p-6 flex justify-center">
                    <div className = "bg-[#8DDE87 p-[2px]">
                        <button className = "">Pathology</button>
                        <button>Radiology</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default LabProfile