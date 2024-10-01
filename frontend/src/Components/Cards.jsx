import React from 'react';
import '../CSS/Card.css'

export const Card = ({ title, onClick }) => {
  return (
    <div className=''>
      <div
        className="transition-transform transform hover:-translate-y-2 active:translate-y-1 border-2 border-green-600 rounded-xl shadow-lg p-6  hover:bg-green-800 hover:shadow-2xl bg-white hover:text-white cursor-pointer ease-in-out duration-300 relative z-10 flex justify-center items-center  "
        onClick={onClick}
      >
        
        <div className=''>
        <h3 className="text-xl font-semibold mb-4 ">{title}</h3>

        </div>
      </div>
    </div>
  );
};
