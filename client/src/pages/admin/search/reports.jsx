import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { getAllReports } from '../../../services/api';
const Reports = ({user}) => {
    const [selectedData, setSelectedData] = useState(null);
    const handleTableRowClick = (data) => {
      setSelectedData(data);
    };
    const aadharNumber = user?.aadharNumber;
    const [data, setData] = useState([]);
    
    useEffect(() => {
      async function getReports() {
        try {
          const reports = await getAllReports(aadharNumber);
          setData(reports);
        } catch (error) {
          console.error("Error fetching reports: ", error);
        }
      }
      getReports();
    }, [aadharNumber]);


  return (
    <>
      <div className="flex flex-col">
        <table className="w-full">
          <thead className="mb-3 border-b-2 bg-[#000000]/10 border-gray-400">
            <tr className="py-3">
              <th className="px-2 py-3">Image</th>
              <th className="px-3 py-3">Description</th>
              <th className="px-3 py-3">Type</th>
              <th className="px-3 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="py-3">
            {data.map((data, index) => (
              <tr
                key={index}
                onClick={() => handleTableRowClick(data)}
                className="py-2 border-y-2 font-semibold border-black/10 cursor-pointer"
              >
                <td className="py-3 text-center flex items-center justify-center text-xs md:text-sm text-black/60">
                  <img src={data.image} alt="img" className="w-14 h-16" />
                </td>
                <td className="py-3 flex-wrap">
                  <h1 className="text-center text-base truncate md:text-lg font-semibold text-black/60">
                    {data.description}
                  </h1>
                </td>
                <td className="py-3 flex-wrap">
                  <h1 className="text-center text-sm truncate md:text-base font-semibold text-black/60">
                    {data.dataType}
                  </h1>
                </td>
                <td className={`py-3 text-center text-black/60 font-semibold`}>
                  {data?.updatedAt.substring(0, 10)}
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
                className="h-auto"
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
    </>
  );
}

export default Reports