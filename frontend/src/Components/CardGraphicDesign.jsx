import React from 'react';

export const CardGraphicDesign = () => {
    const data = [
        {
            title: "Logo Design & Branding",
            description: "Designing impactful logos and cohesive brand elements that effectively convey your company’s vision and core values."
        },
        {
            title: "Website Graphics & UI Design",
            description: "Crafting website interfaces that are visually captivating, user-friendly, and perfectly aligned with your brand identity."
        },
        {
            title: "Social Media Graphics",
            description: "Tailor-made posts, banners, and ads that enhance engagement across platforms such as Instagram, Facebook, LinkedIn, and Twitter."
        },
        {
            title: "Infographics & Illustrations",
            description: "Creating visually striking infographics that present complex information in a clear and accessible format."
        },
        {
            title: "Email Newsletter Design",
            description: "Designing stunning and impactful email templates that capture attention and drive user engagement."
        },
        {
            title: "Digital Ad Design",
            description: "Developing engaging ad creatives for platforms such as Google Ads, Facebook Ads, and other paid digital marketing campaigns."
        },
        {
            title: "Marketing Collateral",
            description: "Creating brochures, flyers, business cards, and other promotional materials that enhance your digital presence."
        },
    ];

    return (
        <>
            <div className="p-6 bg-green-100 items-center text-center">
                <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-950">
                    Our Graphic Design <span className='text-green-800'>Services Include:</span>
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
