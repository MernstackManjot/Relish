import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
                <h1 className="text-xl font-bold mr-2">About Us</h1>
                {isOpen ? (
                    <FaChevronUp className="text-green-900 text-sm" />
                ) : (
                    <FaChevronDown className="text-green-900 text-sm" />
                )}
            </div>
            {isOpen && (
                <ul className="mt-2 list-none fixed bg-white z-10 border border-gray-300 rounded-md shadow-lg w-48"
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
