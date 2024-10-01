import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Card } from './Cards'
import { FaArrowLeft } from 'react-icons/fa';

export const Finance = () => {
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
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-green-50 font-serif min-h-screen">
        <div className="flex flex-col sm:flex-row justify-center items-center mb-8 space-y-4 sm:space-y-0">
        <div onClick={handleBack} className="bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center md:mb-72">
            <FaArrowLeft className="text-2xl " />
          </div>
          <div className="">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-green-800 text-center">
              Finance
            </h1>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-black mx-auto '>
              At <span className='text-black font-bold'>Relish Consultancy & Marketing</span>,  we specialize in providing expert financial and loans consultancy
              to individuals, businesses, and entrepreneurs. Our goal is to help you navigate complex financial
              landscapes and make informed decisions that align with your business goals and personal needs.
            </p>
            <h3 className='text-xl font-bold mt-5 text-green-800'>Why Choose Us?</h3>
            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
              <li><span className='text-black font-bold'> Expertise:</span>
                Our team has extensive knowledge of the financial market and years of
                experience helping businesses and individuals secure the best loan products.
              </li>
              <li> <span className='text-black font-bold'> Personalized Solutions:</span>
                We understand that every client’s financial situation is unique, and
                we provide customized solutions that fit your needs.  </li>
              <li><span className='text-black font-bold'> Global Reach:</span>
                 Whether you're a local business or dealing with international markets, we
                offer financial advisory services that cater to a wide range of sectors.</li>

            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <Link to='/finance/CGTMSE Loans'>                        <Card title="CGTMSE Loans" /></Link>
        <Link to='/finance/PMEGP Loan'>                         <Card title="PMEGP Loans" /></Link>
        <Link to='/finance/MUDRA Loans'>                         <Card title="Mudra Loans" /></Link>
        <Link to='/finance/Startup Loans'>                       <Card title="Startup Loans" /></Link>
        <Link to='/finance/Commercial Vehicle Loans'>            <Card title="Commercial Vehicle Loans" /></Link>
        <Link to='/finance/Project Loans'>                       <Card  title="Project Loans" /></Link>
        <Link to='/finance/Business Loans'>                      <Card title="Business Loans" /></Link>
        <Link to='/finance/Cash Creadit Limit'>                  <Card title="Cash Creadit Limit" /></Link>
        <Link to='/finance/Export-Import Finance'>               <Card title="Export-Import Finance" /></Link>
        <Link to='/finance/Mega Projects Financing'>             <Card title="Mega Projects Financing" /></Link>
        <Link to='/finance/NPA Solutions & Finance'>             <Card title="NPA Solutions & Finance" /></Link>
        <Link to='/finance/Home and Property Loan Guidance'>     <Card title="Home and Property Loan " /></Link>
        <Link to='/finance/Export Financing Advisory'>           <Card title=" Export Financing Advisory" /></Link>
        <Link to='/finance/Standup Loan'>                        <Card title="Standup Loan" /></Link>
        <Link to='/finance/Business Loan Advisory'>              <Card title=" Business Loan Advisory" /></Link>
        <Link to='/finance/Debt Restructuring and Refinancing'>  <Card title=" Debt Restructuring and Refinancing" /></Link>
        <Link to='/finance/Builders & Construction Financing'>   <Card title="Builders & Construction Financing" /></Link>
      
        </div>
      </div>
    </>
  )
}
