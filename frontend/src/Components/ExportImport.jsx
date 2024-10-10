import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from './Cards';
import { FaArrowLeft } from 'react-icons/fa';
import { ExportImportCard } from './CardExport-Import';

export const ExportImport = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1)
};

  const handleExportImport = (path) => {

    navigate(path, { state: { from: '/exportImport' } });
  };
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="p-4 sm:p-6 md:p-8 bg-green-50 font-serif min-h-screen">
        <div className="flex items-center mb-8">
          <div onClick={handleBack} className="bg-green-800 h-10 text-gray-100 p-2 rounded-full cursor-pointer">
            <FaArrowLeft className="text-2xl" />
          </div>
          <h1 className="text-3xl font-bold mb-8 text-green-800 flex-1 text-center">
            Export-Import
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:mr-40 lg:ml-40">
          <ExportImportCard
            onClick={() => handleExportImport('/import')}
            title="Import Services "
          />
          <ExportImportCard
            onClick={() => handleExportImport('/export')}
            title="Export Services "
          />
        </div>
      </div>
    </>
  );
};
