import React from 'react'
import { Link } from 'react-router-dom'

export const HomeMorePage = () => {
    return (
        <>
            <div>
            <div className="relative w-full  h-[380px] md:h-[350px] lg:h-[350px] object-cover overflow-hidden font-thin bg-cover bg-center bg-fixed "
                style={{ backgroundImage: "url('relishphoto3.jpg')" }}>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-center p-4">
                    <div>
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">Request A free Quote!</h1>
                        <p className="text-sm md:text-lg max-w-2xl mx-auto font-semibold">
                     Whether you hav a question, want to collaborate, or simply want to share your thoughts, we'd love to hear from you.
                        </p>
                        <div className="flex justify-center items-center mt-3">
                            <Link to="/contact">
                                <div className="relative inline-block overflow-hidden group">
                                    <button className="bg-white text-black font-medium py-3 px-8 rounded-lg transition duration-300 z-10">
                                        Contact Us
                                    </button>
                                    <span className="absolute inset-0 bg-green-700 font-medium rounded-lg py-3 px-8 transform  scale-y-0 scale-x-0  transition-transform duration-300 origin-top-left group-hover:scale-x-100 group-hover:scale-y-100"> Contact Us</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
