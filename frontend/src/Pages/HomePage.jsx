import React, { useEffect } from 'react';

import { HomeCard } from '../Components/HomePageCard';
import { HomeMorePage } from '../Components/HomeMorePage';
import { ChooseUs } from '../Components/ChooseUs';
import { AboutHome } from '../Components/AboutHome';
import { Deliveringexcellence } from '../Components/Deliveringexcellence';
import { HomeChoose } from '../Components/HomeChoose';
import { Link } from 'react-router-dom';


export const HomePage = () => {
    
 
   
    return (
        <>
        {/* <div>
            <div className=" flex flex-col md:flex-row justify-around items-center bg-green-50 bg-opacity-60 text-green-800 text-center p-4 sm:p-6 md:p-8 font-serif ">
                <div className="text-center px-4 py-10 ">
                    <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-bold mb-2 sm:mb-4">
                        Relish Consultancy & Marketing
                    </h1>
                    <p className="text-xs sm:text-xl md:text-base lg:text-lg text-black  max-w-lg mx-auto">
                       We are well-established Consultancy & Marketing Company in India. Relish Consultancy & Marketing is headquartered in Mohali Punjab.
                    </p>
                </div>

                <div className="flex-shrink-0 mt-4 md:mt-0">
                    <img
                        src='https://img.freepik.com/free-photo/business-partners-discussing-project-laptop_9975-22141.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722902400&semt=ais_hybrid'
                        alt='Business Partners'
                        className='w-full max-w-xs md:max-w-lg rounded-lg shadow-md'
                    />
                </div>
            </div> */}

<div className="relative w-full h-[530px] md:h-[400px] lg:h-[530px] overflow-hidden font-thin">
                <video 
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="relishvideo8.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center bg-black bg-opacity-0 text-white text-center p-4">
                    <div className={`  `}>
                        <h1 className={` text-2xl md:text-4xl font-bold mb-4 md:ml-10 `} >Relish Consultancy & Marketing</h1>
                        <p  className={`text-sm md:text-lg max-w-lg mx-auto font-medium `} >
                            We are a well-established Consultancy & Marketing Company in India. Relish Consultancy & Marketing is headquartered in Mohali, Punjab.
                        </p>
                        <div className="flex justify-center items-center mt-3">
            <Link to="/contact">
                <div className="relative inline-block overflow-hidden group">
                    <button className="bg-white text-black font-medium py-3 px-8 rounded-lg transition duration-300 z-10">
                        Contact Us
                    </button>
                    <span className="absolute inset-0 bg-green-700 font-medium rounded-lg py-3 px-8 transform  scale-y-0 scale-x-0  transition-transform duration-300 origin-top-left group-hover:scale-x-100 group-hover:scale-y-100"> Contact Us</span>
                </div>
            </Link>
        </div>

                    </div>
                </div>
            </div>

<div>
    <AboutHome />
</div>
<div>
                <Deliveringexcellence />
            </div>
            <div >
                <HomeCard />
            </div>
         
            <div>
                <HomeMorePage />
            </div>
      
            {/* <div>
                <ChooseUs />
            </div> */}
            <div>
                <HomeChoose />
            </div>
       
        </>
    );
};
