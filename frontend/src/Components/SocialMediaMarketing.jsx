import React, { useEffect, useState, useRef } from 'react';

export const SocialMediaMarketing = () => {
    const data = [
        {
            target: 99,
            name: "Instagram",
            suffix: "%",
            speed: 10,
        },
        {
            target: 92,
            name: "Facebook",
            suffix: "%",
            speed: 10,
        },
        {
            target: 98,
            name: "Twitter",
            suffix: "%",
            speed: 10,
        },
     
    ];

    const [counters, setCounters] = useState(data.map(item => ({ number: 0, name: item.name, suffix: item.suffix })));
    const sectionRef = useRef(null); 

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach((counter, index) => {
                        const target = data[index].target;
                        let count = 0;
                        const speed = data[index].speed;

                        const interval = setInterval(() => {
                            if (count < target) {
                                count++;
                                setCounters(prev => {
                                    const newCounters = [...prev];
                                    newCounters[index].number = count;
                                    return newCounters;
                                });
                            } else {
                                clearInterval(interval);
                            }
                        }, speed);
                    });
                    observer.unobserve(entry.target); 
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.9 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className='relative w-full h-[580px] md:h-[200px] lg:h-[300px] z-0 overflow-hidden font-thin'>
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src="relishvideo9.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="justify-center  absolute inset-0 items-center text-white z-0 bg-black bg-opacity-100 text-center p-4">
                <h1 className="text-2xl md:text-4xl font-bold mb-10 p-5">Leading 3 Social Networks for Businesses</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                    {counters.map((item, index) => (
                        <div key={index} className={`p-4 border-2 border-green-700 rounded-lg shadow-md hover:shadow-lg transition duration-300 font-serif`}>
                            <h3 className="text-2xl font-semibold mb-2">{item.number.toLocaleString()}{item.suffix}</h3>
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
