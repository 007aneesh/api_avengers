import React, { useEffect, useState } from 'react'
import {AiOutlineClose} from "react-icons/ai";
const List = () => {
    const [selectedData, setSelectedData] = useState(null);
    const [list, setList] = useState([]);
    const getPatientList = async () =>{
      try {
        const response = await fetch("http://localhost:8000/getAllPatients");

        const data = await response.json();

        setList(data); 
      } catch (error) {
        console.error("Error fetching data!");
      }
    }
    useEffect( () => {
      getPatientList();
    }, [])
    const handleTableRowClick = (data) => {
      setSelectedData(data);
    };
   return (
     <div className="flex flex-col">
       <div className="my-3 py-2 px-1 flex flex-row items-center justify-between">
         <div>
           <h1 className="text-xl font-bold">History</h1>
         </div>
         <div className="flex flex-row items-center gap-x-3">
           <button className="px-3 py-1 bg-[#EBEBEB] rounded-3xl">
             Sort&nbsp;By
           </button>
           <button className="px-3 py-1 bg-[#EBEBEB] rounded-3xl">
             Filter
           </button>
         </div>
       </div>
       <div className="flex flex-col">
         <table className="w-full">
           <thead className="mb-3 border-b-2 bg-[#000000]/10 border-gray-400">
             <tr className="py-3">
               <th className="px-2 py-3">Patient ID</th>
               <th className="px-2 py-3">Name of patient</th>
               <th className="px-2 py-3">Gender</th>
               <th className="px-2 py-3">Contact no.</th>
             </tr>
           </thead>
           <tbody className="py-3">
             {list.map((data, index) => (
               <tr
                 key={index}
                 onClick={() => handleTableRowClick(data)}
                 className="py-2 border-y-2 font-semibold border-black/10 cursor-pointer"
               >
                 <td className="py-3 text-center flex items-center justify-center text-xs md:text-sm text-black/60">
                   <h1 className="text-center text-base truncate md:text-lg font-semibold text-black/60">
                     {data._id}
                   </h1>
                 </td>
                 <td className="py-3 flex-wrap">
                   <h1 className="text-center text-base truncate md:text-lg font-semibold text-black/60">
                     {data.name}
                   </h1>
                 </td>
                 <td className="py-3 flex-wrap">
                   <h1 className="text-center text-sm truncate md:text-base font-semibold text-black/60">
                     {data.gender}
                   </h1>
                 </td>
                 <td className="py-3 flex-wrap">
                   <h1 className="text-center text-sm truncate md:text-base font-semibold text-black/60">
                     {data.contact}
                   </h1>
                 </td>
                 
               </tr>
             ))}
           </tbody>
         </table>
       </div>
       {selectedData && (
         <div className="fixed w-full md:w-[400px] top-0 right-0 bottom-0 bg-white p-4 shadow-2xl">
           <div className="flex flex-row w-full justify-between">
             <h2 className="text-xl font-bold">{selectedData.type}</h2>
             <button
               onClick={() => setSelectedData(null)}
               className="font-bold text-xl"
             >
               <AiOutlineClose />
             </button>
           </div>
           <div className="w-full p-3">
             <div className="py-4">
               <img
                 src={selectedData.img}
                 alt="selectedImg"
                 className="h-auto w-full"
               />
             </div>
             <div className="flex flex-col">
               <h1 className="flex justify-center items-center font-bold text-xl text-center pb-5">
                 {selectedData.description}
               </h1>
               <p>Date Uploaded: {selectedData.date}</p>
               <p>Uploaded by: {selectedData.doctor}</p>
             </div>
           </div>
         </div>
       )}
     </div>
   );
}

export default List