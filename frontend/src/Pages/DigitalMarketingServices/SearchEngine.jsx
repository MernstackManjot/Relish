
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';



export const SearchEngine = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    };


    const [isTextVisible, setIsTextVisible] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
        setIsTextVisible(true);
    }, []);

   
    return (
        <>
         

            <div  className={`${isTextVisible ? 'animate-slide' : ''}`}>
                <div className={`bg-gray-100 text-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 font-serif `} >
                    <div className="relative">
                        <div
                            onClick={handleBack}
                            className="fixed top- left-1 sm:left-1 md:left-2 bg-green-700 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
                        >
                            <FaArrowLeft className="text-2xl" />
                        </div>
                    <h1 className={`text-2xl md:text-5xl text-green-700 text-center font-bold mb-10 ${isTextVisible ? 'animate-slide' : ''}`}> Search Engine Optimization </h1>

                        <div className=" mx-auto  ">
                            <div>
                                <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 text-center ml-10"> Are you searching <span className='text-green-800'>for Best SEO company</span>
                                </h1>
                                <p className="text-base sm:text-lg text-center space-x-5 space-y-4 items-center gap-6">
                                    <p> In today’s fast-paced world, people seek instant answers to their every question, turning to search engines for everything from simple queries like “how to make toast” to more complex ones like “how to invest in the stock market.</p>
                                    <p>Search engines like Google, Yahoo, and Bing provide millions of results for each search, but most users never scroll past the first page. In fact, around 95% of web traffic goes to websites featured on the first page, leaving only 5% for those that rank lower.</p>
                                    <p>That’s where Relish comes in. As a leading SEO services company. We’re more than just another digital marketing agency — we’re your strategic partner in the digital landscape. Our expert team is dedicated to optimizing your online presence, ensuring your business secures and maintains a top position in search engine rankings.</p>
                                    <p>At Ashcon's, we offer a full range of digital marketing services tailored to increase your visibility and drive organic traffic. With a customized approach and carefully curated content, we help your business thrive in the competitive online world.</p>
                                    <p>Choose Ashcon's, your go-to digital marketing company, and let us propel your brand to the top of search engine results. Discover the impact our SEO expertise can have on your business!</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:flex justify-between p-16'>
                    <div>
                        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3"> SEO Consultancy <span className='text-green-900'> Services</span>
                        </h1>
                        <p className='max-w-xl space-y-3 text-lg font-'>
                            <p >Many businesses face challenges due to a weak or nonexistent online presence. Building your digital footprint is the first crucial step toward increasing visibility and strengthening your brand. In today’s world, people research almost everything before making a decision.</p>
                            <p >Whether it’s applying for a job, purchasing a product, or hiring a service, potential customers will search for your brand online to review your profiles across various platforms. Their perception of your business or service often hinges on what they find.</p>
                            <p >Your website serves as the foundation of your digital presence. It not only helps persuade customers but also positions you as a trusted brand, boosting your ranking on search engines.</p>
                            <p >However, managing all of this can feel overwhelming.</p>
                            <p >That’s where our SEO consultants. We thoroughly analyze your website, content, domain authority, and overall SEO performance. Using these insights, we implement strategies to enhance your SEO, helping your site rank higher on Google and other search engines.</p>
                        </p>
                    </div>
                    <div>
                        <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/3430103-removebg-preview.png' className='rounded-lg shadow-lg md:max-w-2xl' />
                    </div>
                </div>


                <div className='md:flex justify-between items-center p-16 bg-green-50 gap-14'>
                    <div>
                        <img src='https://img.freepik.com/free-vector/seo-optimization-concept-illustration_114360-25890.jpg?uid=R166271515&ga=GA1.1.830621292.1707550020&semt=ais_hybrid' className='rounded-lg md:max-w-2xl mb-6' />
                    </div>
                    <div>
                        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3"> Local <span className='text-green-900'> SEO Services</span>
                        </h1>
                        <p className='max-w-xl space-y-3 text-lg font-'>
                            <p >If your business or service has a physical location and targets a specific geographic area, Local SEO is the perfect solution for you.</p>
                            <p >Let’s say you own a restaurant in Mumbai and want to boost brand awareness and attract more customers. Which approach would be more effective: promoting your restaurant across all of India or focusing on reaching people in Mumbai? Clearly, the latter is the smarter choice.</p>
                            <p >One major advantage of Local SEO is that people conducting local searches are typically ready to take action. For example, when someone searches for “restaurants near me,” they are actively looking for a place to eat and are ready to make a decision. If your restaurant ranks first in Mumbai, there’s a strong chance they’ll visit soon.</p>
                            <p >This is why Local SEO is so important. We specialize in optimizing your business for local searches, helping you secure that top spot on Google and driving more foot traffic to your business.</p>
                        </p>
                    </div>

                </div>


                <div className='md:flex justify-between p-16'>
                    <div>
                        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3"> Why Your Brand Needs  <span className='text-green-900'>a Strong Social <br />Media Presence</span>
                        </h1>
                        <p className='max-w-xl space-y-3 text-lg font-'>
                            <p >As a leading SEO agency with clients across the globe, we understand what it takes to build and sustain a competitive edge on an international scale.</p>
                            <p >If your brand operates in multiple regions or countries, we provide tailored, effective solutions to help you succeed globally. While based in India, our team has extensive experience managing SEO for businesses located in various parts of the world.</p>
                            <p >Our SEO experts constantly monitor emerging trends, keywords, and strategies within your niche and target markets. We also keep a close eye on your competitors, ensuring we find smarter strategies to help you outrank them and achieve higher visibility.</p>

                        </p>
                    </div>
                    <div>
                        <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/imagek.png' className='rounded-lg  md:max-w-2xl' />
                    </div>
                </div>


                <div className='md:flex justify-between items-center p-16 bg-gray-100 gap-14'>
                    <div>
                        <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/image23.png' className='rounded-lg  md:max-w-2xl mb-6' />
                    </div>
                    <div>
                        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3">Keywords<span className='text-green-900'>Research Analysis</span>
                        </h1>
                        <p className='max-w-xl space-y-3 text-lg font-'>
                            <p >Keywords are the cornerstone of SEO</p>
                            <p >To improve the ranking of a website or any content, such as blogs or webpages, the first and most critical factor is the keyword. Our SEO research team dedicates significant time to using advanced keyword research tools, identifying the most effective keywords for every piece of content we publish, focusing on those with strong search volume and optimal cost-per-click.</p>
                            <p >For websites with lower domain and page authority, targeting less competitive keywords is essential for achieving top rankings. Our team carefully selects keywords tailored to your niche, using strategic, competitive keywords to help you surpass your competitors in search results.</p>

                        </p>
                    </div>

                </div>

                <div className='md:flex justify-between p-16'>
                    <div>
                        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3">Link<span className='text-green-900'>Building Services</span>
                        </h1>
                        <p className='max-w-xl space-y-3 text-lg font-'>
                            <p >As a leading SEO agency with clients across the globe, we understand what it takes to build and sustain a competitive edge on an international scale.</p>
                            <p >If your brand operates in multiple regions or countries, we provide tailored, effective solutions to help you succeed globally. While based in India, our team has extensive experience managing SEO for businesses located in various parts of the world.</p>
                            <p >Our SEO experts constantly monitor emerging trends, keywords, and strategies within your niche and target markets. We also keep a close eye on your competitors, ensuring we find smarter strategies to help you outrank them and achieve higher visibility.
                            </p>

                        </p>
                    </div>
                    <div>
                        <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/image32-1.png' className='rounded-lg  md:max-w-2xl md:mr-20' />
                    </div>
                </div>
            </div>
        </>
    )
}
