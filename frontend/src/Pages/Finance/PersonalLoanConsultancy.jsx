

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const StandupLoan = () => {

  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

      <div className="bg-green-50 text-gray-800 p-6 sm:p-8 md:p-10 lg:p-7 font-serif min-h-screen">
        <div className='flex justify-center '>
          <div onClick={handleBack} className="fixed top-4 left-24 bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center">
            <FaArrowLeft className="text-2xl" />
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4 text-green-800">Standup Loan </h1>

            </div>    <div>

              <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                <li> Helping individuals find the right loan based on their financial status.
                </li>
                <li>  Detailed analysis of available loan options from various financial institutions. </li>
                <li>  Guidance on credit score improvement and eligibility criteria.</li>
              </ul>

            </div>


          </div>
        </div>



      </div>
    </>
  )
}
