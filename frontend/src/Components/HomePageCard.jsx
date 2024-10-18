import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoHomeCard } from './CardHome';

export const HomeCard = () => {
  const navigate = useNavigate();

  const handleMarkrting = () => {
    navigate('/digitalMarketing');
  };

  const handleExportImport = () => {
    navigate('/exportImport');
  };

  const handleEducationConsultancy = () => {
    navigate('/Education');
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-green-50 from-10% via-green-50 via-30% to-green-100 to-90%
    
     font-serif text-center">
      <h1 className="text-4xl font-bold mb-1 text-green-950 inline-block">
        Our <span className='text-green-800'>Services</span>
      </h1>
      <div className="flex items-center justify-center text-center mb-6">
      <span className=" border-b-8 rounded-full border-green-800 w-2 mx-"></span>
             <span className=" border-b-8 rounded-full border-green-800 w-2 mx-2"></span>
                    <div className="border-b-4  border-green-800 w-20"></div>
                    <span className=" border-b-8 rounded-full border-green-800 w-2 mx-2"></span>
                 <span className=" border-b-8 rounded-full border-green-800 w-2 mx-"></span>
                </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 gap-8 justify-items-center lg:ml-28 lg:mr-28">
        <PhotoHomeCard
          onClick={handleMarkrting}
          image="https://img.freepik.com/premium-photo/social-engagement-online-marketing-concepts-with-young-person-work-with-digital-icon-sign_254791-1198.jpg?ga=GA1.2.830621292.1707550020&semt=ais_hybrid"
          title="Digital Marketing"
        />
        <PhotoHomeCard
          onClick={handleExportImport}
          image="https://img.freepik.com/premium-photo/picture-truck-plane-flying-busy-road_579873-7495.jpg?ga=GA1.2.830621292.1707550020&semt=ais_hybrid"
          title="Export-Import"
        />
        <PhotoHomeCard
          onClick={handleEducationConsultancy}
          image="https://img.freepik.com/premium-photo/adult-students-studying-together-library_13339-9741.jpg?ga=GA1.2.830621292.1707550020&semt=ais_hybrid"
          title="Education Consultancy"
        />
      </div>
    </div>
  );
};
