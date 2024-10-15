// import React, { useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { Card } from './Cards'
// import { FaArrowLeft } from 'react-icons/fa';
// import { DigitalCard } from './CardDigital';

// export const DigitalMarketingServices = () => {
//     const navigate = useNavigate()

//     const handleBack = () => {
//         navigate(-1)
//     };
      
//     useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);

//     return (
//         <div className="p-4 sm:p-6 md:p-8 lg:p-10 ">
//             <div className="flex flex-col sm:flex-row justify-center items-center mb-8 space-y-4 sm:space-y-0">
//                 {/* <div onClick={handleBack} className="bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center md:mb-20">
//                     <FaArrowLeft className="text-2xl " />
//                 </div> */}
//                 <div className="text-center">
//                     <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-green-800">
//                         Digital Marketing
//                     </h1>
//                     <p className='text- sm:text-base md:text-lg lg:text-xl text-black mx-auto '>
//                         At Relish Consultancy & Marketing, we offer a comprehensive suite of digital marketing services
//                         designed to elevate your business in the digital world. Our approach is data-driven, innovative, and
//                         tailored to your unique business needs. Whether you are a startup looking to establish an online
//                         presence or an established business aiming to scale, we have the right solutions for you.
//                     </p>
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
//                 <Link to="/digitalMarketing/web">                <DigitalCard title="Web Development" /></Link>
//                 <Link to="/digitalMarketing/GraphicDesign">      <DigitalCard title="Graphic Design" /></Link>
//                 <Link to="/digitalMarketing/SearchEngine">       <DigitalCard title="Search Engine Optimization " /></Link>
//                 <Link to="/digitalMarketing/SocialMedia">        <DigitalCard title="Social Media Marketing " /></Link>
//                 <Link to="/digitalMarketing/PayPerClick">        <DigitalCard title="Pay-Per-Click Advertising " /></Link>
//                 <Link to="/digitalMarketing/ContentMarketing">   <DigitalCard title="Content Marketing" /></Link>
//                 <Link to="/digitalMarketing/EmailMarketing">     <DigitalCard title="Email Marketing" /></Link>
//                 <Link to="/digitalMarketing/ConversionRate">     <DigitalCard title="Conversion Rate Optimization " /></Link>
//                 <Link to="/digitalMarketing/AnalyticsReporting"> <DigitalCard title="Analytics & Reporting" /></Link>
//             </div>
//         </div>
//     )
// }
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import { DigitalCard } from './CardDigital';
import '../CSS/BottomtoTop.css'

