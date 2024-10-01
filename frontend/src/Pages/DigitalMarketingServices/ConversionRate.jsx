
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const ConversionRate = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
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
        <div className="max-w-4xl mx-auto ">
                        <div>
                            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-800 text-center"> Conversion Rate Optimization (CRO)</h1>
                            <p className="text-base sm:text-lg">
                                We help businesses maximize the number of visitors who take action on their website, whether
                                that’s making a purchase, filling out a contact form, or signing up for a newsletter. Our CRO services
                                ensure that your website turns visitors into customers efficiently.
                            </p>
                        </div>



                        <div>
                            <h2 className="text-xl mt-10 font-semibold mb-2 text-green-800">Our CRO Services Include:
                            </h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>Website Analysis:</span>   Auditing your website to identify conversion bottlenecks.</li>
                                <li> <span className='text-black font-bold'> A/B Testing: </span>  Testing different versions of web pages to see what works best.
                                </li>
                                <li><span className='text-black font-bold'>User Experience (UX) Improvements:</span>   Enhancing site navigation, load times, and mobile-friendliness to boost conversion rates.</li>


                            </ul>
                        </div>


                    </div>
                </div>



            </div>
        </>
    )
}
