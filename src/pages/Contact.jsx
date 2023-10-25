import React from 'react'; // Import the React library
import Header from '../components/Header'; // Import the Header component
import Banner from '../components/Banner'; // Import the Banner component

import contactbg from '../assets/contactbg.webp'; // Import the background image for the Contact page
import phone from '../assets/phone.svg'; // Import the phone icon image
import email from '../assets/email.svg'; // Import the email icon image
import arrow from '../assets/arrow.svg'; // Import the arrow icon image
import openedemail from '../assets/openedemail.svg'; // Import the opened email icon image

function Contact() {
  // Define a style object for the background image
  const contactBgStyle = {
    backgroundImage: `url(${contactbg})`, // Set the background image using the imported image
    backgroundSize: 'auto', // Optionally, set the background size
    backgroundPosition: '50%', // Optionally, set the background position
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      {/* Display the header component */}
      <Header
        title="Contact"
        describe="Home / Contact"
      />

      <section className='mx-auto max-w-[133rem] px-[2.5rem]'>
        <div className='flex flex-col lg:flex-row text-[#010103] justify-between items-center mx-auto py-[10rem] px-[2rem]' style={contactBgStyle}>
          <div className='flex flex-col gap-[1rem] max-w-[41rem] mb-20 lg:mb-0'>
            <h2 className='text-[4.2rem] mb-[2rem] text-center lg:text-left' style={{ lineHeight: 1.3 }}>
              Need additional information?
            </h2>
            <p className='text-[#706f7b] text-[1.6rem] mb-[2rem] text-center lg:text-left' style={{ lineHeight: 1.6 }}>
              A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.
            </p>
            <a href='#' className='text-[1.6rem] font-medium mb-[1rem] decoration-[none] transition-all duration-200 flex flex-row justify-center lg:justify-start items-center cursor-pointer hover:text-[#ff4d30]'>
              <img src={phone} className='mr-5' alt='' />
              (123) 456-7890
            </a>
            <a href='#' className='text-[1.6rem] font-medium mb-[1rem] decoration-[none] transition-all duration-200 flex flex-row justify-center lg:justify-start items-center cursor-pointer hover:text-[#ff4d30]'>
              <img src={email} className='mr-5' alt='' />
              carrental@carmail.com
            </a>
            <a href='#' className='text-[1.6rem] font-medium mb-[1rem] decoration-[none] transition-all duration-200 flex flex-row justify-center lg:justify-start items-center cursor-pointer hover:text-[#ff4d30]'>
              <img src={arrow} className='mr-5' alt='' />
              Budapest, Hungary
            </a>
          </div>
          <div className='flex flex-col items-start w-full lg:w-[45%]'>
            <form className='flex flex-col w-full'>
              <label className='text-[1.6rem] font-semibold mb-[1rem]'>Full Name <b className='text-[#ff4d30]'>*</b></label>
              <input className='bg-[#f2f2f2] border-none text-[1.6rem] outline-none py-[19px] px-[30px] w-full mb-[2.3rem]' placeholder='E.g.: "Joe Sins' />
              <label className='text-[1.6rem] font-semibold mb-[1rem]'>Email <b className='text-[#ff4d30]'>*</b></label>
              <input className='bg-[#f2f2f2] border-none text-[1.6rem] outline-none py-[19px] px-[30px] w-full mb-[2.3rem]' placeholder='youremail@example.com' />
              <label className='text-[1.6rem] font-semibold mb-[1rem]'>Tell us about it <b className='text-[#ff4d30]'>*</b></label>
              <textarea className='h-[18rem] bg-[#f2f2f2] border-none text-[1.6rem] outline-none py-[19px] px-[30px] w-full mb-[2.3rem]' placeholder='Write here...' />
              <button type='submit' className='bg-[#ff4d30] rounded-lg shadow-lg hover:shadow-xl cursor-pointer text-[1.8rem] font-semibold py-[1.8rem] px-[3rem] transition-all duration-300 text-white text-center flex flex-row justify-center items-center'>
                <img src={openedemail} className='mr-4' alt='' />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Display the Banner component */}
      <Banner />
    </>
  );
}

export default Contact;
