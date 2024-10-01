
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const PayPerClick = () => {

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
                            <h1 className="text-2xl ml-8 sm:text-2xl md:text-3xl font-bold mb-4 text-green-800 text-center"> Pay-Per-Click Advertising (PPC)
                            </h1>
                            <p className="text-base sm:text-lg">
                                Our PPC services help you get immediate results by placing your business at the top of search engine
                                results and social media feeds through paid advertising. We ensure that every dollar spent on ads
                                delivers the highest ROI.
                            </p>
                        </div>



                        <div>
                            <h2 className="text-xl font-semibold mt-10 mb-2 text-green-800">Our PPC Services Include:</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>Google Ads:</span>   Targeted campaigns on the Google Search Network, Google Display Network,
                                    and YouTube.
                                </li>
                                <li> <span className='text-black font-bold'> Social Media Ads:</span>  Facebook, Instagram, and LinkedIn advertising.
                                </li>
                                <li><span className='text-black font-bold'>Retargeting Ads:</span>    Re-engaging previous website visitors to increase conversion rates.</li>
                                <li> <span className='text-black font-bold'>A/B Testing:</span>   Continuously optimizing ad campaigns to improve performance and reduce
                                    cost-per-click.</li>
                                <li><span className='text-black font-bold'>SEO-Friendly Websites:</span>  Creating websites optimized for search engines, ensuring that your
                                    business ranks higher and attracts organic traffic.</li>
                                <li><span className='text-black font-bold'>Website Maintenance & Support:</span>  Offering ongoing website updates, troubleshooting, and
                                    technical support to ensure your site functions optimally at all times.</li>
                                <li><span className='text-black font-bold'>Web Performance Optimization:</span>  Speed optimization to enhance user experience, reduce
                                    bounce rates, and improve SEO rankings.</li>

                            </ul>
                        </div>


                    </div>
                </div>



            </div>
        </>
    )
}
