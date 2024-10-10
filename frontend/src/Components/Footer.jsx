// import React from 'react';
// import { FaFacebookF, FaInstagram, FaAmazon } from 'react-icons/fa';
// import { SiFlipkart } from 'react-icons/si';
// import { Link } from 'react-router-dom';
// import { PiPaperPlaneRightFill } from 'react-icons/pi';

// export const Footer = () => {

//   return (
//     <div className=" relative  text-white py-8 px-4 sm:px-8 md:px-12 lg:px-20 font-serif">

// <video 
//         className="absolute inset-0 w-full h-full object-cover " 
//         autoPlay
//         loop
//         muted
//       >
//         <source src="relishvideo9.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="container mx-auto flex flex-col md:flex-row justify-between gap-6 md:gap-10 relative z-10">
//         <ul className="flex flex-col space-y-7  ">
//           <li className="list-none flex  items-center p-0 m-0">
//             <img
//               src='logo16.png'
//               alt='Logo'
//               className='w-auto h-auto max-h-24 md:max-h-36 lg:max-h-32'
//             />
//           </li>


//           <li className="flex space-x-4 ">
//             <div className="text-blue-600 transition-colors text-2xl cursor-pointer">
//               <FaFacebookF />
//             </div>
//             <div className="text-pink-500 transition-colors text-2xl cursor-pointer">
//               <FaInstagram />
//             </div>
//             <div className="text-yellow-500 transition-colors text-2xl cursor-pointer">
//               <FaAmazon />
//             </div>
//             <div className="text-blue-600 transition-colors text-2xl cursor-pointer">
//               <SiFlipkart />
//             </div>
//           </li>
//         </ul>
        

    


//         <ul className="flex flex-col space-y-3 ">
//           <li className=''>
//             <h3 className='text-2xl font-bold text-green-800 '> Our Registration</h3>
//             <ul>
//               <li className='flex items-center text-center mt-2'>    <PiPaperPlaneRightFill className="text-green-800 mr-2" /><Link to="/IEC">Export-Import (IEC)</Link></li>
//               <li className='flex items-center text-center mt-2'>    <PiPaperPlaneRightFill className="text-green-800 mr-2" /><Link to="/about">GST </Link></li>
//               <li className='flex items-center text-center mt-2'>    <PiPaperPlaneRightFill className="text-green-800 mr-2" /><Link to="/udyam">Udyam </Link></li>
//               <li className='flex items-center text-center mt-2'>    <PiPaperPlaneRightFill className="text-green-800 mr-2" /><Link to="/tan">TAN </Link></li>
//               <li className='flex items-center text-center mt-2'>    <PiPaperPlaneRightFill className="text-green-800 mr-2" /><Link to="/OurBank's">Our Bank's </Link></li>

//             </ul>
//           </li>
//         </ul>

//         <ul className="flex flex-col space-y-3 ">
          
//           <div className="">
//             <h2 className="md:text-2xl text-xl font-semibold mb-2 text-green-800">Relish Consultancy & Marketing </h2>
//             <div className="text-base sm:text-lg mb-2 ">
//               <p>Sco.21 Dashmesh Market Balongi</p>
//               <p>SAS Nagar (Mohali) Punjab-160055</p>
              
//             </div>
//             <div className="text-base sm:text-lg ">
//               <p className="mb-1">Phone : <Link to="" className="text-blue-800 hover:underline">+91 172 505 2228</Link></p>
//               <p className="mb-1">Mobile :
//                 <Link to="" className="text-blue-800 hover:underline"> +91 896 882 7071</Link>,
//                 <Link to="" className="text-blue-800 hover:underline"> +91 991 515 9671</Link>
//                 <p className="mb-1">Email : <Link to="" className="text-blue-800 hover:underline">relishcm@gmail.com</Link></p>
//                 <p className="mb-1">  <Link to="" className="text-blue-800 hover:underline">www.relishcm.com</Link></p>
//               </p>

