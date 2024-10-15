
import React from 'react';

export const CardSentimentAnalysis = () => {
    const data = [
        {
            title: "Brand Reputation Management",
            description: "Sentiment analysis can be utilized to improve brand reputation by examining online and social media mentions related to a brand, product, or service."
        },
        {
            title: "Gain competitive advantage",
            description: "Sentiment analysis aids in evaluating competitors and their marketing strategies. This allows businesses to refine their value proposition and effectively target their audience."
        },
        {
            title: "Enhance customer experience",
            description: "By analyzing customer feedback sentiment, you can gain insights into your customers’ preferences and dislikes. This enables you to address any issues and improve the overall customer experience."
        },
        {
            title: "Crisis Prevention",
            description: "Businesses can receive real-time alerts for negative comments online, allowing them to respond swiftly and resolve issues before they escalate into a social media crisis."
        },
       
    ];

    return (
        <>
            <div className="p-10  items-center text-center">
                <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-4 text-green-800">
                Let’s have a closer look at how sentiment <span className='text-green-900'>analysis can be of benefit to businesses.</span>
                </h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
                    {
                        data.map((item, index) => (
                            <div key={index} className="rounded-lg shadow-md p-8 bg-gray-50 border-green-800 border">
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
