import React from 'react'
import { Link } from 'react-router-dom'

export const AboutHome = () => {
  return (
 <>
  <div className={`md:flex justify-evenly items-center p-10 gap-20 `}   >
        <div>
          <h1 className="text-lg md:text-xl font-bold text-green-700">About Relish</h1>
          <h1 className="text-2xl md:text-3xl font-bold mb-5 text-green-950">Relish the Art  <span className='text-green-700'>of Digital Growth</span></h1>
          <p className="mb-5 text-sm md:text-lg max-w-xl mx-auto font-semibold">
          At Relish, we believe in delivering digital marketing solutions that your brand can truly savor. As a full-service digital marketing agency, we specialize in creating customized strategies that resonate with your audience and amplify your online presence From social media management to SEO, content creation, and paid advertising, we blend creativity with data-driven insights to ensure your business stands out in today’s competitive digital landscape.
          </p>
          <p className="mb-5 text-sm md:text-lg max-w-xl mx-auto font-semibold">
          Our team of passionate marketers, designers, and strategists is dedicated to helping your brand grow by crafting compelling campaigns that drive.
          </p>
                  <Link to="/about"><button  className={`bg-green-900 text-white py-3 px-8 mt-5 rounded-lg font-bold transition duration-300 transform hover:bg-green-950 hover:scale-105 active:scale-95 `} >
                     Read More
                        </button></Link>
        </div>
        <div className='h-96'>
          <img
            src="https://peerdemo.in/relish/wp-content/uploads/2024/10/about-1536x1290.png"
            alt="Background"
            className="w-full h-full rounded"
          />
        </div>
      </div>
 </>
  )
}
