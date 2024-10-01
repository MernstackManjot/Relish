import React from 'react'

export const HomeMorePage = () => {
    return (
        <>
            <div>
            <div className="relative w-full  h-[380px] md:h-[400px] lg:h-[450px] object-cover overflow-hidden font-thin bg-cover bg-center bg-fixed "
                style={{ backgroundImage: "url('rlishphoto.jpg')" }}>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-center p-4">
                    <div>
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">Request A free Quote!</h1>
                        <p className="text-sm md:text-lg max-w-2xl mx-auto font-semibold">
                     Whether you hav a question, want to collaborate, or simply want to share your thoughts, we'd love to hear from you.
                        </p>
                        <button className="bg-green-700 text-white py-3 px-8 mt-5 rounded-lg font-bold transition duration-300 transform hover:bg-green-600 hover:scale-105 active:scale-95">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
