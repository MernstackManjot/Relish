
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const SearchEngine = () => {

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
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-800 text-center ml-10"> Search Engine Optimization (SEO)
                            </h1>
                            <p className="text-base sm:text-lg">
                                Our SEO strategies are designed to improve your website’s visibility on search engines like Google,
                                Bing, and Yahoo. We conduct thorough keyword research, optimize your website’s content, and
                                implement technical SEO to ensure your site ranks higher, attracts more organic traffic, and converts
                                leads into customers
                            </p>
                        </div>



                        <div>
                            <h2 className="text-xl mt-10 font-semibold mb-2 text-green-800">Our SEO Services Include:</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>On-Page SEO:</span>   Content optimization, keyword integration, meta tags, and alt text
                                    improvement.</li>
                                <li> <span className='text-black font-bold'>Off-Page SEO: </span>  Link building, guest posting, and improving domain authority.

                                </li>
                                <li><span className='text-black font-bold'>Technical SEO:</span>  Technical SEO: Improving site speed, mobile responsiveness, XML sitemaps, and structured
                                    data.</li>
                                <li> <span className='text-black font-bold'> Local SEO:</span>   Ensuring your business ranks in local searches, optimizing Google My Business
                                    profiles</li>

                            </ul>
                        </div>


                    </div>
                </div>



            </div>
        </>
    )
}
