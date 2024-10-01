
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const MUDRALoans = () => {
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
                                MUDRALoans
                            </h1>
                            <p className="text-base sm:text-lg">

                            </p>
                        </div>

                        {/* <div className="border-t-2 border-gray-300 my-5 mx-auto max-w-4xl"></div> */}

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800 ">
                                Types of MUDRA Loans

                            </h2>
                            <ul className="list-decimal pl-5 space-y-2 text-base sm:text-lg">
                                <li>
                                    <span className='text-black font-bold'>   Shishu (Up to ₹50,000)
                                    </span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li ><span className='font-bold'> Description:</span> Tailored for businesses that are in their infancy. Ideal for micro-enterprises that need minimal funding to get started.
                                        </li>
                                        <li><span className='font-bold'> Loan Amount:</span> Up to ₹50,000. </li>
                                        <li><span className='font-bold'> Eligibility:</span> New businesses in their early stages. </li>
                                        <li><span className='font-bold'> Interest Rate:</span> Varies based on the lender. </li>
                                        <li><span className='font-bold'>  Repayment Period:</span> Up to 5 years. </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className='text-black font-bold'>  Kishore (₹50,001 to ₹5,00,000)
                                    </span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li ><span className='font-bold'> Description:</span> For existing small enterprises looking to expand their operations,
                                            upgrade technology, or boost working capital.
                                        </li>
                                        <li><span className='font-bold'> Loan Amount:</span> ₹50,001 to ₹5,00,000. </li>
                                        <li><span className='font-bold'> Eligibility:</span>Businesses that are already operational.</li>
                                        <li><span className='font-bold'> Interest Rate:</span>  Varies based on the financial institution. </li>
                                        <li><span className='font-bold'>  Repayment Period:</span> Up to 5 years. </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className='text-black font-bold'> Tarun (₹5,00,001 to ₹10,00,000)
                                    </span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li ><span className='font-bold'> Description:</span>  For well-established businesses looking for substantial funding for large-scale operations or capital investments.
                                        </li>
                                        <li><span className='font-bold'> Loan Amount:</span> ₹5,00,001 to ₹10,00,000 </li>
                                        <li><span className='font-bold'> Eligibility:</span> Expanding businesses with a stable revenue model.
                                        </li>
                                        <li><span className='font-bold'> Interest Rate:</span>  Competitive rates, subject to the bank’s discretion. </li>
                                        <li><span className='font-bold'>  Repayment Period:</span> Up to 5 years. </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-5 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Eligible Sectors
                            </h2>
                            <p className="text-base sm:text-lg"> MUDRA loans can be availed for businesses operating in:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg font-bold">
                                <li> Manufacturing </li>
                                <li> Service Sector </li>
                                <li> Trading </li>
                                <li>  Agriculture-related activities
                                </li>
                                <li> Small-scale industrial units
                                </li>
                                <li> Artisan and crafts businesses </li>
                                <li>  Food Processing Units </li>
                                <li> Transport services (purchase of vehicles for commercial use)
                                </li>


                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Key Features of MUDRA Loans
                            </h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'> No Collateral Required:</span> These loans do not require collateral or security</li>
                                <li><span className='text-black font-bold'>  Flexible Repayment:</span> Borrowers are provided with flexible repayment options, making it
                                    easier to manage repayments.
                                </li>
                                <li><span className='text-black font-bold'> Low Interest Rates:</span> Interest rates are competitive and vary depending on the bank or
                                    financial institution.</li>
                                <li><span className='text-black font-bold'> Micro Credit Scheme: </span>Supports individuals in informal sectors.</li>
                                <li><span className='text-black font-bold'>  Business Support:</span> MUDRA also provides support for training and skill development.</li>
                            </ul>
                        </div>


                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Eligibility Criteria</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li> Must be a citizen of India.</li>
                                <li> Micro or small businesses such as artisans, shopkeepers, food processors, and more.
                                </li>
                                <li>Individuals or groups owning or planning to start a micro-business.</li>
                                <li> Small-scale industries, retail traders, or service providers.</li>


                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                How to Apply for MUDRA Loan

                            </h2>

                            <ul className="list-decimal pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'> Prepare Your Business Plan:</span> Create a solid business plan outlining your financial needs.

                                </li>
                                <li><span className='text-black font-bold'> Visit a Bank or Financial Institution:</span> Approach any public or private sector bank, regional
                                    rural bank, or NBFC that offers MUDRA Loans.
                                </li>
                                <li><span className='text-black font-bold'> Submit Necessary Documents:</span> Provide identification documents, proof of business
                                    existence, business plan, and necessary financial documents.</li>
                                <li><span className='text-black font-bold'> Await Approval:</span> The bank will process the application and disburse the loan if all conditions
                                    are met.
                                </li>

                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Documents Required</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li> Identity proof (Aadhaar, Voter ID, PAN Card) </li>
                                <li> Address proof (Utility bill, Ration card)</li>
                                <li> Business Registration Certificate or Trade License</li>
                                <li> Bank statements (past six months) </li>

                            </ul>
                        </div>


                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                FAQs</h2>
                            <ul className="list-decimal pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='font-bold'> What is the maximum loan amount under MUDRA?</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li>Up to ₹10,00,000 under the Tarun category</li>
                                    </ul>
                                </li>
                                <li><span className='font-bold'>  Do I need collateral for a MUDRA Loan?</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li> No collateral is required.</li>
                                    </ul>
                                </li>
                                <li><span className='font-bold'> Is there a processing fee for the loan?</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li>Typically, there is no processing fee, but it varies across institutions</li>
                                    </ul>
                                </li>
                                <li><span className='font-bold'> Can I apply for a MUDRA loan online?</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li>Yes, many banks provide the option to apply for MUDRA loans online through their 
                                        portals.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
