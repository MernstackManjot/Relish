import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const CGTMSELoans = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className="bg-green-50 text-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 font-serif min-h-screen">
                <div className="relative">
                    <div
                        onClick={handleBack}
                        className="fixed top-4 left-4 sm:left-6 md:left-8 bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
                    >
                        <FaArrowLeft className="text-2xl" />
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div>
                            <h1 className="text-xl ml-10 sm:text-2xl md:text-3xl font-bold mb-4 text-green-800 text-center">
                                CGTMSE Loans for Micro and Small Enterprises
                            </h1>
                            <p className="text-base sm:text-lg">

                            </p>
                        </div>

                        {/* <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div> */}

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800 ">
                                Key Features of CGTMSE Loans
                            </h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'> Loan Amount:</span> Up to ₹2 crore</li>
                                <li><span className='text-black font-bold'> Interest Rate:</span> As per the bank's discretion (typically competitive interest rates based on the lender).</li>
                                <li><span className='text-black font-bold'> Collateral:</span> No collateral or third-party guarantee required</li>
                                <li>
                                    <span className='text-black font-bold'> Guarantee Coverage:</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li ><span className='font-bold'>Up to 85%</span> of the loan amount for micro-enterprises for loans up to ₹5 lakhs.</li>
                                        <li><span className='font-bold'>75%</span> of the loan amount for other MSEs.</li>
                                        <li><span className='font-bold'>80%</span> for loans to MSEs owned/operated by women, or located in certain backward areas.</li>
                                    </ul>
                                </li>
                                <li><span className='text-black font-bold'> Tenure:</span> Flexible repayment tenure, usually ranging from 5 to 7 years, depending on the loan amount and purpose.</li>
                                <li><span className='text-black font-bold'> Processing Time:</span> Typically 15-30 working days, depending on the documentation and bank processing time.</li>
                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-5 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                CGTMSE Loan Benefits
                            </h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'> No Collateral Required:</span> This allows businesses without assets to get funding.</li>
                                <li><span className='text-black font-bold'> Favourable Terms:</span> The loans have longer repayment periods and attractive interest rates.</li>
                                <li><span className='text-black font-bold'> Inclusive Coverage:</span> Available to a wide variety of industries, including manufacturing, service sectors, and retail traders.</li>
                                <li><span className='text-black font-bold'> Government Support:</span> Backed by the Government of India, ensuring reliability and support.</li>
                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Eligibility Criteria for CGTMSE Loans
                            </h2>
                            <ul className="list-decimal pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>  Type of Business: </span>Micro and small enterprises engaged in manufacturing or service sectors,
                                    including retail trade, educational institutions, and more.</li>
                                <li><span className='text-black font-bold'> Location: </span>Businesses across India can apply.
                                </li>
                                <li><span className='text-black font-bold'> Credit History:</span> The business should have a clean credit history, without defaulting on any
                                    past loans</li>
                                <li><span className='text-black font-bold'> Business Registration: </span>The business must be registered as per legal requirements (e.g.,
                                    Udyam Registration for MSMEs).</li>
                            </ul>
                        </div>


                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Required Documents for CGTMSE Loans

                            </h2>
                            <ul className="list-decimal pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>Business Plan:</span>  A detailed business plan, including projected cash flows and revenue.</li>
                                <li><span className='text-black font-bold'> KYC Documents:</span> Proof of identity, address, and other statutory documents for the business
                                    owner.
                                </li>
                                <li><span className='text-black font-bold'>Financial Statements:</span>  Audited balance sheets and profit/loss statements for the past 2-3
                                    years.</li>
                                <li><span className='text-black font-bold'>  Bank Statements: </span>Bank account statements for the last 6 months.</li>
                                <li><span className='text-black font-bold'>Proof of Business: </span>  Registration certificates, GST details, etc.
                                </li>
                                <li><span className='text-black font-bold'> Loan Application Form:</span> Duly filled loan application form as per the bank's requirement.
                                </li>
                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                            How Relish Consultancy & Marketing Can Help
                            </h2>
                            <p className='text-base sm:text-lg'>Relish Consultancy & Marketing assists businesses in securing CGTMSE loans by offering end-to-end 
                            support, including:</p>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'> Loan Application Preparation:</span>  Helping you create and submit a compelling business plan.
                                </li>
                                <li><span className='text-black font-bold'>Documentation Assistance: </span>  Ensuring all required documents are in order
                                </li>
                                <li><span className='text-black font-bold'> Bank Liaison: </span>Coordinating with banks to ensure faster approval and disbursement of loans.</li>
                                <li><span className='text-black font-bold'>  Expert Guidance:  </span>Providing consultancy on the best financial options for your business.</li>
                               
                            </ul>
                        </div>






                    </div>
                </div>
            </div>
        </>
    );
};
