
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { SiTicktick } from "react-icons/si";


export const PayPerClick = () => {

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

            <div className=" text-gray-800 p-6 sm:p-8 md:p-10 lg:p-10 font-serif ">
                <div className="relative">
                    <div
                        onClick={handleBack}
                        className="fixed top- left-1 sm:left-2 md:left-2 bg-green-700 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
                    >
                        <FaArrowLeft className="text-2xl" />
                    </div>
                    <h1 className={`text-2xl md:text-5xl text-green-700 text-center font-bold mb-10 ${isTextVisible ? 'animate-slide' : ''}`}>PPC Company </h1>
                    <div className='md:flex justify-between items-center p-10'>
                        <div>
                            <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold mb-4 text-green-700 gap-3">Search Engine Marketing (SEM)<span className='text-green-900'> PPC Agency</span>
                            </h1>
                            <p className='max-w-xl space-y-3 text-lg font-'>
                                <p >When managing an online business or maintaining a presence across various platforms, reaching a broad audience with your content can be challenging.</p>
                                <p >Building your online presence and attracting new organic traffic can feel as demanding as running the business itself.</p>
                                <p>This is where paid online advertising, like PPC (Pay-Per-Click), comes in. It’s an effective solution to capture the attention of your target audience and drive them to your website.</p>
                            </p>
                        </div>
                        <div>
                            <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/PPC-Agency.png' className='rounded-lg  md:max-w-md' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-green-50 p-12'>
                <h1 className="text-3xl sm:text-2xl md:text-3xl font-bold mb-5 text-green-700 text-center "> What is PPC(SEM)<span className='text-green-800'> (Pay Per Click)?</span>
                </h1>
                <p className="text-base sm:text-lg space-x- space-y-2 items-center gap-6 mb- text-center">
                    <p>Pay-Per-Click (PPC) is an online advertising model designed to drive traffic to your website through paid promotions.</p>
                    <p>In the PPC model, advertisers pay a fee to the ad publisher each time a user clicks on their ad.</p>
                    <p>PPC services are commonly linked to search engines like Google Ads and Microsoft Advertising (Bing Ads).</p>
                    <p>Recently, major social media platforms such as Facebook, LinkedIn, Twitter, and Pinterest have also embraced the PPC advertising model, offering businesses more opportunities to reach their target audiences.</p>

                </p>
            </div>

            <div className='bg-gray-100 p-12'>
                <h1 className="text-3xl sm:text-2xl md:text-3xl font-bold mb-5 text-green-700 text-center "> Our Best<span className='text-green-800'> PPC services</span>
                </h1>
                <p className="text-base sm:text-lg space-x- space-y-2 items-center gap-6  text-center">
                    <p>When you’re new to search engine marketing, it can be challenging to determine which types of ads will be most effective for your business and which methods will drive the most traffic. To help you get started, we’ve outlined the different types of PPC ads you can consider and how our team can assist you in choosing the best approach.</p>
                </p>
            </div>


            <div className='md:flex justify-evenly items-center p-10'>
                <div>
                    <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 texgreen-700 gap-3">Search<span className='text-green-900'> ads</span>
                    </h1>
                    <p className='max-w-xl space-y-3 text-lg font-'>
                        <p >Search ads are the most widely used type of online advertisement. You’ll often see them whenever you search for something on the internet.</p>
                        <p >These sponsored websites appear at the top and bottom of the search results page and are marked with an “Ad” label to show that they are paid placements. Search ads typically consist of text and a link to the advertiser’s website.</p>

                    </p>
                </div>
                <div>
                    <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/ss-1536x1020.png' className='rounded-lg  md:max-w-sm ' />
                </div>
            </div>

            <div className='md:flex justify-evenly  items-center p-10 bg-gray-100'>
                <div>
                    <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/Search-ads-1536x1382.png' className='rounded-lg  md:max-w-sm ' />
                </div>
                <div>
                    <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3">Display<span className='text-green-900'> ads</span>
                    </h1>
                    <p className='max-w-xl space-y-3 text-lg font-'>
                        <p >Display ads are advertisements that appear across various websites within the Google Display Network. These ads are shown on partner sites and are designed to target users interested in your product or those who have visited similar websites.</p>
                        <p >Typically, display ads feature eye-catching images and compelling text to grab the viewer’s attention and encourage engagement.</p>

                    </p>
                </div>

            </div>




            <div className='md:flex justify-evenly  items-center p-10'>
                <div>
                    <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3">Social<span className='text-green-900'> ads</span>
                    </h1>
                    <p className='max-w-xl space-y-3 text-lg font-'>
                        <p >Pay-per-click advertising has now been embraced by major social media platforms like Facebook, Instagram, Twitter, LinkedIn, and others. Ads that appear across these platforms are known as social ads.</p>
                        <p >Social ads are highly effective, as around 91% of social media users access these platforms through mobile devices. This offers a significant advantage for advertisers.</p>
                        <p>For instance, users searching for “restaurants near me” on their phones are more likely to take immediate action compared to those conducting the same search on a laptop or desktop.</p>
                    </p>
                </div>
                <div>
                    <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/social-1536x1511.png' className='rounded-lg  md:max-w-sm ' />
                </div>
            </div>

            <div className='md:flex justify-evenly items-center p-10 bg-gray-100'>
                <div>
                    <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/Remarketing-1536x1339.png' className='rounded-lg  md:max-w-72 ' />
                </div>
                <div>
                    <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3">Remarketing <span className='text-green-900'> ads</span>
                    </h1>
                    <p className='max-w-xl space-y-3 text-lg font-'>
                        <p >Remarketing is a powerful tool in PPC marketing. It allows you to target individuals who have already shown interest in your product or service.</p>
                        <p >This audience consists of people who have previously interacted with your brand, making them more likely to convert.</p>
                        <p>This audience consists of people who have previously interacted with your brand, making them more likely to convert.  </p>
                    </p>
                </div>
            </div>



            <div className='md:flex justify-evenly items-center p-10'>
                <div>
                    <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3">Google <span className='text-green-900'> shopping</span>
                    </h1>
                    <p className='max-w-xl space-y-3 text-lg font-'>
                        <p >Google Shopping ads are a highly effective form of paid advertising for product marketing. These ads appear in a carousel format, showcasing a range of similar products from various websites.</p>
                        <p >SServing as a digital storefront, Google Shopping ads allow users to browse products, read customer reviews, compare options, and select the best deal—all in one place. It’s an ideal platform for online window shopping, making it easy for consumers to explore their choices.</p>

                    </p>
                </div>
                <div>
                    <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/goggle-1536x1234.png' className='rounded-lg  md:max-w-sm ' />
                </div>
            </div>


            <div className='md:flex justify-evenly items-center p-10 bg-gray-100'>
                <div className='text-center'>
                    <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/gmail-1536x903.png' className='rounded-lg  md:max-w-md text-center ' />
                </div>
                <div>
                    <h1 className="text-2xl  sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3">Gmail sponsored  <span className='text-green-900'> promotions</span>
                    </h1>
                    <p className='max-w-xl space-y-3 text-lg font-'>
                        <p >Gmail Sponsored Promotions offer an excellent way to advertise directly within a user’s inbox, making it a powerful tool for promoting your business.</p>
                        <p >These ads can be tailored to reach a specific audience and can also be personalized for greater impact.</p>
                        <p>Gmail promotional emails appear at the top of the inbox on both mobile and desktop devices, marked with an “Ad” label before the subject line. Personalized emails with eye-catching subject lines and proper formatting typically achieve higher open and click-through rates.</p>
                    </p>
                </div>
            </div>



            <div className='md:flex justify-evenly items-center p-10'>
                <div>
                    <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-green-700 gap-3">Instream<span className='text-green-900'> ads</span>
                    </h1>
                    <p className='max-w-xl space-y-3 text-lg font-'>
                        <p >If you use the internet, you’ve likely encountered an instream ad, which is commonly seen on YouTube. Instream ads include those that play before or during a video, as well as display ads that appear within the video screen itself. With 64% of internet users on YouTube, these ads provide a great opportunity to creatively reach your target audience.</p>


                    </p>
                </div>
                <div>
                    <img src='https://peerdemo.in/relish/wp-content/uploads/2024/09/Instream-ads-1536x1522.png' className='rounded-lg  md:max-w-72 ' />
                </div>
            </div>
            </div>
        </>
    )
}
