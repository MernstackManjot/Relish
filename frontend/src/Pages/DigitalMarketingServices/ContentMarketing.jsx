
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const ContentMarketing = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    };

    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>

<div className="bg-green-50 text-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 font-serif min-h-screen">
      <div className="relative">
        <div
          onClick={handleBack}
          className="fixed top-4 left-4 sm:left-6 md:left-8 bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
        >
          <FaArrowLeft className="text-2xl" />
        </div>
        <div className="max-w-4xl mx-auto ">
                        <div>
                            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-800 text-center">  Content Marketing
                            </h1>
                            <p className="text-base sm:text-lg">
                                Our content marketing strategies are aimed at attracting, engaging, and converting potential
                                customers by delivering high-quality, valuable content. From blog posts to videos and infographics,
                                we create content that positions your brand as an industry leader.
                            </p>
                        </div>



                        <div>
                            <h2 className="text-xl mt-10 font-semibold mb-2 text-green-800">Our Content Marketing Services Include:</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>Blog Writing:</span>   Crafting SEO-optimized blogs that provide valuable insights and information to
                                    your target audience.</li>
                                <li> <span className='text-black font-bold'>Infographics & Ebooks:</span>   Developing visually engaging and informative content.
                                </li>
                                <li><span className='text-black font-bold'>Video Marketing:</span>   Producing videos that convey your brand’s message effectively.</li>
                                <li> <span className='text-black font-bold'>Content Distribution:</span>  Promoting your content across multiple platforms to ensure maximum
                                    reach.
                                    .</li>


                            </ul>
                        </div>


                    </div>
                </div>



            </div>
        </>
    )
}
