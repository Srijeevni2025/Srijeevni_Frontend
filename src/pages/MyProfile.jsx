//This page is responsible for displaying the logged in users data and users profile




function MyProfile(){
    return (
        <div className = "w-auto h-auto p-4 mt-10">

            
            <div className = "w-auto h-auto grid grid-cols-1 md:grid-cols-[250px,1fr] gap-6 px-2">
                
                {/* Side-bar for profile related services */}
                <div className = "flex flex-col items-start border-b-2 md:border-b-0 md:border-r-2 border-gray-300 justify-between py-6 pr-4">
                    <div className = "flex flex-col gap-4 px-8 pt-[20%]">
                        <p className = "">My Profile</p>
                        <p>My Bookings</p>
                        <p>Test Records</p>
                    </div>
                    <button className = "px-auto w-[90%]  border-t-2 text-gray-400">Log Out</button>
                </div>
            
                {/* Main screen to show details */}
                <div className = "w-[100%] px-8">
                    <p className = "pb-4 font-bold">My Profile</p>
                    <div className ="flex  px-4 py-16 justify-between border-2 rounded-xl ">
                        <div className = "flex gap-16 items-center">
                            <img src = "" alt = "profile pic" className = "h-16 w-16 p-4 border-2 rounded-[50%]" />
                            <div>
                                <p>Aditya Shaw</p>
                                <p>age, Gender</p>
                            </div>
                        </div>    
                        <button className = " bg-green-200 h-6 rounded-md px-2 translate- ">Edit</button>
                    </div>
                    <div className = "md:flex gap-6 text-xs">
                        <div className = " flex-1 p-6 border-2 rounded-xl mt-4 flex flex-col gap-2">
                            <h3 className = "font-bold text-xl ">Personal Information</h3>
                            <p className = "flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg> +91 704430XXXX</p>
                            <p className = "flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                                </svg> 5'11" (180cm)</p>
                            <p className = "flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                                </svg> AB+</p>
                            <div className = "flex justify-between pr-4">
                                <p className = "flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                                </svg> 169 lbs, 76kg</p>
                                <button className = "bg-green-300 px-2 rounded-xl text-white contrast-100">Edit</button>
                            </div>
                            
                        </div>
                        <div className = "flex-1 p-6 border-2 rounded-xl mt-4  flex flex-col gap-2">
                            <h3 className = "font-bold text-xl">Address</h3>
                            <p className = "flex gap-6 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>397 Eden Drive, Richmond, VA, Virginia</p>
                            <p className = "flex gap-6 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                                </svg>Richmond Hill Church</p>
                            <p className = "flex gap-6 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                 <path fillRule="evenodd" d="M3.22 3.22a.75.75 0 0 1 1.06 0l3.97 3.97V4.5a.75.75 0 0 1 1.5 0V9a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1 0-1.5h2.69L3.22 4.28a.75.75 0 0 1 0-1.06Zm17.56 0a.75.75 0 0 1 0 1.06l-3.97 3.97h2.69a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0ZM3.75 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-3.97 3.97a.75.75 0 0 1-1.06-1.06l3.97-3.97H4.5a.75.75 0 0 1-.75-.75Zm10.5 0a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-2.69l3.97 3.97a.75.75 0 1 1-1.06 1.06l-3.97-3.97v2.69a.75.75 0 0 1-1.5 0V15Z" clipRule="evenodd" />
                                </svg> 700107</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default MyProfile;