import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Card } from './Cards'
import { FaArrowLeft } from 'react-icons/fa';
import { CardEducation } from './CardEducationConsultancy';

export const EducationConsultancy = () => {
  const navigate = useNavigate()

  const location = useLocation()
  const handleBack = () => {
    navigate(-1)
};
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="p-4 sm:p-6 md:p-8  font-serif max-h-screen">
        <div className="flex items-center mb-8">
          {/* <div onClick={handleBack} className="bg-green-800 h-10 text-gray-100 p-2 rounded-full cursor-pointer">
            <FaArrowLeft className="text-2xl" />
          </div> */}
          <h1 className="text-3xl font-bold mb-8 text-green-800 flex-1 text-center">
          Education Consultancy
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:ml-32 lg:mr-32">
        <Link to='/Education/Education Consultancy'>                        <CardEducation title="Education Consultancy" /></Link>
        <Link to='/Education/IELTS'>                         <CardEducation title="IELTS" /></Link>
        {/* <Link to='/finance/MUDRA Loans'>                         <Card title="Mudra Loans" /></Link>
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
        <Link to='/finance/Builders & Construction Financing'>   <Card title="Builders & Construction Financing" /></Link> */}
      
        </div>
      </div>
    </>
  )
}
