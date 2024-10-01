

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const BusinessLoans = () => {

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
                Business Loans
                </h1>
                <p className="text-base sm:text-lg">
                In India, various types of business loans are available to cater to different needs of businesses. Here's 
                a breakdown of common types of business loans and their details:
                </p>



                <div className="my-5">
            

                    <ul className="list-decimal pl-5 space-y-2 text-base sm:text-lg">
                        <li>
                            <span className='text-black font-bold'> Term Loans
                            </span>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li ><span className='font-bold'>  Purpose:</span> Expansion, equipment purchase, working capital.</li>
                                <li ><span className='font-bold'>   Loan Amount:</span> Varies, typically ranging from ₹50,000 to ₹50 crore, depending on the lender.</li>
                                <li ><span className='font-bold'>   Interest Rate:,</span> Generally between 8% to 20%, depending on the bank, loan amount, and 
                                borrower profile</li>
                                <li ><span className='font-bold'>   Tenure:</span> 1 to 15 years.</li>
                                <li ><span className='font-bold'> Collateral:</span> Can be secured (requires collateral) or unsecured (no collateral).</li>
   
                             
                            </ul>
                        </li>
                        <li>
                            <span className='text-black font-bold'>  Working Capital Loans
                            </span>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                            <li ><span className='font-bold'>  Purpose:</span>  To manage day-to-day operations, inventory, or receivables.</li>
                                <li ><span className='font-bold'>   Loan Amount:</span>Depends on the working capital requirement.</li>
                                <li ><span className='font-bold'>   Interest Rate:,</span>Usually between 9% and 16%.</li>
                                <li ><span className='font-bold'>   Tenure:</span> 12 months to 3 years.</li>
                                <li ><span className='font-bold'> Collateral:</span> Usually secured by business assets or personal guarantees.
                                </li>

                            </ul>
                        </li>
                        <li>
                            <span className='text-black font-bold'>Machinery/Equipment Loans</span>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                            <li ><span className='font-bold'>  Purpose:</span> Purchase of new machinery or equipment</li>
                                <li ><span className='font-bold'>   Loan Amount:</span> Based on the value of the equipment.                                </li>
                                <li ><span className='font-bold'>   Interest Rate:,</span> Varies between 8% to 18%.</li>
                                <li ><span className='font-bold'>   Tenure:</span> 3 to 7 years</li>
                                <li ><span className='font-bold'> Collateral:</span> The machinery itself can act as collateral.
                                </li>

                            </ul>
                        </li>

                        <li>
                            <span className='text-black font-bold'>MSME Loans
                            </span>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                            <li ><span className='font-bold'>  Purpose:</span>  For micro, small, and medium enterprises.</li>
                                <li ><span className='font-bold'>   Loan Amount:</span> Up to ₹1 crore under schemes like CGTMSE.                                </li>
                                <li ><span className='font-bold'>   Interest Rate:,</span>Varies but generally competitive rates for MSMEs.</li>
                                <li ><span className='font-bold'>   Tenure:</span> 1 to 10 years</li>
                                <li ><span className='font-bold'> Collateral:</span> Many banks provide collateral-free loans under government-backed schemes like 
                                Mudra Loans.
                                </li>
                                </ul>
                        </li>

                        <li>
                            <span className='text-black font-bold'> Mudra Loans</span>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                            <li ><span className='font-bold'>  Purpose:</span>For small and micro businesses</li>
                                <li ><span className='font-bold'>   Loan Amount:</span>  Up to ₹10 lakh under three categories—Shishu (up to ₹50,000), Kishore 
                                (₹50,000 to ₹5 lakh), and Tarun (₹5 lakh to ₹10 lakh).                                </li>
                                <li ><span className='font-bold'>   Interest Rate:,</span> 7% to 14%.</li>
                                <li ><span className='font-bold'>   Tenure:</span>Up to 5 years</li>
                                <li ><span className='font-bold'> Collateral:</span>  No collateral required, as these are government-backed loans.

                                </li>
                                </ul>
                        </li>
                        <li>
                            <span className='text-black font-bold'> Invoice Discounting</span>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                            <li ><span className='font-bold'>  Purpose:</span> To meet short-term cash needs by discounting outstanding invoices.</li>
                                <li ><span className='font-bold'>   Loan Amount:</span>Based on the value of the unpaid invoices.                                </li>
                                <li ><span className='font-bold'>   Interest Rate:,</span>  9% to 20%..</li>
                                <li ><span className='font-bold'>   Tenure:</span> Short-term, until the invoices are paid.
                                </li>
                                
                            </ul>
                        </li>
                        <li>
                            <span className='text-black font-bold'> Business Overdrafts</span>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                            <li ><span className='font-bold'>  Purpose:</span>To cover short-term working capital needs.</li>
                            <li ><span className='font-bold'>   Loan Amount:</span>  Pre-determined limit based on the company's turnover and collateral.                               </li>
                                <li ><span className='font-bold'>   Interest Rate:,</span>  Typically 9% to 18%, charged only on the amount used.
                                </li>
                                <li ><span className='font-bold'>   Tenure:</span> Renewable annually.</li>
                                <li ><span className='font-bold'> Collateral:</span> Secured against business assets.

                                </li>
                                </ul>
                        </li>
                        <li>
                            <span className='text-black font-bold'> Government Schemes for Business Loans
                            </span>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                            <li ><span className='font-bold'>  Stand-Up India Scheme: </span>Loans between ₹10 lakh to ₹1 crore to support SC/ST or women 
                            entrepreneurs.</li>
                            <li ><span className='font-bold'> Pradhan Mantri Mudra Yojana (PMMY):</span> For MSMEs, offering loans under the Mudra 
                            scheme.                         </li>
                                <li ><span className='font-bold'> Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE): </span>Collateral-free 
                                loans up to ₹2 crore for MSMEs.
                                </li>
              
                            </ul>
                        </li>
                      
                    </ul>
                </div>

                <div className=' p-4'>
                  <h1 className="text-xl font-semibold mb-2 text-green-800 ">Documents Required for Business Loans:</h1>
                  <ul  className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                    <li>Business registration documents. </li>
                    <li>Financial statements (Profit & Loss, Balance Sheet).</li>
                    <li> Income tax returns (ITRs) of the business.</li>
                    <li> KYC documents of the business and owner.</li>
                    <li> Bank statements (6-12 months).</li>
                    <li> Business plan (for larger loans or startups).</li>
                    </ul>
                </div>

                
                <div className=' p-4'>
                  <h1 className="text-xl font-semibold mb-2 text-green-800 ">Eligibility Criteria:</h1>
                  <ul  className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                    <li> Business vintage: Generally, 1-3 years of operational history. </li>
                    <li>Minimum turnover requirements vary based on the loan type</li>
                    <li> CIBIL score: Typically 650 and above.</li>
                    <li>  Profitability and cash flow analysis by lenders.</li>
                   </ul>
                </div>
                <p className="text-base sm:text-lg  p-4">These loans can be availed from nationalized banks, private sector banks, Non-Banking Financial 
Companies (NBFCs), and even through fintech platforms that specialize in quick business loan 
approvals.
</p>
            </div>
        </div>
    </div>
</>
  )
}
