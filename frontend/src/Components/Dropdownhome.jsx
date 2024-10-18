import React, { useState } from 'react';

export default function Dropdownhome() {
    const [add, setAdd] = useState(0); 

    const handleClick = (e) => {
        if (add === e) {
            return setAdd(null);
        }
        setAdd(e);
    };

    return (
        <div className='flex justify-center p-8'>
            <div className=''>
            <p className='text-center text-xl font-semibold text-green-800'>FAQ’s Answers</p>
            <h1 className='text-center text-3xl p-4 text-green-950 font-semibold'>Ashcon's the Expertise <span className='text-green-800'>You Can Trust</span></h1>
            <div className='max-w-6xl'>
                {data.map((item, e) => (
                    <div 
                        key={e} 
                        className={`border p-4 rounded-lg border-green-800 mb-2 transition-colors duration-300 ${add === e ? 'bg-green-800 text-white' : 'bg-opacity-70'}`}
                    >
                        <div className='flex justify-between items-center cursor-pointer' onClick={() => handleClick(e)}>
                            <h2 className='text-lg md:text-xl'>{item.title}</h2>
                            <span className='text-2xl'>{add === e ? '-' : '+'}</span>
                        </div>
                        <div className={`${add === e ? 'max-h-screen' : 'max-h-0 overflow-hidden'} `}>
                            <p className='text-md lg:text-md p-2'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div></div>
        </div>
    );
}

const data = [
    {
        title: "What Sevices Does Relish Offer?",
        description: "At Relish, we provide a wide range of digital marketing services including SEO, Social Media Marketing, PPC, Content Writing, Web Analytics, Influencer Marketing, Online Reputation Management, and more. We customize each service to fit your business needs and goals."
    },
    {
        title: "How Does Relish Develop A Digital Marketing Strategy For My Business?",
        description: "We begin by understanding your brand, target audience, and business objectives. Our team then conducts thorough market research and competitor analysis, crafting a tailored strategy designed to maximize your online presence and drive growth."
    },
    {
        title: "How Do You Measure The Success Of A Digital Marketing Campaign?",
        description: "We focus on data-driven results, using key performance indicators (KPIs) such as traffic growth, conversion rates, engagement metrics, and return on investment (ROI) to measure the effectiveness of our campaigns. We provide regular reports to keep you informed."
    },
    {
        title: "Can Relish Help Improve My Brand's Online Reputation?",
        description: "Absolutely. Our Online Reputation Management services are designed to monitor, manage, and improve your brand’s image online. We handle everything from responding to reviews to promoting positive feedback and addressing any negative sentiment."
    },
    {
        title: "How Does Relish Approach SEO?",
        description: "Our SEO strategies are comprehensive, including on-page optimization, technical SEO, content development, and link-building. We focus on improving your website’s search engine ranking organically, helping you reach your target audience more effectively."
    },
    {
        title: "What is Influencer Marketing, And How Can Relish Help?",
        description: "Influencer marketing involves collaborating with social media influencers who resonate with your target audience to promote your brand. At Relish, we connect you with the right influencers to create authentic campaigns that drive engagement and conversions."
    },
];
