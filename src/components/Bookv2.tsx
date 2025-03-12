"use client"

import { parseTranslation } from "@/utils/utilts";
import { useEffect, useState } from "react";

export interface PageData {
  text: string;
  pagenumber?: string;
  page: number;
  translation: string;
  footnote?: string;
}

interface BookViewerProps {
  data: PageData[];
}

const Bookv2: React.FC<BookViewerProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [inputPage, setInputPage] = useState(currentPage)

  useEffect(() => setInputPage(currentPage), [currentPage])

  const nextPage = () => {
    if (currentPage < data.length - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const setPage = (page: number) => {
    setInputPage(page)
  }

  return (
    <div className="max-w-7xl mx-auto h-[100vh] md:h-[90vh] flex flex-col overflow-hidden p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4 text-black flex gap-2 justify-center items-center">
        Go to page <input className="border-[1px] border-gray-400 rounded md px-4 w-[90px]" value={inputPage} type="number" onChange={e => {
          setPage(e.currentTarget.valueAsNumber)
        }} />
        <button
          className="p-2 bg-blue-400 text-white rounded-md cursor-pointer"
          onClick={() => {
            if(!isNaN(inputPage) && inputPage>0) setCurrentPage(inputPage)
          }}
        >Go</button>
      </h2>

      <div className="flex flex-col gap-4 h-[90%]">
        {/* Arabic Text */}
        <div className="border p-4 rounded-lg text-right h-[45%] md:h-full overflow-auto">
          <h3 className="text-lg font-semibold mb-2">📖 Arabic {data[currentPage]?.pagenumber}</h3>
          <p className="text-gray-800 text-xl mb-4">{data[currentPage]?.text}</p>
          {data[currentPage]?.footnote?.split("\n").map(note => <p key={note} className="mt-2 text-gray-400">{note}</p>)}
          
        </div>

        {/* English Translation */}
        <div className="border p-4 rounded-lg h-[45%] md:h-full overflow-auto">
          <h3 className="text-lg font-semibold mb-2">📝 Translation</h3>
          <p className="text-gray-800 text-xl">{parseTranslation(data[currentPage]?.translation || '')?.text}</p>
          <p className="mt-2 text-gray-400">{parseTranslation(data[currentPage]?.translation || '')?.footnote}</p>
          <p className="mt-2 text-gray-400">{parseTranslation(data[currentPage]?.translation || '')?.pageNumber}</p>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between md:mt-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          ⬅️ Previous
        </button>

        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
          onClick={nextPage}
          disabled={currentPage === data.length - 1}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default Bookv2;
