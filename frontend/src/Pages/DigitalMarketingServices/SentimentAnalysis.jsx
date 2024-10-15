

import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


import { CardSentimentAnalysis } from '../../Components/CardSentimentAnalysis';


export const SentimentAnalysis = () => {

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
            

            <div className={`${isTextVisible ? 'animate-slide' : ''}`}>

            <div className=" text-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 font-serif ">
                <div className="relative">
                    <div
                        onClick={handleBack}
                        className="fixed  left-1 sm:left-2 md:left-2 bg-green-700 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
                    >
                        <FaArrowLeft className="text-2xl" />
                    </div>
                    <h1 className={`text-2xl md:text-5xl text-green-700 text-center font-bold mb- ${isTextVisible ? 'animate-slide' : ''}`}>Sentiment Analysis</h1>
                    <div className='md:flex justify-evenly gap-2 md:gap-20 items-center p-10'>
                        <div>

                            <p className='max-w-xl space-y-3 text-lg font-'>
                                <p>Eighty-nine percent of companies across various sectors primarily compete on customer experience, which is just as crucial as the quality of the final product or service provided.</p>
                                <p>To gauge how your company competes in the market and how it is perceived by consumers, customer satisfaction surveys have traditionally been the go-to method. However, imagine being able to understand what your customers truly think about your brand without relying on surveys. Envision obtaining unbiased reviews of your brand without prompting your customers. This is the value that sentiment analysis offers.</p>
                            </p>
                        </div>
                        <div>
                            <img src='https://peerdemo.in/relish/wp-content/uploads/2024/10/Sentiment-Analysis-1536x948.png' className='rounded-lg  md:max-w-lg ' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-10 bg-green-50'>
                <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold mb- text-green-700 text-center gap-3"> What is <span className='text-green-900'>Sentiment Analysis?</span>
                </h1>
                <div className='md:flex justify-center items-center p-10 gap-40'>

                    <div>
                        <img src='https://peerdemo.in/relish/wp-content/uploads/2024/10/Sentiment-Analysis2-1536x1194.png' className='rounded-lg md:max-w-72 mb-6' />
                    </div>
                    <div>

                        <p className='max-w-xl space-y- text-lg font-'>
                            <p >Have you ever posted an online review about a brand, product, or service, or shared your thoughts on your favorite movie? If you answered yes, it’s likely that your feedback has been analyzed through sentiment analysis.</p>
                            <p >Sentiment analysis is the process of identifying and classifying a piece of text based on its conveyed tone. This text can include tweets, comments, feedback, or even casual rants, which are associated with positive, negative, or neutral sentiments. The analysis extracts the meaning from the text, and a sentiment score is assigned accordingly.</p>
                        </p>
                    </div>
                </div>
            </div>

           
            <div className='p-10 bg-gray-100'>
                <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold mb- text-green-700 text-center gap-3">Why Businesses Need <span className='text-green-900'>Sentiment Analysis?</span>
                </h1>
                <div className='md:flex justify-center items-center p-10 gap-40'>

                    
                    <div>

                        <p className='max-w-xl space-y- text-lg font-'>
                            <p >The importance of sentiment analysis in business cannot be underestimated. In today’s digital landscape, where data is abundant, companies often accumulate vast amounts of customer feedback. Analyzing this data for insights can be overwhelming for humans, making it challenging to do so without bias.</p>
                            <p >Sentiment analysis can help businesses derive valuable insights from this data. Additionally, it is less time-consuming and labor-intensive, allowing for analysis across millions of data points at scale.</p>
                        </p>
                    </div>
                    <div>
                        <img src='https://peerdemo.in/relish/wp-content/uploads/2024/10/Sentiment-Analysis3-1536x1373.png' className='rounded-lg md:max-w-md mb-6' />
                    </div>
                </div>
            </div>

            <div>
               <CardSentimentAnalysis />
                </div>
                </div>
        </>
    )
}
