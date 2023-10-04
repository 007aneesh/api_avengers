import React from 'react'
import Data from "./data";
const Report = () => {
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
          <button className="px-3 py-1 bg-[#EBEBEB] rounded-3xl">Filter</button>
        </div>
      </div>
      <div className="flex flex-col">
        <table className="w-full">
          <thead className="mb-3 border-b-2 bg-[#000000]/10 border-gray-400">
            <tr className="py-3">
              <th className="px-3 py-3">Date</th>
              <th className="px-3 py-3">Description</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-3 py-3">Amount</th>
            </tr>
          </thead>
          <tbody className="py-3">
            {Data.map((data, index) => (
              <tr
                key={index}
                className="py-2 border-y-2 font-semibold border-black/10"
              >
                <td className="py-3 text-center text-xs md:text-sm text-black/60">
                  {data.date}
                </td>
                <td className="py-3 flex-wrap">
                  <h1 className="text-center text-base truncate md:text-lg font-semibold text-black/60">
                    {data.bank}
                  </h1>
                  <p className="text-center text-sm text-black/60">
                    {data.description}
                  </p>
                </td>
                <td
                  className={`py-3 text-center text-black/60 font-bold ${
                    data.status === "Pending"
                      ? "text-red-500"
                      : "text-[#00C213F5]"
                  }`}
                >
                  {data.status}
                </td>
                <td className="py-3 text-center text-black/60">
                  {data.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Report