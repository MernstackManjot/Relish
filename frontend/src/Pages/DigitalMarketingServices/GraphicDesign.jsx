import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const GraphicDesign = () => {

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
                            <h1 className="text-3xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-800 text-center"> Graphic Design</h1>
                            <p className="text-base sm:text-lg">
                                Great design speaks volumes about your brand, and at <span className='text-black font-bold'>Relish Consultancy & Marketing</span>, we
                                specialize in crafting visually compelling graphics that capture the essence of your business. Our
                                graphic design services are integrated into all aspects of your digital marketing strategy, ensuring
                                consistency across your brand's online presence.
                            </p>
                        </div>



                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-green-800 mt-10">Our Graphic Design Services Include:</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>Logo Design & Branding:</span>  Creating memorable logos and cohesive brand elements that
                                    communicate your company’s vision and values.</li>
                                <li> <span className='text-black font-bold'> Website Graphics & UI Design:</span>  Designing website interfaces that are visually appealing,
                                    intuitive, and aligned with your brand’s identity.
                                </li>
                                <li><span className='text-black font-bold'>Social Media Graphics:</span>    Custom-designed posts, banners, and ads that drive engagement on
                                    platforms like Instagram, Facebook, LinkedIn, and Twitter.
                                </li>
                                <li> <span className='text-black font-bold'>Infographics & Illustrations:</span> Developing eye-catching infographics that convey complex
                                    information in an easy-to-understand format.</li>
                                <li><span className='text-black font-bold'>Email Newsletter Design: </span>   Crafting beautiful and effective email templates that grab attention
                                    and encourage user engagement.</li>
                                <li><span className='text-black font-bold'> Digital Ad Design: </span> Creating compelling ad creatives for platforms like Google Ads, Facebook
                                    Ads, and other paid digital campaigns.
                                </li>
                                <li><span className='text-black font-bold'>Marketing Collateral:</span>   Designing brochures, flyers, business cards, and other promotional
                                    materials that complement your digital presence.</li>

                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
