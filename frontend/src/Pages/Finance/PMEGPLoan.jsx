
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const PMEGPLoan = () => {
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
                                PMEGP Loan
                            </h1>
                            <p className="text-base sm:text-lg">
                                The <span className='font-bold'>Prime Minister’s Employment Generation Programme (PMEGP)</span> is a government initiative that
                                provides financial assistance to individuals and small businesses for setting up new projects in the
                                manufacturing, service, and trading sectors. This program is designed to promote self-employment
                                and generate employment opportunities across India.
                            </p>
                        </div>

                        <div className="border-t-2 border-gray-300 my-5 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800 ">
                                Key Features of PMEGP Loans

                            </h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'> Loan Amount:</span> Up to ₹25 lakhs for manufacturing projects and ₹10 lakhs for service projects</li>


                                <li>
                                    <span className='text-black font-bold'>  Subsidy:
                                    </span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li ><span className='font-bold'>Urban Areas: </span>  15% subsidy on the project cost for general category applicants and
                                            25% for special category applicants (SC/ST/OBC, minorities, women, ex-servicemen,
                                            and physically disabled individuals).</li>
                                        <li><span className='font-bold'> Rural Areas:</span>  25% subsidy for general category and 35% for special category
                                            applicants.
                                        </li>

                                    </ul>
                                </li>
                                <li><span className='text-black font-bold'>Interest Rate:</span>   As per the standard interest rates of the respective bank.</li>

                                <li><span className='text-black font-bold'> Repayment Period:</span> 3 to 7 years, including a moratorium period of 6 months to 1 year.</li>
                                <li><span className='text-black font-bold'> Collateral:</span> No collateral required for loans up to ₹10 lakhs.</li>
                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-5 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Eligibility Criteria for PMEGP Loans
                            </h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'> Age: </span>Applicants must be at least 18 years old</li>
                                <li><span className='text-black font-bold'> Educational Qualification:</span> For projects costing above ₹10 lakhs in manufacturing and ₹5
                                    lakhs in the service sector, the applicant must have passed at least 8th standard.
                                </li>
                                <li><span className='text-black font-bold'> Project Location:</span> Both urban and rural areas are eligible.</li>
                                <li><span className='text-black font-bold'> Applicant Categories:</span> Individuals, SHGs (Self-Help Groups), Cooperative Societies, and
                                    Charitable Trusts are eligible.</li>
                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Eligible Sectors for PMEGP Loans
                            </h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'> Manufacturing Sector:</span> Products like textiles, handicrafts, agro-based industries, food
                                    processing, engineering, etc</li>
                                <li><span className='text-black font-bold'> Location: </span>Businesses across India can apply.
                                </li>
                                <li><span className='text-black font-bold'> Service Sector:</span> Beauty parlors, travel agencies, IT services, and more.</li>
                                <li><span className='text-black font-bold'> Trading Sector:</span> Retail outlets, small shops, and wholesale trading businesses.</li>
                            </ul>
                        </div>


                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Documents Required for PMEGP Loans

                            </h2>
                            <ul className="list-decimal pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'> Identity Proof:</span> Aadhaar card, PAN card, or Voter ID.</li>
                                <li><span className='text-black font-bold'>  Residence Proof:</span> Electricity bill, rent agreement, or ration card.
                                </li>
                                <li><span className='text-black font-bold'> Project Report:</span> Detailed report with project cost, feasibility, and projected revenue.</li>
                                <li><span className='text-black font-bold'> Educational Qualification Certificates</span> (if applicable).
                                </li>
                                <li><span className='text-black font-bold'> Bank Account Details:</span> Applicant's savings/current account with bank details.
                                </li>
                                <li><span className='text-black font-bold'> Caste Certificate</span> (for applicants under special categories).

                                </li>
                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Steps to Apply for PMEGP Loans
                            </h2>

                            <ul className="list-decimal pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>  Submit Online Application:</span> Visit the official PMEGP portal (www.kviconline.gov.in/pmegp)
                                    and fill out the application form.

                                </li>
                                <li><span className='text-black font-bold'> Prepare Project Report:</span> Include all financial and technical details about your proposed
                                    project.
                                </li>
                                <li><span className='text-black font-bold'> Bank Processing:</span> Submit your application to the bank for loan processing.</li>
                                <li><span className='text-black font-bold'> Approval and Disbursement:</span> Once the loan is sanctioned, the bank will release the funds as
                                    per the project requirements.
                                </li>

                            </ul>
                        </div>






                    </div>
                </div>
            </div>
        </>
    );
};
