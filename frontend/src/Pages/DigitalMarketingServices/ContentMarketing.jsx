
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { SiTicktick } from "react-icons/si";
import relishvideo from "./images/relishvideo9.mp4"


export const ContentMarketing = () => {

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
            <div className='relative w-full h-[90px] md:h-[200px] lg:h-[180px] overflow-hidden font-thin'>
            <video 
        className="absolute inset-0 w-full h-full object-cover " 
        autoPlay
        loop
        muted
      >
        <source src="/relishvideo9.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

                <div className="justify-center absolute inset-0 flex items-center bg-black bg-opacity-0 text-white text-center p-4">
                    <h1 className={`text-2xl md:text-4xl font-bold mb- `}>Content Writing Agency   </h1>
                </div>
            </div>
            <div className={`${isTextVisible ? 'animate-slide' : ''}`}>

                <div className="  p-6 sm:p-8 md:p-10 lg:p-12  ">
                    <div className="relative">
                        <div
                            onClick={handleBack}
                            className="fixed top- left-1  bg-green-700 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
                        >
                            <FaArrowLeft className="text-2xl" />
                        </div>
                        {/* <h1 className={`text-2xl md:text-5xl text-green-700 ml-2 text-center font-bold mb- ${isTextVisible ? 'animate-slide' : ''}`}> </h1> */}
                        <div className='md:flex justify-between items-center p-10'>
                            <div>
                                <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3"> What is  <span className='text-green-900'> Content Marketing</span>
                                </h1>
                                <p className='max-w-xl space-y-3 text-lg font-'>
                                    <p >If you’re familiar with digital marketing, you’ve likely heard the term Content Marketing before. But if you’re still unsure about what it means, don’t worry—we’re here to guide you through it.</p>
                                    <p >Content Marketing is a strategic approach centered on creating and sharing valuable, relevant, and consistent content to engage and nurture your target audience effectively.</p>
                                    <p>A decade ago, marketing was costly and required significant physical effort. Thanks to digital marketing, we can now reach our target audience and promote products and services with just a click of a button.</p>
                                </p>
                            </div>
                            <div>
                                <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/Content-Marketing.png' className='rounded-lg  md:max-w-xl' />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='md:flex justify-evenly  items-center p-10 bg-green-100'>
                    <div>
                        <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/Content-Marketing2.png' className='rounded-lg  md:max-w-sm ' />
                    </div>
                    <div>
                        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3">Purpose of (SEM)<span className='text-green-900'> Content Marketing</span>
                        </h1>
                        <p className='max-w-xl space-y-3 text-lg font-'>
                            <p >The primary goal of content marketing is to deliver valuable content to your audience.</p>
                            <p >Whatever type of content you share with your audience, ensure it offers significant value. Offering valuable content for free has become a common strategy among marketers and influencers to attract traffic and convert leads into customers.</p>
                            <p>Identifying the right niche and target audience is crucial for creating content that is both valuable and relevant.</p>
                        </p>
                    </div>

                </div>



                <div className='md:flex justify-between p-16 bg-gray-100'>
                    <div>
                        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-800 gap-3"> Types of <span className='text-green-900'> Content Marketing</span>
                        </h1>
                        <p className='max-w-xl space-y-3 text-lg font-'>
                            <p >Content Marketing different types of content like pictures, videos, audios, documents, online resources, etc. Some of the many types of Content Marketing are:</p>
                            <ul className='text-lg space-y-2'>
                                <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Social Media Posts</li>
                                <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Blogs</li>
                                <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Videos</li>

                                <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Courses</li>
                                <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Webinars</li>
                                <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Podcasts</li>
                                <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Presentations</li>
                                <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Ebooks</li>
                                <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Audio Books</li>
                                <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Checklists</li>
                                <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Whitepapers</li>
                                <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />PDFs, etc.</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/Content-Marketing3-1536x1375.png' className='rounded-lg  md:max-w-xl' />
                    </div>
                </div>
            </div>
        </>
    )
}
