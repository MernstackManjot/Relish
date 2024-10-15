
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { SiTicktick } from "react-icons/si";
import { CardOnlineReputationManagement } from '../../Components/CardOnlineReputationManagement';

export const OnlineReputationManagement = () => {

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
        

            <div  className={`${isTextVisible ? 'animate-slide' : ''}`}>

<div className=" text-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 font-serif ">
      <div className="relative">
        <div
          onClick={handleBack}
          className="fixed  left-1 sm:left-2 md:left-2 bg-green-700 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
        >
          <FaArrowLeft className="text-2xl" />
        </div>
        <h1 className={`text-2xl md:text-5xl text-green-700 text-center font-bold mb- ${isTextVisible ? 'animate-slide' : ''}`}>Online Reputation Management</h1>
          <div className='md:flex justify-evenly gap-2 md:gap-20 items-center p-10'>
                        <div>
                            
                            <p className='max-w-xl space-y-3 text-lg font-'>
                            Online Reputation Management (ORM) is a vital component of digital marketing. It involves overseeing how customers perceive you and your business in the digital realm. Many individuals base their impressions of a company or its products on Google search results and social media feedback. With ORM services in India, positive reviews are highlighted while negative or irrelevant feedback is minimized, ultimately enhancing your overall image.
            </p>
                        </div>
                        <div>
                            <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/V-1536x1067.png' className='rounded-lg  md:max-w-xs ' />
                        </div>
                    </div>
                </div>
            </div>
        
            <div className='md:flex justify-center items-center p-16 bg-green-50 gap-40'>
            <div>
                    <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/IMAGE5-1024x1018.png' className='rounded-lg md:max-w-xs mb-6' />
                </div>
                <div>
                    <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-800 gap-3">Software tools <span className='text-green-900'> we use</span>
                    </h1>
                      <ul className='text-lg space-y-2'>
                                    <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Talkwalker</li>
                                    <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Social mention</li>
                                    <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Review trackers</li>

                                    <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Trackur</li>
                                    <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Google Alerts.</li>
                                    <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />SocialMention</li>
                                </ul>
                </div>
                
            </div>

            <div>
                <CardOnlineReputationManagement />
                </div>
                </div>
        </>
    )
}
