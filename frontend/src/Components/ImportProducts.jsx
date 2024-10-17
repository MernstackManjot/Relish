import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Card } from './Cards'
import { FaArrowLeft } from 'react-icons/fa';
import { ExportImportCard } from './CardExport-Import';

export const ImportProduct = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  };

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="p-4 sm:p-6 md:p-8  font-serif min-h-screen">
        <div className="flex items-center mb-8">

          <div onClick={handleBack} className="bg-green-800 h-10 text-gray-100 p-2 rounded-full cursor-pointer">
            <FaArrowLeft className="text-2xl" />
          </div>

          <h1 className="text-3xl font-bold mb-8 text-green-800 flex-1 text-center ">
            Import Services
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  justify-center">
        <Link to="/import/Crude Oil and Petroleum Products">  <ExportImportCard title="Crude Oil and Petroleum Products"/></Link>
        <Link to="/import/Gold and Precious Metals">  <ExportImportCard title=" Gold and Precious Metals"/></Link>
        <Link to="/import/Electronics and Electrical Equipment">  <ExportImportCard title=" Electronics and Electrical Equipment"/></Link>
        <Link to="/import/Machinery (Heavy and Industrial)">  <ExportImportCard title="Machinery (Heavy and Industrial)"/></Link>
        <Link to="/import/Coal, Coke, and Briquettes">  <ExportImportCard title="Coal, Coke, and Briquettes"/></Link>
        <Link to="/import/Plastic and Plastic ArticlesIron and Steel">  <ExportImportCard title=" Plastic and Plastic Articles"/></Link>
        <Link to="/import/Iron and Steel">  <ExportImportCard title="Iron and Steel"/></Link>
        <Link to="/import/Edible Oils">  <ExportImportCard title=" Edible Oils"/></Link>
        <Link to="/import/Fertilizers">  <ExportImportCard title=" Fertilizers"/></Link>
        <Link to="/import/Pharmaceutical Products (Active Ingredients)">  <ExportImportCard title="Pharmaceutical Products (Active Ingredients)"/></Link>
        <Link to="/import/Pearls, Precious and Semi-Precious Stones">  <ExportImportCard title=" Pearls, Precious and Semi-Precious Stones"/></Link>


        </div>
      </div>
    </>
  )
}