
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const SocialMedia = () => {

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
                            <h1 className="text-xl ml-10 sm:text-2xl md:text-3xl font-bold mb-4 text-green-800 text-center">Social Media Marketing (SMM)</h1>
                            <p className="text-base sm:text-lg">
                                We help you build and engage with your audience on the most relevant social media platforms, such
                                as Facebook, Instagram, Twitter, LinkedIn, and YouTube. Our social media campaigns are designed to
                                boost brand awareness, increase website traffic, and generate leads.

                            </p>
                        </div>



                        <div>
                            <h2 className="text-xl mt-10 font-semibold mb-2 text-green-800">Our Social Media Services Include:</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                <li><span className='text-black font-bold'>Content Creation & Management:</span>   Developing a social media content calendar, managing
                                    your accounts, and posting regularly.
                                </li>
                                <li> <span className='text-black font-bold'>Paid Social Media Campaigns:</span>    Facebook Ads, Instagram Ads, LinkedIn Ads, and Twitter Ads
                                    targeting specific demographics to generate leads.

                                </li>
                                <li><span className='text-black font-bold'>E-commerce Solutions:</span>  Developing online stores with user-friendly navigation, secure
                                    payment systems, and inventory management features to help you sell products effectively.</li>
                                <li> <span className='text-black font-bold'> Community Engagement:</span>   Interacting with your audience, responding to comments and
                                    messages, and growing your social media following.</li>
                                <li><span className='text-black font-bold'>  Influencer Marketing:</span>  Collaborating with influencers to promote your brand to a broader
                                    audience.</li>

                            </ul>
                        </div>


                    </div>
                </div>



            </div>
        </>
    )
}
