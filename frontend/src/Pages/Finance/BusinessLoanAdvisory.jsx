

import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const BusinessLoanAdvisory = () => {

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
      <div className="relative">
        <div
          onClick={handleBack}
          className="fixed top-4 md:left-40 bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center z-20"
        >
          <FaArrowLeft className="text-2xl" />
        </div>

        <div className="max-w-4xl mx-auto ">
          <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-green-800 text-center ml-10">Business Loan Advisory</h1>

           

              <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                <li> Tailored loan options for startups, small businesses, and enterprises. </li>
                <li> Assistance in preparing loan applications and required documentation </li>
                <li> Expert advice on interest rates, loan terms, and repayment plans.</li>
              </ul>

          


          </div>
        </div>



      </div>
    </>
  )
}
