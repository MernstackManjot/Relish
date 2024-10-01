

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const StartupLoans = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
             <div className="bg-green-50 text-gray-800 p-6 sm:p-8 md:p-10 lg:p-7 font-serif min-h-screen">
      <div className="relative">
        <div
          onClick={handleBack}
          className="fixed top-4 md:left-40 bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center z-20"
        >
          <FaArrowLeft className="text-2xl" />
        </div>

        <div className="max-w-4xl mx-auto ">
          <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-green-800 text-center">
                                Startup Loans
                            </h1>
                            <p className="text-base sm:text-lg">
                                We offer tailored startup loan solutions to help entrepreneurs and new businesses secure the funds
                                they need to launch and grow their ventures. Our startup loans come with flexible repayment terms
                                and competitive interest rates, making it easier for you to achieve your business goals.
                            </p>
                        </div>

                        {/* <div className="border-t-2 border-gray-300 my-5 mx-auto max-w-4xl"></div> */}

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800 ">
                                Loan Options

                            </h2>
                            <p className="text-base sm:text-lg">We provide various startup loan options based on your business needs:</p>
                            <ul className="list-decimal pl-5 space-y-2 text-base sm:text-lg">
                                <li>
                                    <span className='text-black font-bold'> Unsecured Startup Loans
                                    </span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li ><span className='font-bold'>Loan Amount:</span> ₹5,00,000 - ₹50,00,000
                                        </li>
                                        <li><span className='font-bold'> Interest Rate:</span> 10% - 16% per annum </li>
                                        <li><span className='font-bold'>  Repayment Period:</span> 3 - 5 years </li>
                                        <li><span className='font-bold'> Collateral:</span> Not required
                                        </li>
                                        <li><span className='font-bold'> Eligibility: </span>Businesses less than 3 years old</li>
                                        <li><span className='font-bold'>  Processing Time:</span> 7-10 working days </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className='text-black font-bold'> Secured Startup Loans
                                    </span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li ><span className='font-bold'>Loan Amount:</span> ₹10,00,000 - ₹1,00,00,000+
                                        </li>
                                        <li><span className='font-bold'> Interest Rate:</span> 8% - 12% per annum
                                        </li>
                                        <li><span className='font-bold'>  Repayment Period:</span>  5 - 10 years
                                        </li>
                                        <li><span className='font-bold'> Collateral:</span>Required (property, machinery, etc.)

                                        </li>
                                        <li><span className='font-bold'> Eligibility: </span>Businesses less than 5 years old
                                        </li>
                                        <li><span className='font-bold'>  Processing Time:</span> 10-15 working days</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className='text-black font-bold'> Government-Backed Startup Loans (MUDRA, Stand-Up India, etc.)
                                    </span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li ><span className='font-bold'>Loan Amount:</span> ₹50,000 - ₹10,00,000+
                                        </li>
                                        <li><span className='font-bold'> Interest Rate:</span>  As per government schemes (usually low interest)</li>
                                        <li><span className='font-bold'>  Repayment Period:</span> Varies by scheme </li>
                                        <li><span className='font-bold'> Collateral:</span> May not be required depending on the scheme
                                        </li>
                                        <li><span className='font-bold'> Eligibility: </span> Startups meeting specific criteria under government schemes</li>
                                        <li><span className='font-bold'>  Processing Time:</span>  Depends on the loan program </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-5 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Eligibility Criteria
                            </h2>
                            <p className="text-base sm:text-lg">To qualify for a startup loan, applicants must meet the following conditions:</p>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg font-bold">
                                <li><span className='text-black font-bold'>Business Age:</span> Less than 5 years old
                                </li>
                                <li><span className='text-black font-bold'>Business Type:</span> Startups in all sectors, including tech, manufacturing, services, etc.

                                </li>
                                <li><span className='text-black font-bold'>Credit Score:</span> Minimum 650 (subject to loan amount)

                                </li>
                                <li><span className='text-black font-bold'>  Business Plan:</span> A detailed business plan outlining your vision, market opportunity, and
                                    revenue model.</li>



                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Required Documents
                            </h2>
                            <p className="text-base sm:text-lg">You will need the following documents to apply for a startup loan:</p>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'> Identity Proof:</span> Aadhar Card, PAN Card, Passport, etc.
                                </li>
                                <li><span className='text-black font-bold'> Address Proof: </span>Utility bills, rent agreement, or other address verification.
                                </li>
                                <li><span className='text-black font-bold'> Business Registration Documents: </span>Incorporation certificate, GST registration, etc
                                </li>
                                <li><span className='text-black font-bold'>  Financial Statements:</span> Bank statements, balance sheets, and profit/loss accounts (if
                                    applicable).
                                </li>
                                <li><span className='text-black font-bold'> Business Plan:</span> A detailed business proposal showing projected revenues and growth
                                </li>

                            </ul>
                        </div>


                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Benefits of Startup Loans
                            </h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'> Flexible Repayment Terms:</span> Customize your repayment schedule to match your cash flow.</li>
                                <li><span className='text-black font-bold'> No/Low Collateral Options:</span> Unsecured loans with no need for collateral.
                                </li>
                                <li><span className='text-black font-bold'>Quick Processing:</span> Fast approval times to help you get started without delays.
                                    .</li>
                                <li><span className='text-black font-bold'> Expert Guidance:</span> Our financial advisors help you choose the right loan for your business
                                    needs.</li>
                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                How to Apply</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>Step 1:</span> Fill out our online application form with your details. </li>
                                <li><span className='text-black font-bold'> Step 2:</span> Submit the required documents
                                    for verification.</li>
                                <li><span className='text-black font-bold'>Step 3:</span> Our team will assess your eligibility and connect with you for further
                                    processing</li>
                                <li><span className='text-black font-bold'>Step 4:</span> Once approved, receive funds in your bank account within the specified time.
                                </li>

                            </ul>
                            <p className='font-bold'>[Apply Now]</p>
                        </div>

                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Frequently Asked Questions (FAQs)

                            </h2>

                            <ul className="list-none pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>Q1: Can I get a startup loan without collateral? </span><br />Yes, we offer unsecured loans that do not require any collateral, though the interest rate may be
                                    slightly higher.</li>
                                <li><span className='text-black font-bold'>Q2: What is the maximum loan amount I can apply for? </span><br />The maximum loan amount depends on the type of loan you choose and your business’s financials.
                                    For secured loans, it can go above ₹1 crore.
                                    .</li>
                                <li><span className='text-black font-bold'>Q3: How long does it take to get approval?
                                </span><br />Loan approval typically takes between 7 to 15 days, depending on the loan type and completeness of
                                    the documentation.
                                    .</li>
                                <li><span className='text-black font-bold'>Q4: Do I need a business plan to apply? </span><br />Yes, a detailed business plan is essential to secure startup loans, as it helps us assess the viability of
                                    your business.
                                    .</li>
                            </ul>
                        </div>
                    </div>
                </div>
            
        </>
    );
};
