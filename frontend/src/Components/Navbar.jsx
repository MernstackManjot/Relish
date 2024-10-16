import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { About } from './About';
import { Service } from './Service';
import { DropDownDigitalMarketing } from './DropDownDigitalMarketing';
import { DropDownExportImport } from './DropDownExportImport';
import { DropDownEducation } from './DropDownEducation';


export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const MobileLiClosed = () => {
    setIsOpen(false)
  }

  const navdata = [
    { path: '/', name: 'Home' },
    { name: <About /> },
    // { name: <Service /> },
    {  name: <DropDownDigitalMarketing /> },
    { name: <DropDownExportImport /> },
    { name: <DropDownEducation /> },

    { path: '/contact', name: 'Contact' },


  ];

  const location = useLocation();
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);

   return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="   shadow-md  text-black font-medium ">
      <div className="flex items-center justify-between max-w-screen-xl mx-3 ">

        <div className="flex items-center p-2">
          <img
            src='logorelish.png'
            alt='Logo'
            className='h-16 md:h-28 w-auto '
          />
          {/* <h1 className='text-5xl '>Logo</h1> */}
        </div>


        <div className="hidden md:flex  mr-3">
          <ul className="flex flex-row space-x-10">


            {navdata.map((item) => (

              <li key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={` cursor-pointer text-lg ${location.pathname === item.path ? '' : ''
                    }`}
                >
                  {item.name}
                </Link>
                {/* <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-green-900 transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0'
                    }`}
                ></span> */}
              </li>
            ))}


          </ul>
        </div>






        <div className="md:hidden flex items-center mr-10">
          <button onClick={handleMenuToggle} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>


        <div
          className={`fixed z-50 left-0 bg-green-100 text-zinc-500 md:hidden transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}

        >
          <ul className={`flex flex-col space-y-4 p-4 font-bold ${isOpen ? 'mt-40' : ''}`} ref={dropdownRef} >
            <li className="relative group">
              <Link to="/"
                onClick={MobileLiClosed}
                className={`hover:text-green-900 cursor-pointer text-lg ${location.pathname === "/" ? 'text-green-900' : ''
                  }`}
              >Home</Link><span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-green-900 transition-transform duration-300 ${location.pathname === "/" ? 'scale-x-100' : 'scale-x-0'
                  }`}
              ></span></li>

            <li className="relative group">
              <Link className={`hover:text-green-900 cursor-pointer text-lg`}><About /></Link><span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-green-900 transition-transform duration-300 ${location.pathname === "/about" ? 'scale-x-100' : 'scale-x-0'
                  }`}
              ></span></li>


<li className="relative group">
              <Link className={`hover:text-green-900 cursor-pointer text-lg`}><Service /></Link><span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-green-900 transition-transform duration-300 ${location.pathname === "/service" ? 'scale-x-100' : 'scale-x-0'
                  }`}
              ></span> </li>


            <li className="relative group">
              <Link to="/contact"
                onClick={MobileLiClosed}
                className={`hover:text-green-900 cursor-pointer text-lg ${location.pathname === "/contact" ? 'text-green-900' : ''
                  }`}
              >Contact</Link> <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-green-900 transition-transform duration-300 ${location.pathname === "/contact" ? 'scale-x-100' : 'scale-x-0'
                  }`}
              ></span></li>

            {/* {navdata.map((item) => (
              <li key={item.path} className="relative group">
                <Link
                  to={item.path}
                  // onClick={MobileLiClosed}
                  className={`hover:text-green-900 cursor-pointer text-lg ${
                    location.pathname === item.path ? 'text-green-900' : ''
                  }`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-green-900 transition-transform duration-300 ${
                    location.pathname === item.path ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></span>
              </li>
             
            ))} */}
            {/* <li><About /></li> */}

          </ul>


        </div>
      </div>
    </div>
  );
};
