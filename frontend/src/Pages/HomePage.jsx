import React, { useEffect } from 'react';

import { HomeCard } from '../Components/HomePageCard';
import { HomeMorePage } from '../Components/HomeMorePage';
import { ChooseUs } from '../Components/ChooseUs';


export const HomePage = () => {
    
 
   
    return (
        <>
        <div>
            <div className=" flex flex-col md:flex-row justify-around items-center bg-green-50 bg-opacity-60 text-green-800 text-center p-4 sm:p-6 md:p-8 font-serif ">
                <div className="text-center px-4 py-10 ">
                    <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-bold mb-2 sm:mb-4">
                        Relish Consultancy & Marketing
                    </h1>
                    <p className="text-xs sm:text-xl md:text-base lg:text-lg text-black  max-w-lg mx-auto">
                       We are well-established Consultancy & Marketing Company in India. Relish Consultancy & Marketing is headquartered in Mohali Punjab.
                        {/* Its respresentatives are present in mainly cities of India like Delhi,Mumbai,Bangalore,Gujarat,Haryana,Rajasthan and Kolkata etc. */}
                    </p>
                </div>

                <div className="flex-shrink-0 mt-4 md:mt-0">
                    <img
                        src='https://img.freepik.com/free-photo/business-partners-discussing-project-laptop_9975-22141.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722902400&semt=ais_hybrid'
                        alt='Business Partners'
                        className='w-full max-w-xs md:max-w-lg rounded-lg shadow-md'
                    />
                </div>
            </div>

            <div >
                <HomeCard />
            </div>
            
            <div>
                <HomeMorePage />
            </div>
            <div>
                <ChooseUs />
            </div>
            </div>
        </>
    );
};
