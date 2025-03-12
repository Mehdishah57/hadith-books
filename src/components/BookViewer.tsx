"use client"

import { useState } from "react";

interface PageData {
  text: string;
  pagenumber: string;
  page: number;
  translation: string;
}

interface BookViewerProps {
  data: PageData[];
}

const BookViewer: React.FC<BookViewerProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < data.length - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="max-w-7xl mx-auto max-h-[90vh] overflow-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4 text-black">
        Page {data[currentPage].page}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Arabic Text */}
        <div className="border p-4 rounded-lg text-right">
          <h3 className="text-lg font-semibold mb-2">📖 Arabic</h3>
          <p className="text-gray-800 text-xl">{data[currentPage].text}</p>
        </div>

        {/* English Translation */}
        <div className="border p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">📝 Translation</h3>
          <p className="text-gray-800 text-xl">{data[currentPage].translation}</p>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          ⬅️ Previous
        </button>

        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={nextPage}
          disabled={currentPage === data.length - 1}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default BookViewer;
