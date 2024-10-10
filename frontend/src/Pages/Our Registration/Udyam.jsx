
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const Udyam = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleBack = () => {
        navigate(-1)
    };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className="relative min-h-screen bg-green-50 p-4 overflow-auto">
                <div
                    onClick={handleBack}
                    className="fixed top-4 left-32 bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
                >
                    <FaArrowLeft className="text-2xl" />
                </div>
                <div className="flex flex-col justify-center items-center min-h-screen gap-3">
                    <img
                        src='Udyam1.jpg'
                        alt='Udyam1'
                        className='max-w-full max-h-screen object-contain shadow-lg rounded-md border-8 border-green-700 '
                    />
                      <img
                        src='Udyam2.jpg'
                        alt='Udyam2'
                        className='max-w-full max-h-screen object-contain shadow-lg rounded-md border-8 border-green-700 '
                    />
                      <img
                        src='Udyam3.jpg'
                        alt='Udyam3'
                        className='max-w-full max-h-screen object-contain shadow-lg rounded-md border-8 border-green-700 '
                    />
                      <img
                        src='Udyam4.jpg'
                        alt='Udyam4'
                        className='max-w-full max-h-screen object-contain shadow-lg rounded-md border-8 border-green-700 '
                    />
                </div>
            </div>
        </>
    )
}
