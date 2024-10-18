import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CardWebDevelopment } from '../../Components/CardWebDevelopment';
import relishvideo from "./images/relishvideo9.mp4"


export const WebDevelopment = () => {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(false);
    const cardRef = useRef(null);


    useEffect(() => {
        window.scrollTo(0, 0);
        setIsTextVisible(true);
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsCardVisible(true);
                    observer.disconnect(); 
                }
            },
            { threshold: 1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
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
                    <h1 className={`text-2xl md:text-4xl font-bold mb- `}  >Web Development</h1>
                </div>
            </div>

            <div className={` p-6 sm:p-8 md:p-10 lg:p-12  ${isTextVisible ? 'animate-slide' : ''}`}>
                <div className="relative">
                    <div
                        onClick={handleBack}
                        className="fixed left-1  bg-green-700 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
                    >
                        <FaArrowLeft className="text-2xl" />
                    </div>
            </div>

                    {/* <h1 className={`text-3xl lg:text-4xl md:text-4xl  text-green-700 font-bold text-center mb- ${isTextVisible ? 'animate-slide' : ''}`}>
                 
                    </h1> */}
                    <div className="md:flex justify-center items-center gap-10 p-10">
                        <div>
                            <p className="text-base sm:text-lg">
                                A well-designed, fast, and user-friendly website is the cornerstone of any thriving online business. At Relish Consultancy & Marketing, we create websites that are not only visually stunning but also deliver an exceptional user experience and boost conversions. Our web development services are tailored to align with your business objectives, whether you need a corporate site, an e-commerce platform, or a professional portfolio.
                            </p>
                        </div>
                        <div>
                            <img
                                src='https://peerdemo.in/relish/wp-content/uploads/2024/10/Web-Development2-1536x1525.png'
                                alt='Web Development'
                                className='rounded-lg md:max-w-xs'
                            />
                        </div>
                    </div>
                </div>

            <div ref={cardRef} className={`${isCardVisible ? 'animate-slide' : ''}`}>
                <CardWebDevelopment />
            </div>
        </>
    );
};

