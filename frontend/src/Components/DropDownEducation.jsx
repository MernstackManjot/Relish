
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const DropDownEducation = () => {
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
                <h1 className="text-xl font-bold mr-2">Education</h1>
                <div className={`ml- mr- transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </div>
            {isOpen && (
                <ul className="mt-2 list-none fixed bg-white z-10 border border-gray-300 rounded-md shadow-lg w-64"
                onClick={MobileLiClosed}>
                     <Link to="/digitalMarketing">
                        <li className="py-1 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">Education Consultancy</li>
                    </Link>
                    <Link to="/exportImport">
                        <li className="py-1 px-4 hover:bg-green-100 cursor-pointer transition-colors duration-300">IELTS</li>
                    </Link>
                  
                   
                </ul>
            )}
        </div>
    );
};
