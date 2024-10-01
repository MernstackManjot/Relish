
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const GoldandPreciousMetals = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-green-50 text-gray-800 p-6 sm:p-8 md:p-10 lg:p-7 font-serif min-h-screen">
      <div className="relative">
        <div
          onClick={handleBack}
          className="fixed top-4 md:left-40 bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center z-20"
        >
          <FaArrowLeft className="text-2xl" />
        </div>

        <div className="max-w-4xl mx-auto ">
          <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-green-800 text-center ml-9"> Gold and Precious Metals</h1>
       
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
            
        <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
            <li> <span className='font-bold'>Description:</span>India is one of the largest consumers of gold, used primarily in jewelry, 
investment, and manufacturing.
</li>
            <li> <span className='font-bold'>Major Suppliers:</span> Switzerland, UAE, South Africa, Australia.</li>
            <li> <span className='font-bold'>Usage:</span>Jewelry, electronics, and investments.</li>
        </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
