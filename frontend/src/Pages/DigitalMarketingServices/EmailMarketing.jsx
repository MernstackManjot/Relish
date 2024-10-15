
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const EmailMarketing = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    };

    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>

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
                            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-red-700 text-center"> Email Marketing</h1>
                            <p className="text-base sm:text-lg">
                                Email marketing is one of the most cost-effective ways to nurture leads and convert them into
                                customers. We design personalized email campaigns that resonate with your audience and
                                encourage them to take action.
                            </p>
                        </div>



                        <div>
                            <h2 className="text-xl mt-10 font-semibold mb-2 text-red-700">Our Email Marketing Services Include:
                            </h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>Email Campaign Strategy:</span>   Identifying the right audience and crafting compelling messages.</li>
                                <li> <span className='text-black font-bold'> Newsletter Creation:</span>  Developing informative and engaging newsletters.

                                </li>
                                <li><span className='text-black font-bold'> Automation: </span>  Setting up automated email sequences based on user behavior.</li>
                                <li> <span className='text-black font-bold'>Performance Tracking:</span>  Monitoring open rates, click-through rates, and conversions to
                                    optimize campaigns.
                                </li>


                            </ul>
                        </div>


                    </div>
                </div>



            </div>
        </>
    )
}
