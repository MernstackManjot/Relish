import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FcSelfServiceKiosk } from "react-icons/fc";
import { FaComputer } from "react-icons/fa6";
export const HomeChoose = () => {
    const data =[
        {
          icons:<FaUserFriends />,
          title: "Tailored Strategies",
          description:"We don’t believe in one-size-fits-all solutions."
        },
        {
            icons:<FaChartBar />,
            title: "Proven Expertise",
            description:"Our team of seasoned professionals brings."
          },
          {
            icons:<RiMoneyRupeeCircleFill />,
            title: "Data-Driven Results",
            description:"We combine creativity with analytics."
          },
          {
            icons:<FaComputer />,
            title: "Full-Service Agency",
            description:"From SEO and PPC to content writing etc."
          },
    ]
  return (
   <>
   
    <div className={`md:flex justify-evenly items-center p-10 gap-20 `}   >
    <div className='h-96'>
          <img
            src="https://peerdemo.in/relish/wp-content/uploads/2024/10/about-us-1536x1523.png"
            alt="Background"
            className="w-full h-full rounded"
          />
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-bold text-green-700">
          Why Choose Us</h1>
          <h1 className="text-2xl md:text-3xl font-bold mb-5 text-green-950">Relish the Power  <span className='text-green-700'>of Precision Marketing</span></h1>
          <p className="mb-2 text-sm md:text-lg max-w-xl mx-auto font-semibold">
          At Relish, we’re more than just a digital marketing agency — we’re your strategic partner for growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap- ">
                    {data.map((item, index) => (
                        <div key={index} className={`p-4   `}>
                            <div className="flex items-center justify-evenly mb-4 gap-4">
                                <div>
                                    <h1 className="text-2xl rounded-lg p-2 text-white bg-green-800 font-semibold mb-2">{item.icons}</h1>
                                </div>
                                <div>
                            <h3 className="text-xl font-semibold mb-">{item.title}</h3>
                            <p className="text-sm max-w-52">{item.description}</p>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                  
        </div>
       
      </div>
   </>
  )
}