//             </div>
//           </div>
//         </ul>




//       </div>

//       <div className="text-center mt-8 border-t border-green-900 pt-4">
//         <p> <span className='text-green-900 font-bold'>Relish Consultancy & Marketing</span>. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };
import React from 'react';
import { FaFacebookF, FaInstagram, FaAmazon } from 'react-icons/fa';
import { SiFlipkart } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { PiPaperPlaneRightFill } from 'react-icons/pi';

export const Footer = () => {

  return (
    <div className=" relative  text-white py-8 px-4 sm:px-8 md:px-12 lg:px-20 font-serif">

<video 
        className="absolute inset-0 w-full h-full object-cover " 
        autoPlay
        loop
        muted
      >
        <source src="relishvideo9.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-6 md:gap-10 relative z-10">
        <ul className="flex flex-col space-y-7  ">
          <li className="list-none flex  items-center p-0 m-0">
            <img
              src='logo16.png'
              alt='Logo'
              className='w-auto h-auto max-h-24 md:max-h-36 lg:max-h-32'
            />
          </li>


          <li className="flex space-x-4 ">
            <div className="text-blue-600 transition-colors text-2xl cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="text-pink-500 transition-colors text-2xl cursor-pointer">
              <FaInstagram />
            </div>
            <div className="text-yellow-500 transition-colors text-2xl cursor-pointer">
              <FaAmazon />
            </div>
            <div className="text-blue-600 transition-colors text-2xl cursor-pointer">
              <SiFlipkart />
            </div>
          </li>
        </ul>
        

    


        <ul className="flex flex-col space-y-3 ">
          <li className=''>
            <h3 className='text-2xl font-bold  '> Our Registration</h3>
            <ul>
              <li className='flex items-center text-center mt-2'>    <PiPaperPlaneRightFill className=" mr-2" /><Link to="/IEC">Export-Import (IEC)</Link></li>
              <li className='flex items-center text-center mt-2'>    <PiPaperPlaneRightFill className=" mr-2" /><Link to="/about">GST </Link></li>
              <li className='flex items-center text-center mt-2'>    <PiPaperPlaneRightFill className=" mr-2" /><Link to="/udyam">Udyam </Link></li>
              <li className='flex items-center text-center mt-2'>    <PiPaperPlaneRightFill className=" mr-2" /><Link to="/tan">TAN </Link></li>
              <li className='flex items-center text-center mt-2'>    <PiPaperPlaneRightFill className=" mr-2" /><Link to="/OurBank's">Our Bank's </Link></li>

            </ul>
          </li>
        </ul>

        <ul className="flex flex-col space-y-3 ">
          
          <div className="">
            <h2 className="md:text-2xl text-xl font-semibold mb-2 ">Relish Consultancy & Marketing </h2>
            <div className="text-base sm:text-lg mb-2 ">
              <p>Sco.21 Dashmesh Market Balongi</p>
              <p>SAS Nagar (Mohali) Punjab-160055</p>
              
            </div>
            <div className="text-base sm:text-lg ">
              <p className="mb-1">Phone : <Link to="" className=" hover:underline">+91 172 505 2228</Link></p>
              <p className="mb-1">Mobile :
                <Link to="" className=" hover:underline"> +91 896 882 7071</Link>,
                <Link to="" className=" hover:underline"> +91 991 515 9671</Link>
                <p className="mb-1">Email : <Link to="" className=" hover:underline">relishcm@gmail.com</Link></p>
                <p className="mb-1">  <Link to="" className=" hover:underline">www.relishcm.com</Link></p>
              </p>

            </div>
          </div>
        </ul>




      </div>

      <div className="text-center mt-8 border-t border-green-900 pt-4">
        <p> <span className='text-green-900 font-bold'>Relish Consultancy & Marketing</span>. All rights reserved.</p>
      </div>
    </div>
  );
};
