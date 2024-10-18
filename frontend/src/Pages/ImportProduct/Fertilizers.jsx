
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const Fertilizers = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>   
     <div className='relative w-full h-[90px] md:h-[200px] lg:h-[180px] overflow-hidden font-thin'>
    <video
      className="absolute inset-0 w-full h-full object-cover "
      autoPlay
      loop
      muted
    >
      <source src="/relishvideo9.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div className="justify-center absolute inset-0 flex items-center bg-black bg-opacity-0 text-white text-center p-4">
      <h1 className={`text-2xl md:text-4xl font-bold mb- `}> Fertilizers</h1>
    </div>
  </div>

    <div className=" text-gray-800 p-6 sm:p-8 md:p-10 lg:p-7 font-serif ">
      <div className="relative">
        <div
          onClick={handleBack}
          className="fixed left-1 bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center z-20"
        >
          <FaArrowLeft className="text-2xl" />
        </div>

        <div className="max-w-4xl mx-auto ">
          {/* <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-green-800 text-center"></h1> */}
       
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
          <img
              src="https://img.freepik.com/free-photo/top-view-hands-manipulating-plant_23-2148175895.jpg?uid=R166271515&ga=GA1.1.830621292.1707550020&semt=ais_hybrid"
              alt="Tea"
              className="w-full md:w-1/2 h-96 object-cover rounded-lg shadow-md"
            />
        <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
            <li> <span className='font-bold'>Description:</span> Fertilizers like urea, DAP (Di-ammonium Phosphate), and potash for agricultural 
            use.</li>
            <li> <span className='font-bold'>Major Suppliers:</span> China, Russia, Canada, Jordan.</li>
            <li> <span className='font-bold'>Usage:</span> Agricultural production and crop yield enhancement.</li>
        </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
