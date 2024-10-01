import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { OurBank } from '../../Components/OurBank\'s';



export const OurBankPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (location.state?.from) {
      navigate(location.state.from, { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-green-50 font- min-h-screen">
      <div className="flex items-center mb-8">
        <div onClick={handleBack} className="bg-green-800 h-10 text-gray-100 p-2 rounded-full cursor-pointer">
          <FaArrowLeft className="text-2xl" />
        </div>
        <h1 className="text-3xl font-bold mb-8 text-green-800 flex-1 text-center">
          Our Bank's
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto lg:max-w-4xl">
      <OurBank
            name="State Bank of India"
            image="data:image/png;base64,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"
            description="State Bank of India (SBI) a Fortune 500 company, is an Indian Multinational, Public Sector Banking and Financial services statutory body headquartered in Mumbai.  "
            ACNumer=""
            IFSCNumer=""
          />
      <OurBank
            name="Bank of Baroda"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV7M8ma95XbeM18y9GvUTDjs9S7bKyxkz_LHbeD1FMIFfqW1MPA_pOqWNaYQ&s"
            description="It is the second-largest bank in India, after the State Bank of India, in terms of total assets, deposits, branches, and customers. "
            ACNumer="56850200000167"
            IFSCNumer="BARB0MOHPUN"
          />
           <OurBank
            name="Bandhan Bank"
            image="data:image/jpeg;base64,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"
            description="Bandhan Bank started operations as a universal bank on August 23. It became the first microfinance company in India to get a universal banking licence."
            ACNumer="20100018463150"
            IFSCNumer="BDBL0001828"
          />
             <OurBank
            name="Suryoday Small Finance Bank"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Bn9K6YSucHUN6QtvbgUIqUC6Wl1KLK1TKA&s"
            description="Small finance banks are registered under public limited companies under the Companies Act 2013. "
            ACNumer="252000552380"
            IFSCNumer="SURY0BK0000"
          />
          <OurBank
            name="AU Small Finance Bank"
            image="data:image/png;base64,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"
            description="AU Small Finance Bank is a leading small finance Bank in India, offering a wide range of banking services to its customers."
            ACNumer="2402238361205840"
            IFSCNumer="AUBS0002383"
          />
      
         
     
      </div>
    </div>
  );
};
