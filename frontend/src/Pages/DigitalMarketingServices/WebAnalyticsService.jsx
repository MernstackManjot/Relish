
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { SiTicktick } from "react-icons/si";

export const WebAnalyticsService = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    };



      const [isTextVisible, setIsTextVisible] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
        setIsTextVisible(true);
    }, []);
    return (
        <>
            

<div className={`${isTextVisible ? 'animate-slide' : ''}`}>
            <div className=" text-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 font-serif ">
                <div className="relative">
                    <div
                        onClick={handleBack}
                        className="fixed top- left-1 sm:left-2 md:left-2 bg-green-700 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
                    >
                        <FaArrowLeft className="text-2xl" />
                    </div>
                    <h1 className={`text-2xl md:text-5xl text-green-700 text-center font-bold mb- ${isTextVisible ? 'animate-slide' : ''}`}> Web Analytics Service</h1>
                    <div className="md:flex justify-center items-center gap-10 p-10 ">
                        <div>
                            <h1 className="text-lg sm:text-2xl md:text-xl font-bold mb- text-green-700 mb-2">Monitor Your Audience <span className='text-green-800'>for Higher Conversions </span> </h1>
                            <p className="text-base sm:text-lg">
                            Web analytics is one of the most powerful tools in internet marketing. By analyzing web analytics data, marketers can gain insights into not only the amount of traffic their sites receive, but also how that traffic arrives and what users are doing once they’re on the site. This information allows marketers to refine and enhance their marketing strategies and optimize their websites.
                            </p>
                        </div>
                        <div>
                        <img 
      src='https://peerdemo.in/relish/wp-content/uploads/2024/10/web-analize-1536x963.png' 
      alt='Financial Consultancy' 
      className='rounded-lg  md:max-w-xl' 
    />
                        </div>

</div>
 

                       


                    </div>
  
                </div>


                <div className='bg-gray-100 p-20 md:flex justify-between'>
                    <div>
    <h1 className='text-green-800 text-2xl sm:text-2xl md:text-4xl font-bold mb-5'>Analytics Service</h1>
    <ul className='text-lg space-y-2'>
        <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Google Analytics Consulting service</li>
        <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Google Analytics Tagging Tool</li>
        <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Website Usability</li>

        <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Integrated Reporting service</li>
        <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Conversion Optimization</li>
        <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Tag Management</li>
        <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Omniture analytics service</li>


    </ul>
    </div>
    <div>
    <img 
      src='https://peerdemo.in/relish/wp-content/uploads/2024/10/webanalyst_3.png' 
      alt='Financial Consultancy' 
      className='rounded-lg  md:max-w-lg' 
    />
    </div>
 </div>
 </div>
           
        </>
    )
}