export const DigitalMarketingServices = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    };
      
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
          setIsVisible(true);
      }, []);

      const cardRefs = useRef([]);
      const [visibleCards, setVisibleCards] = useState(Array(15).fill(false));
    
      const refhandleScroll = () => {
          cardRefs.current.forEach((ref, index) => {
              if (ref) {
                  const rect = ref.getBoundingClientRect();
                  if (rect.top < window.innerHeight && rect.bottom >= 0) {
                      setVisibleCards((prev) => {
                          const updated = [...prev];
                          updated[index] = true; 
                          return updated;
                      });
                  }
              }
          });
      };
    
      useEffect(() => {
          window.addEventListener('scroll', refhandleScroll);
          return () => {
              window.removeEventListener('scroll', refhandleScroll);
          };
      }, []);
      
    return (
        <>
      
    
        <div className="p-4 sm:p-6 md:p-8 lg:p-5  font-serif ">
            <div className="flex flex-col sm:flex-row justify-center items-center mb-8 space-y-4 sm:space-y-0">
                {/* <div onClick={handleBack} className="bg-red-700 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center md:mb-20">
                    <FaArrowLeft className="text-2xl " />
                </div> */}
                <div className="text-center">
                  <div className={`${isVisible ? 'animate-slide' : ''}`}>
                    
                    <div className='md:flex items-center justify-around gap-14 space-y-6 '>

                    <div className="text-center">
                    <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-green-800">
                         Digital Marketing
                     </h1>
                     <p className='text- sm:text-base md:text-lg lg:text-xl text-black mx-auto '>
                         At Relish Consultancy & Marketing, we offer a comprehensive suite of digital marketing services
                         designed to elevate your business in the digital world. Our approach is data-driven, innovative, and
                         tailored to your unique business needs. Whether you are a startup looking to establish an online
                         presence or an established business aiming to scale, we have the right solutions for you.
                     </p>
                 </div>
                    {/* <div className=' md:mr-20 ml-5'>
    <img 
      src='https://img.freepik.com/premium-vector/boost-your-online-business-growth-creative-digital-marketing-strategies-success_1300528-16079.jpg?uid=R166271515&ga=GA1.1.830621292.1707550020&semt=ais_hybrid' 
      alt='Financial Consultancy' 
      className='rounded-lg shadow-lg max-w-xs ' 
    />
  </div> */}
              </div>      </div>
                </div>
            </div>
            <div className={`${isVisible ? 'animate-slide' : ''}`}>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-10">
                <Link ref={(el) => (cardRefs.current[1] = el)} className={` ${visibleCards[1] ? 'animate-slide' : ''}`} to="/digitalMarketing/web">                <DigitalCard title="Web Development" /></Link>
                <Link ref={(el) => (cardRefs.current[1] = el)} className={` ${visibleCards[1] ? 'animate-slide' : ''}`} to="/digitalMarketing/GraphicDesign">      <DigitalCard title="Graphic Design" /></Link>
                <Link ref={(el) => (cardRefs.current[1] = el)} className={` ${visibleCards[1] ? 'animate-slide' : ''}`} to="/digitalMarketing/SearchEngine">       <DigitalCard title="Search Engine Optimization " /></Link>
                <Link ref={(el) => (cardRefs.current[1] = el)} className={` ${visibleCards[1] ? 'animate-slide' : ''}`} to="/digitalMarketing/SocialMedia">        <DigitalCard title="Social Media Marketing " /></Link>
                <Link ref={(el) => (cardRefs.current[1] = el)} className={` ${visibleCards[1] ? 'animate-slide' : ''}`} to="/digitalMarketing/PayPerClick">        <DigitalCard title="Pay-Per-Click Advertising " /></Link>
                <Link ref={(el) => (cardRefs.current[1] = el)} className={` ${visibleCards[1] ? 'animate-slide' : ''}`} to="/digitalMarketing/ContentMarketing">   <DigitalCard title="Content Marketing" /></Link>
                {/* <Link to="/digitalMarketing/EmailMarketing">     <DigitalCard title="Email Marketing" /></Link>
                <Link to="/digitalMarketing/ConversionRate">     <DigitalCard title="Conversion Rate Optimization " /></Link>
                <Link to="/digitalMarketing/AnalyticsReporting"> <DigitalCard title="Analytics & Reporting" /></Link> */}
                <Link ref={(el) => (cardRefs.current[1] = el)} className={` ${visibleCards[1] ? 'animate-slide' : ''}`} to="/digitalMarketing/WebAnalyticsService"> <DigitalCard title="Web Analytics Service" /></Link>
                <Link ref={(el) => (cardRefs.current[1] = el)} className={` ${visibleCards[1] ? 'animate-slide' : ''}`} to="/digitalMarketing/SentimentAnalysis"> <DigitalCard title="Sentiment Analysis" /></Link>

                <Link ref={(el) => (cardRefs.current[1] = el)} className={` ${visibleCards[1] ? 'animate-slide' : ''}`} to="/digitalMarketing/OnlineReputationManagement"> <DigitalCard title="Online Reputation Management" /></Link>
                <Link ref={(el) => (cardRefs.current[1] = el)} className={` ${visibleCards[1] ? 'animate-slide' : ''}`} to="/digitalMarketing/VernacularMultilingualMarketing"> <DigitalCard title=" Vernacular Multilingual Marketing" /></Link>
            </div>
        </div>
     </div>
        </>
    )
}
