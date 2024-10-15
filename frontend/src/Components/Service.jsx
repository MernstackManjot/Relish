import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";

export const Service = () => {
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
        // Add event listeners
        document.addEventListener('mousedown', handleOutsideClick);
        window.addEventListener('scroll', handleScroll);

        // Clean up event listeners
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
                <h1 className="text-xl font-bold mr-2">Service</h1>
                {isOpen ? (
                    <IoMdArrowDropup className="text-green-900 text-md  " />
                ) : (
                    <IoMdArrowDropdown className="text-green-900 text-md" />
                )}
            </div>
            {isOpen && (
                <ul className="mt-2 list-none fixed bg-white z-10 border border-gray-300 rounded-md shadow-lg w-68"
                onClick={MobileLiClosed}>
                     <Link to="/digitalMarketing">
                        <li className="py-2 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Digital Marketing</li>
                    </Link>
                    <Link to="/exportImport">
                        <li className="py-2 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Export-Import</li>
                    </Link>
                    <Link to="/Education/Education Consultancy">
                        <li className="py-2 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Education Consultancy</li>
                    </Link>
                    <Link to="/Education/IELTS">
                        <li className="py-2 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">IELTS</li>
                    </Link>
                </ul>
            )}
        </div>
    );
};
