import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../Components/Cards';

export const Service = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path, { state: { from: '/service' } });
  };

  return (
    <div className="sm:p-6 md:p-8 bg-green-50 font-serif items-center text-center">
      <h1 className="text-3xl font-bold mb-8 text-green-800 flex-1 text-center">Service</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        <Card onClick={() => handleNavigation('/digitalMarketing')} title="Digital Marketing" />
        {/* <Card onClick={() => handleNavigation('/itSolution')} title="IT Solution & Development" /> */}
        <Card onClick={() => handleNavigation('/exportImport')} title="Export Import" />
        <Card onClick={() => handleNavigation('/EducationConsultancy')} title="Education Consultancy" />
      </div>
    </div>
  );
};
