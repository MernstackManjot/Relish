
import React from 'react';

export const CardOnlineReputationManagement = () => {
    const data = [
        {
            title: "Our ORM Services",
            description: "Creating a powerful corporate brand starts with an even stronger reputation. Safeguard, elevate, and reinforce your brand with a tailored corporate reputation strategy."
        },
        {
            title: "Celebrity Reputation",
            description: "We publish targeted content on lifestyle blogs and news websites. Whether you aim to protect your privacy, promote positive content, counter rumors, or boost visibility, we align with your communication objectives to achieve your goals."
        },
        {
            title: "Personal Reputation",
            description: "Take control of your image by building a strong, lasting online reputation that withstands attacks, negativity, and misinformation."
        },
        {
            title: "Our ORM Services",
            description: "We help minimize the impact of factors that negatively affect your business reputation. Our highly skilled team is dedicated to addressing these issues and focusing on the key elements that drive your reputation forward."
        },
       
    ];

    return (
        <>
            <div className="p-10 bg-gray-50 items-center text-center">
                <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-950">
                Our Web Development <span className='text-green-800'>Services Include:</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
                    {
                        data.map((item, index) => (
                            <div key={index} className="rounded-lg shadow-md p-8 bg-white border-green-800 border">
                                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};
