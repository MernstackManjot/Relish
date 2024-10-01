

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const CommercialVehicleLoans = () => {
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
                                Commercial Vehicle Loans
                            </h1>
                            <p className="text-base sm:text-lg">
                                Get easy and affordable financing for purchasing commercial vehicles, including trucks, buses, and
                                other transport vehicles. Whether you are a small business owner or a large fleet operator, we offer
                                customized loans to meet your needs with flexible repayment options and competitive interest rates.
                            </p>
                        </div>

                        {/* <div className="border-t-2 border-gray-300 my-5 mx-auto max-w-4xl"></div> */}

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800 ">
                                Loan Details

                            </h2>
                            <ul className="list-decimal pl-5 space-y-2 text-base sm:text-lg">
                                <li>
                                    <span className='text-black font-bold'> Loan Amount</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li ><span className='font-bold'> Range:</span> ₹1,00,000 to ₹1,00,00,000 (or customize based on your offerings)
                                            d.
                                        </li>
                                        <li><span className='font-bold'> Eligibility:</span> Based on the vehicle type, borrower’s financial history, and repayment capability. </li>

                                    </ul>
                                </li>
                                <li>
                                    <span className='text-black font-bold'> Tenure (Loan Term)
                                    </span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li ><span className='font-bold'>  Range:</span> 1 to 7 years Range: 1 to 7 years
                                        </li>
                                        <li><span className='font-bold'> Flexible repayment options:</span> Choose a tenure that best suits your financial plan. </li>

                                    </ul>
                                </li>
                                <li>
                                    <span className='text-black font-bold'>  Interest Rates</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li ><span className='font-bold'> Type:</span> Fixed or Floating
                                        </li>
                                        <li><span className='font-bold'>  Rates: </span>Starting at X% per annum (Varies depending on loan amount, tenure, and borrower
                                            profile)
                                        </li>

                                    </ul>
                                </li>

                                <li>
                                    <span className='text-black font-bold'>  Down Payment</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li ><span className='font-bold'>Percentage:</span> Minimum of 15-25% of the vehicle’s on-road price
                                        </li>
                                        <li><span className='font-bold'> Custom Offers:</span> Lower down payment options available for established businesses with good
                                            credit ratings.
                                        </li>

                                    </ul>
                                </li>

                                <li>
                                    <span className='text-black font-bold'>Processing Fees</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li ><span className='font-bold'> Standard Fee:</span> 1-3% of the loan amount
                                        </li>
                                        <li><span className='font-bold'> Discounts:</span> Special offers for existing customers or large fleet operators.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className='text-black font-bold'> Insurance</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li ><span className='font-bold'>  Insurance Requirement:</span> Comprehensive vehicle insurance is mandatory.
                                        </li>
                                        <li><span className='font-bold'>Options:</span> Can be included in loan coverage or purchased separately.
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-5 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Eligibility Criteria</h2>

                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg font-bold">
                                <li><span className='text-black font-bold'> Age:</span> Minimum of 21 years (at the time of loan application), maximum 65 years (at loan
                                    maturity).</li>
                                <li><span className='text-black font-bold'> Income:</span> Proof of stable income or business profitability.
                                </li>
                                <li><span className='text-black font-bold'> Business Experience:</span> Minimum 2-3 years in the transportation business (or any industry
                                    using commercial vehicles).</li>
                                <li><span className='text-black font-bold'> Credit Score:</span> A good credit score is preferred for lower interest rates.</li>



                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Documents Required
                            </h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>For Individuals:</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li> KYC Documents: Aadhar Card, PAN Card, Passport.</li>
                                        <li>Income Proof: Latest Income Tax Returns, salary slips, or business financials.</li>
                                        <li> Bank Statements: Last 6 months</li>
                                        <li> Vehicle Quotation: From the authorized dealer. </li>
                                    </ul>
                                </li>
                                <li><span className='text-black font-bold'> For Companies/Firms:</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li> Registration Certificate of the company.</li>
                                        <li>KYC of the directors/partners.</li>
                                        <li> Financial Statements: Last 2-3 years audited.</li>
                                        <li> Bank Statements: Last 6 months. </li>
                                        <li>Vehicle Quotation: From the dealer.</li>
                                    </ul>
                                </li>

                            </ul>
                        </div>


                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                Types of Commercial Vehicles Financed
                            </h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'> Goods Carriers:</span> Trucks, lorries, mini trucks, and tippers.</li>
                                <li><span className='text-black font-bold'> Passenger Vehicles:</span> Buses, vans, and taxis.
                                </li>
                                <li><span className='text-black font-bold'> Special Purpose Vehicles:</span> Tankers, trailers, and other heavy-duty vehicles.</li>
                                <li><span className='text-black font-bold'> Light Commercial Vehicles (LCVs):</span> For intra-city and inter-city transport.</li>
                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                            Special Benefits</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                            <li><span className='text-black font-bold'>Customized Loan Solutions:</span> Tailored for fleet operators, individuals, and companies.</li>
                            <li><span className='text-black font-bold'>Pre-Approved Loans:</span> For repeat customers with good credit history..</li>
                            <li><span className='text-black font-bold'>Quick Disbursal:</span> Faster approval and loan disbursal process.</li>
                            <li><span className='text-black font-bold'> Flexible Repayment Options:</span> Choose from monthly, quarterly, or seasonal payment plans 
                            based on cash flow.</li>
                            </ul>
                        </div>

                        <div className="border-t-2 border-gray-300 my-10 mx-auto max-w-4xl"></div>

                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">
                                How to Apply

                            </h2>

                            <ul className="list-decimal pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'> Step 1: </span>Fill out the online application form with your basic details.

                                </li>
                                <li><span className='text-black font-bold'>  Step 2:</span> Submit the required documents for verification.
                                </li>
                                <li><span className='text-black font-bold'> Step 3:</span> Get approval and choose the vehicle you want to finance.</li>
                                <li><span className='text-black font-bold'> Step 4:</span> Loan disbursal and vehicle delivery
                                </li>

                            </ul>
                        </div>








                    </div>
                </div>
            </div>
        </>
    );
};
