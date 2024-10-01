import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const WebDevelopment = () => {

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
                            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-800 text-center"> Web Development</h1>
                            <p className="text-base sm:text-lg">
                                A well-designed, fast, and user-friendly website is the foundation of any successful online business.
                                At <span className='text-black font-bold'>Relish Consultancy & Marketing</span>, we build websites that not only look great but also provide an
                                optimal user experience and drive conversions. Our web development services are customized to
                                meet your business goals, whether you need a corporate site, an e-commerce platform, or a
                                portfolio.
                            </p>
                        </div>



                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-green-800 mt-10">Our Web Development Services Include:</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>Custom Website Design & Development:</span> Tailored website solutions that reflect your brand
                                    identity and meet your specific business needs</li>
                                <li> <span className='text-black font-bold'>Responsive Design:</span>  Ensuring that your website is fully optimized for mobile, tablet, and
                                    desktop users for a seamless experience across all devices.
                                </li>
                                <li><span className='text-black font-bold'>E-commerce Solutions:</span>  Developing online stores with user-friendly navigation, secure
                                    payment systems, and inventory management features to help you sell products effectively.</li>
                                <li> <span className='text-black font-bold'> Content Management Systems (CMS):</span> Implementing user-friendly platforms like WordPress,
                                    Shopify, and Magento, enabling easy management of your website content without requiring
                                    technical knowledge.</li>
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
