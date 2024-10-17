import React from 'react';

export const CardVernacularMultilingualMarketing = () => {
    const data = [
        {
            title: "Multilingual SEO",
            description: "We optimize your website's content for multiple languages, ensuring that you become discoverable in new markets."
        },
        {
            title: "Multilingual Content Writing",
            description: "We provide top-notch content writing services tailored in various languages and formats."
        },
        {
            title: "Multilingual SMM",
            description: "We assist you in expanding your business across multiple languages, unlocking opportunities to connect with a broader audience."
        },
        {
            title: "Multilingual PPC",
            description: "We customize campaigns to align with the local language, enhancing their effectiveness and driving more business to you."
        },
       
    ];

    return (
        <>
            <div className="p-10  items-center text-center">
                <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold mb-4 text-green-950">
                Our Vernacular <span className='text-green-800'>Marketing Services Cover</span>
                </h1>
                <p className=' md:text-center md:ml-10 text-lg font'>Relish Multilingual Marketing Services help you identify the ideal target audience and languages using real data insights. We craft a tailored marketing strategy and employ a customized approach for each language and audience, incorporating the right blend of digital marketing tactics such as SEO, PPC, and social media.</p>
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
