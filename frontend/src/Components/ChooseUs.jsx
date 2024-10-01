import React from 'react';

export const ChooseUs = () => {
    const data = [
        {
            name: "Client-Centric Approach",
            description: "We believe in building lasting relationships with our clients, offering tailored solutions that meet their unique needs.",
            // color: "bg-red-300"
        },
        {
            name: "Expertise & Experience",
            description: "With years of experience across industries, we bring deep market insights to every project.",
            // color: "bg-green-100"
        },
        {
            name: "Results-Oriented",
            description: "We focus on delivering measurable outcomes that add real value to our clients.",
            // color: "bg-yellow-100"
        }
    ];

    return (
        <div className="relative w-full h-full object-cover overflow-hidden bg-cover bg-center bg-green-50">
            <div className="absolute inset-0 opacity-10 transform"></div>
            <div className="relative p-4 sm:p-6 md:p-20 font-serif text-center z-10 text-black">
                <h2 className="text-3xl font-bold mb-2">Why Choose Us?</h2>
                <div className="flex items-center justify-center text-center mb-6">
                    <span className=" border-b-8 rounded-full border-green-500 w-2 mx-"></span>
                    <span className=" border-b-8 rounded-full border-green-500 w-2 mx-2"></span>
                    <div className="border-b-4  border-green-500 w-20"></div>
                    <span className=" border-b-8 rounded-full border-green-500 w-2 mx-2"></span>
                    <span className=" border-b-8 rounded-full border-green-500 w-2 mx-"></span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {data.map((item, index) => (
                        <div key={index} className={`p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white ${item.color} `}>
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
