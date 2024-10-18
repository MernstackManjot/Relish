import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(import.meta.env.VITE_API_URL, formData);
      
      setResponseMessage(response.data.message);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to send message';
      setResponseMessage(errorMessage);
      alert(`Failed to send message: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Spinner = () => (
    <div className='text-center flex justify-center '>
    <div className="animate-spin h-5 w-5 border-4 border-t-transparent border-white rounded-full text-center"></div>
    </div>
  );
   

  return (
    <>
    <div className='relative w-full h-[90px] md:h-[200px] lg:h-[180px] overflow-hidden font-thin'>
    <video 
        className="absolute inset-0 w-full h-full object-cover " 
        autoPlay
        loop
        muted
      >
        <source src="/relishvideo9.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

                <div className="justify-center absolute inset-0 flex items-center bg-black bg-opacity-0 text-white text-center p-4">
                    <h1 className={`text-2xl md:text-5xl font-bold mb- `}>Contact Us  </h1>
                </div>
            </div>
    <div className="text-gray-900  p-8 md:p-12 lg:p-16 font-sans">
      <div className="max-w-4xl mx-auto space-y-">
        <h1 className="text-4xl text-gray-800  text-center"></h1>

<div className="">
        {/* <div className=' flex justify-center '>
            <video 
        className=" max-w-96 rounded-full  object-cover " 
        autoPlay
        loop
        muted
      >
        <source src="relishcontact.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video></div> */}
        <div>
        <p className="text-lg md:text-xl mb-6 text-center">
          Please fill the form below to contact us if you have any queries
        </p>

        

      
        <div className="flex justify-center">
        
          <div className="bg-gray-50 p-8 rounded-lg shadow-xl w-full sm:w-10/12 lg:w-8/12">
          
            <form className="space-y-6  " onSubmit={handleSubmit}>
            
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone No</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                />
              </div>

              <div>
                <button
  type="submit"
  className={`w-full px-4 py-2 rounded-md text-white ${isSubmitting ? 'bg-gray-400 cursor-not-allowed motion-reduce:hidden' : 'bg-green-600 hover:bg-green-700'} transition-colors duration-300 ease-in-out`}
  disabled={isSubmitting}
>
  {isSubmitting ? <Spinner />  : 'Submit'}
</button>

              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
    </>
  );
};
