import React, { useEffect } from 'react';
import { HiPaperAirplane } from "react-icons/hi2";
import { HomeChoose } from '../Components/HomeChoose';
import { Deliveringexcellence } from '../Components/Deliveringexcellence';
export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <div className='relative w-full h-[90px] md:h-[200px] lg:h-[180px] overflow-hidden font-thin'>
     <video 
        className="absolute inset-0 w-full h-full object-cover " 
        autoPlay
        loop
        muted
      >
        <source src="relishvideo9.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

                <div className="justify-center absolute inset-0 flex items-center bg-black bg-opacity-0 text-white text-center p-4">
                    <h1 className={`text-2xl md:text-5xl font-bold mb- `}>About Us  </h1>
                </div>
            </div>
     <div className={`md:flex justify-evenly items-center p-10 gap-20 `}   >
        <div>
          <h1 className="text-lg md:text-xl font-bold text-green-800">About Relish</h1>
          <h1 className="text-2xl md:text-3xl font-bold mb-5 text-green-950">Relish the Art  <span className='text-green-800'>of Digital Growth</span></h1>
          <p className="mb-5 text-sm md:text-lg max-w-xl mx-auto ">
          At Relish, we believe in delivering digital marketing solutions that your brand can truly savor. As a full-service digital marketing agency, we specialize in creating customized strategies that resonate with your audience and amplify your online presence From social media management to SEO, content creation, and paid advertising, we blend creativity with data-driven insights to ensure your business stands out in today’s competitive digital landscape.
          </p>
          <p className="mb-5 text-sm md:text-lg max-w-xl mx-auto ">
          Our team of passionate marketers, designers, and strategists is dedicated to helping your brand grow by crafting compelling campaigns that drive engagement and results. At Relish, we don’t just market — we create experiences that leave a lasting impression.
          </p>
          <p className="mb-5 text-sm md:text-lg max-w-xl mx-auto ">
          We specialize in crafting dynamic digital marketing strategies that drive growth and enhance brand visibility.
          </p>
        </div>
        <div className='h-96'>
          <img
            src="https://peerdemo.in/relish/wp-content/uploads/2024/10/about-1536x1290.png"
            alt="Background"
            className="w-full h-full rounded"
          />
        </div>
      </div>
      <Deliveringexcellence />
    <div className="  bg-gray-100 p-6 sm:p-8 md:p-10 lg:p-7 ">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* <div>
          <h1 className="text-3xl font-bold mb-4 text-green-800">About Us</h1>
          <p className="text-base sm:text-lg">
            Welcome to Relish Consultancy & Marketing, where we blend expertise and innovation to help
            businesses thrive in today’s dynamic marketplace. As a dedicated proprietorship firm, we specialize
            in three core areas: Digital Marketing, Export-Import, and Financial & Loan Consultancy.
          </p>
        </div> */}

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
            <li><span className='font-bold'>Education Consultancy</span><br/>Navigating the education landscape can be daunting. Our consultancy offers personalized guidance on academic pathways, admissions strategies, and career planning. We empower students and parents with the insights needed to make informed decisions, ensuring a successful educational journey.</li>

          </ul>
        </div>

        {/* <div>
          <h2 className="text-2xl font-semibold mb-2 text-green-800">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
            <li><span className='font-bold'>  Client-Centric Approach:</span> We believe in building lasting relationships with our clients, offering 
            tailored solutions that meet their unique needs.</li>
            <li><span className='font-bold'> Expertise & Experience: </span> With years of experience across industries, we bring deep market 
            insights to every project.</li>
            <li><span className='font-bold'> Results-Oriented:</span> We focus on delivering measurable outcomes that add real value to our 
            clients.</li>

          </ul> 
        </div> */}


       
      </div>
    </div>


    <HomeChoose />
    </>
  );
};
