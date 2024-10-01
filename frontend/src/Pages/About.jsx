import React, { useEffect } from 'react';
import { HiPaperAirplane } from "react-icons/hi2";
export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-green-50 text-gray-800 p-6 sm:p-8 md:p-10 lg:p-7 font-serif">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-green-800">About Us</h1>
          <p className="text-base sm:text-lg">
            Welcome to Relish Consultancy & Marketing, where we blend expertise and innovation to help
            businesses thrive in today’s dynamic marketplace. As a dedicated proprietorship firm, we specialize
            in three core areas: Digital Marketing, Export-Import, and Financial & Loan Consultancy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-green-800">Our Mission</h2>
          <p className="text-base sm:text-lg">
            At Relish, we are committed to driving growth and unlocking opportunities for businesses and
            individuals alike. Our mission is to provide tailored, results-driven solutions that empower our clients
            to succeed in a competitive environment.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-green-800">Our Services</h2>
          <ul className="list-decimal pl-5 space-y-2 text-base sm:text-lg">
            <li><span className='font-bold'> Digital Marketing</span><br/>In the digital age, visibility is key. We offer end-to-end digital marketing services, including
              social media management, SEO, online advertising, and content creation, ensuring your
              brand stands out and reaches the right audience.</li>
            <li><span className='font-bold'> Export-Import Consultancy</span><br/>Navigating global trade can be challenging. With our expertise in export-import regulations,
              compliance, and market entry strategies, we assist businesses in expanding their footprint
              internationally, simplifying the complexities of cross-border trade.</li>
            <li><span className='font-bold'> Financial & Loan Consultancy</span><br/>Financial planning is critical for sustainable growth. We provide personalized financial
              consulting services, including business financing, loans, and investment strategies, designed
              to help our clients manage their financial health and meet their goals.</li>

          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-green-800">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
            <li><span className='font-bold'>  Client-Centric Approach:</span> We believe in building lasting relationships with our clients, offering 
            tailored solutions that meet their unique needs.</li>
            <li><span className='font-bold'> Expertise & Experience: </span> With years of experience across industries, we bring deep market 
            insights to every project.</li>
            <li><span className='font-bold'> Results-Oriented:</span> We focus on delivering measurable outcomes that add real value to our 
            clients.</li>

          </ul> 
        </div>

       
      </div>
    </div>
  );
};
