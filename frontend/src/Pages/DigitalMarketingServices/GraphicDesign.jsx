import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CardGraphicDesign } from '../../Components/CardGraphicDesign';

import relishvideo from "./images/relishvideo9.mp4"


export const GraphicDesign = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    <h1 className={`text-2xl md:text-4xl font-bold mb- `}>Graphic Design   </h1>
                </div>
            </div>


            <div className={` p-6 sm:p-8 md:p-10 lg:p-12  ${isTextVisible ? 'animate-slide' : ''}`}>
                <div className="relative">
                    <div
                        onClick={handleBack}
                        className="fixed  left-1 sm:left-2 md:left-2 bg-green-700 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
                    >
                        <FaArrowLeft className="text-2xl" />
                    </div>
                    {/* <h1 className={`text-3xl  text-green-700 text-center md:text-5xl font-bold mb- ${isTextVisible ? 'animate-slide' : ''}`}></h1> */}

                    <div className='md:flex justify-evenly gap-2 md:gap-20 items-center p-10'>
                        <div>

                            <p className='max-w-xl space-y-3 text-lg font-'>
                                Great design speaks volumes about your brand, and at Relish Consultancy & Marketing, we specialize in crafting visually compelling graphics that capture the essence of your business. Our graphic design services are integrated into all aspects of your digital marketing strategy, ensuring consistency across your brand’s online presence.
                            </p>
                        </div>
                        <div>
                            <img src='https://peerdemo.in/relish/wp-content/uploads/2024/10/Web-Development2-1536x1525.png' className='rounded-lg  md:max-w-xs ' />
                        </div>
                    </div>
                </div>
            </div>
            <div ref={cardRef} className={`${isCardVisible ? 'animate-slide' : ''}`}>
                <CardGraphicDesign />
            </div>
        </>
    )
}
