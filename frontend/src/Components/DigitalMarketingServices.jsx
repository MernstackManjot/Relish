import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card } from './Cards'
import { FaArrowLeft } from 'react-icons/fa';
import { DigitalCard } from './CardDigital';

export const DigitalMarketingServices = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    };
      
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-green-50 font-serif min-h-screen">
            <div className="flex flex-col sm:flex-row justify-center items-center mb-8 space-y-4 sm:space-y-0">
                <div onClick={handleBack} className="bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center md:mb-20">
                    <FaArrowLeft className="text-2xl " />
                </div>
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-green-800">
                        Digital Marketing
                    </h1>
                    <p className='text- sm:text-base md:text-lg lg:text-xl text-black mx-auto '>
                        At Relish Consultancy & Marketing, we offer a comprehensive suite of digital marketing services
                        designed to elevate your business in the digital world. Our approach is data-driven, innovative, and
                        tailored to your unique business needs. Whether you are a startup looking to establish an online
                        presence or an established business aiming to scale, we have the right solutions for you.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
                <Link to="/digitalMarketing/web">                <DigitalCard title="Web Development" /></Link>
                <Link to="/digitalMarketing/GraphicDesign">      <DigitalCard title="Graphic Design" /></Link>
                <Link to="/digitalMarketing/SearchEngine">       <DigitalCard title="Search Engine Optimization " /></Link>
                <Link to="/digitalMarketing/SocialMedia">        <DigitalCard title="Social Media Marketing " /></Link>
                <Link to="/digitalMarketing/PayPerClick">        <DigitalCard title="Pay-Per-Click Advertising " /></Link>
                <Link to="/digitalMarketing/ContentMarketing">   <DigitalCard title="Content Marketing" /></Link>
                <Link to="/digitalMarketing/EmailMarketing">     <DigitalCard title="Email Marketing" /></Link>
                <Link to="/digitalMarketing/ConversionRate">     <DigitalCard title="Conversion Rate Optimization " /></Link>
                <Link to="/digitalMarketing/AnalyticsReporting"> <DigitalCard title="Analytics & Reporting" /></Link>
            </div>
        </div>
    )
}
