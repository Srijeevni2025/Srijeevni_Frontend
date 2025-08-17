import { image } from '../assets/ImageObject'



function LabDashboard(){
    return (
       <div className ="min-h-svh">
            <div className = "flex p-4">
                <img src={image.SrijeevaniLogo} alt='Logo' className='w-8 h-8' />
                <span className='text-lg font-bold ml-2 sreejeevni_text_blue '>SRIJEEVNI</span>
            </div>

            <div className = "grid grid-cols-1 md:grid-cols-[1fr,4fr] min-h-[calc(100vh-5rem)] pb-4 ">
                <aside  className = " md:flex-2  border-r-2  ">
                   <ul className = "flex md:flex-col py-6 gap-6 font-semibold px-16 justify-around ">
                        <li className = "font-semibold hover:bg-green-100 rounded-lg p-2 ">Dashboard</li>
                        <li className = "font-semibold hover:bg-green-100 rounded-lg p-2">Settings</li>
                   </ul>
                </aside>
                <section className = " flex-grow">
                    <div className = "flex flex-col">
                        <h2 className = "flex justify-start p-4 font-bold">Bookings</h2>
                        <table className = "table-fixed md:w-full  text-center border-collapse mx-auto">
                            <thead className = "bg-gray-100">
                                <tr>
                                    <th className = "border px-2 py-1">S.No</th>
                                    <th className = "border px-2 py-1">Name</th>
                                    <th className = "border px-2 py-1">Tests</th>
                                    <th className = "border px-2 py-1">Pincode</th>
                                    <th className = "border px-2 py-1">Flebo contact</th>
                                    <th className = "border px-2 py-1">Status</th>
                                    <th className = "border px-2 py-1">Action</th>
                                </tr>
                            </thead>
                            <tbody  className ="m-2">
                               <TableRow data = {{sno:1, name:"rajan chouhan", tests:"CBC", pincode: 700107, fleboContact:9999999, Status:"pending"}}/>
                               <TableRow data = {{sno:1, name:"rajan chouhan", tests:"CBC", pincode: 700107, fleboContact:9999999, Status:"pending"}}/>
                               <TableRow data = {{sno:1, name:"rajan chouhan", tests:"CBC", pincode: 700107, fleboContact:9999999, Status:"pending"}}/>
                               <TableRow data = {{sno:1, name:"rajan chouhan", tests:"CBC", pincode: 700107, fleboContact:9999999, Status:"pending"}}/>
                               <TableRow data = {{sno:1, name:"rajan chouhan", tests:"CBC", pincode: 700107, fleboContact:9999999, Status:"pending"}}/>
                               <TableRow data = {{sno:1, name:"rajan chouhan", tests:"CBC", pincode: 700107, fleboContact:9999999, Status:"pending"}}/>
                               <TableRow data = {{sno:1, name:"rajan chouhan", tests:"CBC", pincode: 700107, fleboContact:9999999, Status:"pending"}}/>
                               <TableRow data = {{sno:1, name:"rajan chouhan", tests:"CBC", pincode: 700107, fleboContact:9999999, Status:"pending"}}/>
                               <TableRow data = {{sno:1, name:"rajan chouhan", tests:"CBC", pincode: 700107, fleboContact:9999999, Status:"pending"}}/> 
                               <TableRow data = {{sno:1, name:"rajan chouhan", tests:"CBC", pincode: 700107, fleboContact:9999999, Status:"pending"}}/>
                               <TableRow data = {{sno:1, name:"rajan chouhan", tests:"CBC", pincode: 700107, fleboContact:9999999, Status:"pending"}}/>
                            </tbody>
                        </table>

                    </div>
                    
                </section>
            </div>
            

       </div>
    )
}


function TableRow({data}){
    const {sno, name, tests, pincode, fleboContact, Status} = data;
    return (
        <tr>
            <td>{sno}</td>
            <td>{name}</td>
            <td>{tests}</td>
            <td>{pincode}</td>
            <td>{fleboContact}</td>
            <td>{Status}</td>
            <td><select defaultValue = "Pending">
                                        <option>Accept</option>
                                        <option>Reject</option>
                                    </select></td>
        </tr>
    )
}
export default LabDashboard;