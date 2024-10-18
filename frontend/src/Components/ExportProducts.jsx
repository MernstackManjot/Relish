import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Card } from './Cards'
import { FaArrowLeft } from 'react-icons/fa';
import { ExportImportCard } from './CardExport-Import';
import relishvideo from '../../public/relishvideo9.mp4'

export const ExportProduct = () => {
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
                    <h1 className={`text-2xl md:text-4xl font-bold mb- `}  >Export Services</h1>
                </div>
            </div>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10  font-serif min-h-screen">
        <div className="flex flex-col sm:flex-row justify-center items-center  mb-8 space-y-4 sm:space-y-0">
          <div onClick={handleBack} className="bg-green-800 h-10 w-10 text-gray-100 p-2    rounded-full cursor-pointer flex items-center justify-center md:mb-48">
            <FaArrowLeft className="text-2xl " />
          </div>
          <div className="">
            {/* <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-green-800 text-center">
              
            </h1> */}
            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-black mx-auto '>
              At <span className='text-black font-bold'>Relish Consultancy & Marketing</span>, we specialize in delivering top-quality export solutions across a
              broad range of industries. With years of experience in the field, we ensure that our clients receive
              only the best products and services, tailored to meet global standards and market demands.
            </p>
            <h3 className='text-xl font-bold mt-5 text-green-800'>Our Export Categories :</h3>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-black mx-auto '>We pride ourselves on offering an extensive range of products for export, meeting the diverse needs
              of industries and consumers worldwide.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <Link to="/export/Tea">                           <ExportImportCard title="Tea" /></Link>
          <Link to="/export/Textiles">                      <ExportImportCard title="Textiles" /></Link>
          <Link to="/export/Cosmetics">                     <ExportImportCard title="Cosmetics" /></Link>
          <Link to="/export/MobileAccessories">             <ExportImportCard title="Mobile Accessories" /></Link>
          <Link to="/export/FootWear">                      <ExportImportCard title="FootWear" /></Link>
          <Link to="/export/AgricultureProducts">           <ExportImportCard title="Agriculture Products" /></Link>
          <Link to="/export/Eyeglasses">                    <ExportImportCard title="Eyeglasses" /></Link>
          <Link to="/export/FoodGrains">                    <ExportImportCard title="Food Grains" /></Link>
          <Link to="/export/Fruits&Vegetables">             <ExportImportCard title="Fruits & Vegetables" />  </Link>
          <Link to="/export/Handicrafts">                   <ExportImportCard title=" Handicrafts" /></Link>
          <Link to="/export/Machinery">                     <ExportImportCard title=" Machinery" /></Link>
          <Link to="/export/Spices">                        <ExportImportCard title=" Spices" /></Link>
          <Link to="/export/Rice">                          <ExportImportCard title=" Rice" /></Link>
          <Link to="/export/Flour">                         <ExportImportCard title=" Flour" /></Link>
          <Link to="/export/MineralWater">                  <ExportImportCard title="  Mineral Water" /></Link>
          <Link to="/export/Chemicals">                     <ExportImportCard title="  Chemicals" /></Link>
          <Link to="/export/SpareParts">                    <ExportImportCard title="Spare Parts (Vehicles)" /></Link>
          <Link to="/export/BuildingConstructionMaterial">  <ExportImportCard title=" Building Construction Material" /></Link>

        </div>
      </div>
    </>
  )
}
