import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const AnalyticsReporting = () => {

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
        <img
          src="photoau.jpg"
          alt="Background"
          className="w-full h-ful"
        />

        <div className="justify-center absolute inset-0 flex items-center bg-black bg-opacity-0 text-white text-center p-4">
          <h1 className="text-2xl md:text-5xl font-bold mb-"> Loans</h1>
        </div>
      </div>
<div className="bg-gradient-to-r from-yellow-50 to-red-50 text-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 font-serif min-h-screen">
      <div className="relative">
        <div
          onClick={handleBack}
          className="fixed top-4 left-4 sm:left-6 md:left-8 bg-red-700 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
        >
          <FaArrowLeft className="text-2xl" />
        </div>
        <div className="max-w-4xl mx-auto ">
                        <div>
                            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-red-700 text-center ml-5"> Analytics & Reporting</h1>
                            <p className="text-base sm:text-lg">
                                At Ashcon's Uniser's Consultancy & Marketing, we believe in making data-driven decisions. We provide detailed
                                analytics and reporting to track the performance of all digital marketing efforts. This helps us
                                understand what’s working and where adjustments are needed.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-red-700 mt-10">Our Analytics Services Include:
                            </h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>Google Analytics Setup:</span>   
                                Setting up and tracking key performance indicators (KPIs).</li>
                                <li> <span className='text-black font-bold'> Custom Reports:</span> 
                                Providing you with regular insights into your campaign performance.   </li>
                                <li><span className='text-black font-bold'>Continuous Optimization:</span>   
                                 Using data to fine-tune ongoing marketing strategies.</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
