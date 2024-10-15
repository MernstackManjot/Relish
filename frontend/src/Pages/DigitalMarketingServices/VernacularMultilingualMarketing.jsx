
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { CardVernacularMultilingualMarketing } from '../../Components/CardVernacularMultilingualMarketing';


export const VernacularMultilingualMarketing = () => {

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
                        className="fixed  left-1  bg-green-700 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
                    >
                        <FaArrowLeft className="text-2xl" />
                    </div>
                    <h1 className={`text-2xl md:text-5xl text-green-700 ml-10 text-center font-bold mb- ${isTextVisible ? 'animate-slide' : ''}`}>Vernacular Multilingual Marketing</h1>
                    <div className='md:flex justify-evenly gap-2 md:gap-20 items-center p-10'>
                        <div>

                            <p className='max-w-xl space-y-3 text-lg font-'>
                                <p>Digital marketing has transformed, allowing you to effortlessly build connections beyond your region or even country and sell your products or services globally. In this interconnected world, where expanding across borders is simpler than ever, why let language be a barrier to reaching your target audience?</p>
                                <p>If your business is based in India or anywhere else in the world, or if your audience spans different regions with diverse languages, it’s essential to tailor your message to suit their linguistic needs.</p>
                            </p>
                        </div>
                        <div>
                            <img src='https://peerdemo.in/relish/wp-content/uploads/2024/10/web-analize-1536x963.png' className='rounded-lg  md:max-w-xs ' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-10 bg-green-50'>
                <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold mb- text-green-700 text-center gap-3"> Best Multilingual <span className='text-green-900'> Marketing Company</span>
                </h1>
                <div className='md:flex justify-center items-center p- gap-40'>

                    <div>
                        <img src='https://peerdemo.in/relish/wp-content/uploads/2024/10/Multilingual-Marketing-1401x1536.png' className='rounded-lg md:max-w-72 mb-6' />
                    </div>
                    <div>

                        <p className='max-w-xl space-y- text-lg font-'>
                            <p >With years of expertise in digital marketing, relish is a leading provider of multilingual digital marketing services . Trusted by top brands and companies, we set industry benchmarks for speed, accuracy, and reliability.</p>
                            <p >We are more than just translators. Our multilingual marketing team comprises linguists, talented copywriters, researchers, technical writers, and marketing specialists who can produce a wide range of marketing content tailored to the specific regions you are targeting.</p>
                        </p>
                    </div>
                </div>
            </div>

           
            <div className='p-10 bg-gray-100'>
                <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold mb- text-green-700 text-center gap-3">We Think and Speak  <span className='text-green-900'> in Your Language</span>
                </h1>
                <div className='md:flex justify-center items-center p-10 gap-40'>

                    
                    <div>

                        <p className='max-w-xl space-y- text-lg font-'>
                            <p >Ashcon's is a multilingual marketing company delivering outstanding services across all industries. With our expertise and experience, we are uniquely positioned to drive your business toward nationwide or global success.</p>
                            <p >Whether you’re experienced in marketing to regional customers or launching your first campaign in a new region or overseas, Relish multilingual marketing services provide the tools you need to succeed.</p>
                        </p>
                    </div>
                    <div>
                        <img src='https://peerdemo.in/relish/wp-content/uploads/2024/10/web-analize-1536x963.png' className='rounded-lg md:max-w-md mb-6' />
                    </div>
                </div>
            </div>

            <div>
                <CardVernacularMultilingualMarketing />
                </div>
                </div>
        </>
    )
}
