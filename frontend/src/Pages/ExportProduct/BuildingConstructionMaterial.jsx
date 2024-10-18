
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const BuildingConstructionMaterial = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
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
          <h1 className={`text-2xl md:text-4xl font-bold mb- `}>Building Construction   </h1>
        </div>
      </div>
  <div className="  p-6 sm:p-8 md:p-10 lg:p-7  ">
      <div className="relative">
        <div
          onClick={handleBack}
          className="fixed  left-1 bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center z-20"
        >
          <FaArrowLeft className="text-2xl" />
        </div>
<div className='md:px-40'>
        <div className="max-w-4xl mx-auto ">

          {/* <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-green-800 text-center ml-10"> Material
           </h1> */}
       </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="relative w-full md:w-1/2 h-96">
              <img
                src="https://img.freepik.com/premium-photo/building-material-construction-construction-side_1048944-26507906.jpg?ga=GA1.1.830621292.1707550020&semt=ais_hybrid"
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-md absolute inset-0"
              />
              {/* <img
                src="https://img.freepik.com/premium-photo/there-are-multiple-pairs-sunglasses-arranged-neatly-shelf_179755-28602.jpg?ga=GA1.1.830621292.1707550020&semt=ais_hybrid"
                alt=""
                className=" w-60 h-56 object-cover rounded-lg shadow-md absolute inset-40 top-0" 
              /> */}
            </div>
            <p className="text-base sm:text-lg md:w-1/2 text-center">
            From cement to steel, we export durable construction materials that meet the rigorous standards of
            the building and infrastructure sectors.
            </p>
          </div>
        </div>
      </div>
    </div>

     
            
        </>
    )
}
