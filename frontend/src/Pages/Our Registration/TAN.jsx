import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const TAN = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleBack = () => {
        if (location.state?.from) {
            navigate(location.state.from);
        } else {
            navigate('/');
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className="relative min-h-screen bg-green-50 p-4">
                <div
                    onClick={handleBack}
                    className="absolute top-4 left-32 bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
                >
                    <FaArrowLeft className="text-2xl" />
                </div>
                <div className="flex justify-center items-center min-h-screen">
                    <img
                        src='Tan.jpg'
                        alt='Tan'
                        className='max-w-full max-h-screen object-contain shadow-lg rounded-md border-8 border-green-700'
                    />
                </div>
            </div>
        </>
    )
}
