import React from 'react';
import { GiOpenBook } from "react-icons/gi";

export const CardEducation = ({ title, onClick }) => {
    return (
        <div className=''>
            <div
                className="bg-white  transition-transform transform hover:-translate-y-2 active:translate-y-1 border-2 border-green-800 rounded-lg shadow-lg p-4 hover:bg-green-800 hover:shadow-2xl hover:text-white cursor-pointer ease-in-out duration-300 relative z-0"
                onClick={onClick}
            >
                <div className="flex flex-col items-center text-center">
                    <div className="bg-green-800 text-white p-3   rounded-bl-full absolute top-0 right-0 transform translate-x-1/  -translate-y-1/5">
                    <GiOpenBook  className="text-3xl ml-2" />

                    </div>

                    <div className="mt-r mr-8">
                        <h3 className="text-xl font-semibold mb-4">{title}</h3>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};
