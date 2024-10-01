import React from 'react';

export const OurBank = ({ name, ACNumer, IFSCNumer, description, image, onClick }) => {
  return (
    <div className="flex justify-center">
      <div
        className="transition-transform transform hover:-translate-y-2 active:translate-y-1 border-2 border-green-600 rounded-xl shadow-lg p-6 hover:shadow-2xl bg-white  cursor-pointer ease-in-out duration-300 relative z-10 flex flex-col items-center text-center"
        onClick={onClick}
      >
        <img src={image} alt={name} className="mb-4 w-32 h-auto rounded-xl" />
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 mb-2">{description}</p>
        <h3 className="text-lg mb-1">Account Number: {ACNumer}</h3>
        <h3 className="text-lg">IFSC: {IFSCNumer}</h3>
      </div>
    </div>
  );
};
