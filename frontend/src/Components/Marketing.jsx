import React from 'react'
import { Card } from './Cards'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';

export const Marketing = () => {
    const navigate = useNavigate()

    const location = useLocation()
    const handleBack = () => {
        if (location.state?.from) {
          navigate(location.state.from);
        } else {
          navigate('/');
        }
      };
      
  return (
 <>
 <div className="p-4 sm:p-6 md:p-8 bg-green-50 font-serif min-h-screen">
 <div className="flex items-center mb-8">
        
        <div onClick={handleBack} className="bg-green-800 h-10 text-gray-100 p-2 rounded-full cursor-pointer">
          <FaArrowLeft className="text-2xl" />
        </div>
   
        <h1 className="text-3xl font-bold mb-8 text-green-800 flex-1 text-center">
          Marketing
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
      <Link to="/digitalMarketing" ><Card  title="Digital Marketing" /></Link> 
      <Link to=""> <Card title="Off Line Marketing" /></Link> 
      </div>
    </div>
 </>
  )
}
