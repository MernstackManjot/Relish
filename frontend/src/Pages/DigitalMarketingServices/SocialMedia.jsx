
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { SiTicktick } from "react-icons/si";
import { SocialMediaMarketing } from '../../Components/SocialMediaMarketing';


export const SocialMedia = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    };

    const [isTextVisible, setIsTextVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsTextVisible(true);
    }, []);
    return (
        <>


            <div className={`${isTextVisible ? 'animate-slide' : ''}`}>
                <div className=" text-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 font-serif ">
                    <div className="relative">
                        <div
                            onClick={handleBack}
                            className="fixed top- left-1  bg-green-700 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center z-10"
                        >
                            <FaArrowLeft className="text-2xl" />
                        </div>
                        <h1 className={`text-3xl  text-green-700 text-center md:text-5xl font-bold mb- ${isTextVisible ? 'animate-slide' : ''}`}>Social Media Marketing  </h1>

                        <div className='md:flex justify-between p-10'>
                            <div>
                                <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3"> Why Your Brand Needs a <span className='text-green-900'> Strong Social Media Presence</span>
                                </h1>
                                <p className='max-w-xl space-y-3 text-lg font-'>
                                    <p >Approximately 73% of marketers agree that Social Media Marketing is more effective than other marketing platforms. A strong online presence is key to driving real conversions through social media.</p>
                                    <p >When an ad campaign runs on any platform, the first thing people do is visit your social media page. Your brand’s social profile plays a crucial role in encouraging them to take the next step. Establishing a robust social media presence offers several benefits, including:</p>
                                    <ul className='text-lg space-y-2'>
                                        <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Boosting brand awareness service</li>
                                        <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Strengthening brand authority</li>
                                        <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Building trust with your audience</li>

                                        <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Connecting and engaging with your target market</li>
                                        <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Gaining better insights into customer needs</li>
                                    </ul>
                                </p>
                            </div>
                            <div>
                                <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/25.png' className='rounded-lg  md:max-w-2xl' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-green-50 p-12'>
                    <h1 className="text-3xl sm:text-2xl md:text-3xl font-bold mb-5 text-green-700 text-center "> Our Social Media<span className='text-green-800'> Marketing Services</span>
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-green-700 ">Social Media<span className='text-gray-800'> Optimization (SMO):</span></h2>
                    <p className="text-base sm:text-lg space-x- space-y-2 items-center gap-6 mb-10">
                        <p>Many brands and companies have accounts on multiple social media platforms but struggle to attract traffic or generate conversions. The reason? Their social profiles and content are not optimized.</p>
                        <p>Optimizing for social media is entirely different from optimizing a website, and it’s easy to feel overwhelmed by the process.</p>
                        <p>That’s where Relish comes in. Our Social Media Marketing team specializes in optimizing your social media profiles, whether you’ve had an account for years or are just getting started. We know the exact strategies that will work for your business.</p>
                        <p>Two key factors for gaining organic reach and driving traffic are Social Media Optimization and Engaging Content Creation. A well-optimized social media profile and compelling content not only make your brand look professional but also increase visibility, attract your target audience, and position you as an authority in your industry. Let us help you unlock the full potential of your social media presence!</p>

                    </p>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-green-700 ">Social Media<span className='text-ggreen-800'> Marketing</span></h2>
                    <p className="text-base sm:text-lg space-x- space-y-2 items-center gap-6">
                        <p>Every hour, thousands of pieces of content are posted across various categories, hashtags, and topics. In such a crowded space, relying solely on organic methods may not always be enough to reach a wider audience or drive significant traffic and conversions. This is when businesses turn to paid social media advertising.</p>
                        <p>Running ads on social media is not only cost-effective but also provides valuable insights into your target audience. A person’s social profile can reveal key information about their personality, interests, and preferences. Understanding these details is crucial for businesses looking to offer products or services that truly resonate with their audience.</p>
                        <p>Our expert Social Media Marketing team at Relish simplifies this process for you. We help define clear goals for each ad campaign, ensuring you get the results you’re after, no matter which social platform you choose.</p>
                        <p>With years of experience working with a variety of brands and industries, we know exactly where to find your target audience and how to make your content stand out. Let us help you run effective, data-driven ad campaigns that drive real engagement and results.</p>

                    </p>
                </div>
                <div className='z-0'>
                    <SocialMediaMarketing />
                </div>

                <div className='md:flex justify-center  p-16  gap-14'>
                    <div>
                        <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/881.jpg' className='rounded-lg md:max-w-sm mb-6' />
                    </div>
                    <div>
                        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3">Our services include <span className='text-green-900'>platforms such as</span>
                        </h1>
                        <ul className='text-lg space-y-2'>
                            <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Facebook</li>
                            <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Twitter</li>
                            <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Instagram</li>

                            <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />LinkedIn</li>
                            <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />YouTube</li>
                            <li className='flex items-center gap-3'><SiTicktick className='text-green-800' />Pinterest</li>
                        </ul>
                    </div>

                </div></div>
        </>
    )
}
