
import React from 'react';

export const CardWebDevelopment = () => {
    const data = [
        {
            title: "Custom Website Design & Development",
            description: "Tailored website solutions that reflect your brand identity and meet your specific business needs"
        },
        {
            title: "Responsive Design",
            description: "Ensuring that your website is fully optimized for mobile, tablet, and desktop users for a seamless experience across all devices."
        },
        {
            title: "E-commerce Solutions",
            description: "Developing online stores with user-friendly navigation, secure payment systems, and inventory management features to help you sell products effectively."
        },
        {
            title: "Content Management Systems (CMS)",
            description: "Implementing user-friendly platforms like WordPress, Shopify, and Magento, enabling easy management of your website content without requiring technical knowledge."
        },
        {
            title: "SEO-Friendly Websites",
            description: "Creating websites optimized for search engines, ensuring that your business ranks higher and attracts organic traffic."
        },
        {
            title: "Website Maintenance & Support",
            description: "Offering ongoing website updates, troubleshooting, and technical support to ensure your site functions optimally at all times."
        },
        {
            title: "Web Performance Optimization",
            description: "Speed optimization to enhance user experience, reduce bounce rates, and improve SEO rankings."
        },
    ];

    return (
        <>
            <div className="p-6 bg-green-50 items-center text-center">
                <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700">
                Our Web Development <span className='text-green-900'>Services Include:</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
                    {
                        data.map((item, index) => (
                            <div key={index} className="rounded-lg shadow-md p-8 bg-white border-red-800 border">
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
