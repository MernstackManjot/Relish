import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";

export const About = () => {
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
                <h1 className=" font-medium mr-">About Us</h1>
                {isOpen ? (
                    <IoMdArrowDropup className=" text-md  " />
                ) : (
                    <IoMdArrowDropdown className=" text-md " />
                )}
            </div>
            {isOpen && (
                <ul className="mt-2 list-none font-medium fixed bg-white z-10 border border-gray-300 rounded-md shadow-lg "
                onClick={MobileLiClosed}>
                    <Link to="/about">
                        <li className="py-2 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">About Us</li>
                    </Link>
                    <Link to="/about">
                        <li className="py-2 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Our Team</li>
                    </Link>
                </ul>
            )}
        </div>
    );
};
