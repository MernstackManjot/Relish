import React from 'react';
import { FaTruckMoving } from "react-icons/fa6";

export const ExportImportCard = ({ title, onClick }) => {
    return (
        <div className=''>
            <div
                className="bg-white transition-transform transform hover:-translate-y-2 active:translate-y-1 border-2 border-green-800 rounded-lg shadow-lg p-4 hover:bg-green-800 hover:shadow-2xl hover:text-white cursor-pointer ease-in-out duration-300 relative z-10"
                onClick={onClick}>
                <div className="flex flex-col items-center text-center ">
                    <div className="bg-green-800 text-white p-3 rounded-full absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3">
                        <FaTruckMoving className="text-3xl" />
                    </div>

                    <div > {/* Added margin-top for spacing */}
                        <h3 className="text-xl font-semibold mb-4">{title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
