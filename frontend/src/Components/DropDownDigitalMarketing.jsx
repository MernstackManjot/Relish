
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";

export const DropDownDigitalMarketing = () => {
    const [isOpen, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClick = () => {
        setOpen(!isOpen);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    const handleScroll = () => {
        setOpen(false);
    };
const MobileLiClosed =()=>{
    setOpen(false)
}
    useEffect(() => {
      
        document.addEventListener('mousedown', handleOutsideClick);
        window.addEventListener('scroll', handleScroll);


        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div 
                className="flex items-center cursor-pointer "
                onClick={handleClick}
            >
                <h1 className=" font-medium mr-">Digital Marketing</h1>
                {isOpen ? (
                    <IoMdArrowDropup className=" text-md  " />
                ) : (
                    <IoMdArrowDropdown className=" text-md" />
                )}
            </div>
            {isOpen && (
                <ul className="mt-2 list-none  font-medium fixed bg-white z-10 border border-gray-300 rounded-md shadow-lg "
                onClick={MobileLiClosed}>
                     <Link to="/digitalMarketing/Web">
                        <li className="py-1 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Web Development</li>
                    </Link>
                    <Link to="/digitalMarketing/GraphicDesign">
                        <li className="py-1 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Graphic Design</li>
                    </Link>
                     <Link to="/digitalMarketing/SearchEngine">
                        <li className="py-1 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Search Engine Optimization</li>
                    </Link>
                    <Link to="/digitalMarketing/SocialMedia">
                        <li className="py-1 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Social Media Marketing </li>
                    </Link>
                    <Link to="/digitalMarketing/PayPerClick">
                        <li className="py-1 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Pay-Per-Click Advertising</li>
                    </Link>
                    <Link to="/digitalMarketing/ContentMarketing">
                        <li className="py-1 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Content Marketing</li>
                    </Link>
                    <Link to="/digitalMarketing/WebAnalyticsService">
                        <li className="py-1 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Web Analytics Service</li>
                    </Link>
                    <Link to="/digitalMarketing/OnlineReputationManagement">
                        <li className="py-1 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Online Reputation Management</li>
                    </Link>
                    <Link to="/digitalMarketing/VernacularMultilingualMarketing">
                        <li className="py-1 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Vernacular Multilingual Marketing</li>
                    </Link>
                    <Link to="/digitalMarketing/SentimentAnalysis">
                        <li className="py-1 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Sentiment Analysis</li>
                    </Link>
                   
                </ul>
            )}
        </div>
    );
};
