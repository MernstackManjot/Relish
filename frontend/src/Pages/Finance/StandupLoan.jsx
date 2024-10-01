import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const StandupLoan = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
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
                            Standup Loans
                        </h1>
                        <p className="text-base sm:text-lg">
                            Standup India is a government initiative designed to support entrepreneurship among women, SC,
                            and ST communities by providing bank loans to establish greenfield enterprises. Here are the key
                            details about the Standup India loan:
                        </p>



                        <div className="my-5">
                            <h2 className="text-xl font-semibold mb-2 text-green-800 ">
                                Key Features:

                            </h2>

                            <ul className="list-decimal pl-5 space-y-2 text-base sm:text-lg">
                                <li>
                                    <span className='text-black font-bold'>  Loan Amount:
                                    </span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li > The loans range between ₹10 lakhs to ₹1 crore
                                        </li>
                                        <li> It is intended for new (greenfield) ventures in the manufacturing, service, or trading
                                            sectors.</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className='text-black font-bold'> Eligibility:
                                    </span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li className='font-bold'> SC/ST and/or women entrepreneurs.
                                        </li>
                                        <li> The borrower must be at least 18 years old.
                                        </li>
                                        <li> Only greenfield projects (the first-time venture of the beneficiary in manufacturing,
                                            services, or trading) are eligible.
                                        </li>
                                        <li>The business must be a non-farm sector venture.

                                        </li>

                                    </ul>
                                </li>
                                <li>
                                    <span className='text-black font-bold'>  Nature of Loan:</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li > Composite loan, which includes both term loans and working capital, covering up to
                                            85% of the project cost.
                                        </li>
                                        <li> The borrower should bring in at least 10% of the project cost.</li>

                                    </ul>
                                </li>

                                <li>
                                    <span className='text-black font-bold'>   Repayment:
                                    </span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li > Maximum repayment tenure is 7 years with a moratorium period of up to 18
                                            months.
                                        </li></ul>
                                </li>

                                <li>
                                    <span className='text-black font-bold'> Interest Rate:</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li >The interest rate is based on the bank's MCLR (Marginal Cost of Funds Based Lending
                                            Rate) and is generally competitive.
                                        </li></ul>
                                </li>
                                <li>
                                    <span className='text-black font-bold'> Collateral:</span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li > The loan requires collateral security or guarantee from the Credit Guarantee Fund
                                            Scheme for Stand-Up India Loans (CGFSIL).
                                        </li>
                                    </ul>
                                </li>
                               
                                <li>
                                    <span className='text-black font-bold'> How to Apply:
                                    </span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li > Applications can be made online via the Stand-Up India portal or by approaching any
                                            branch of a scheduled commercial bank.

                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className='text-black font-bold'>  Purpose:
                                    </span>
                                    <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                        <li >For the setup of new businesses in sectors like manufacturing, trading, and services,
                                            except for agriculture-related activities

                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <p className="text-base sm:text-lg  p-4">The Standup India scheme aims to promote financial inclusion and encourage participation from
                            underrepresented groups in entrepreneurship.</p>
                    </div>
                </div>
            </div>
        </>
    )
}