import React from 'react'; // Import the React library
import phone from '../assets/phone.svg'; // Import an image
import email from '../assets/email.svg'; // Import another image

function Footer() {
  return (
    <footer className='bg-white pt-[10rem] pb-[5rem]'>
      <div className="mx-auto max-w-[133rem] px-[2.5rem]">
        <div className="flex flex-col gap-[1rem] lg:flex-row justify-between text-center lg:text-left text-[#010103]">

          <div className='flex flex-col gap-[1rem] items-center lg:items-start md:flex-row'>
            {/* Company Information */}
            <ul className='list-none max-w-[50%] w-1/2 mb-[5rem] md:mb-0'>
              <li className='text-[2.4rem] mb-[1.5rem]'>
                <span className='font-bold'>Car </span>
                Rental
              </li>
              <li className='text-[#706f7b] text-[1.6rem] mb-[3rem]' style={{ lineHeight: 1.6 }}>
                We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
              </li>
              <li className='flex items-start justify-center lg:justify-start text-[1.6rem] mb-[1rem] font-medium'>
                <img src={phone} alt='phone' />
                <a href='tel:000000'>
                  (123)-456-789
                </a>
              </li>
              <li className='flex items-start justify-center lg:justify-start text-[1.6rem] mb-[1rem] font-medium'>
                <img src={email} alt='email' />
                <a href='mailto:carrental@gmail.com'>
                  carrental@gmail.com
                </a>
              </li>
              <li>
                <a className='text-[#010103] decoration-none transition-all duration-200 text-[14px]' target="_blank" rel="noreferrer" href="https://xpeedstudio.com/">
                  Design by XpeedStudio
                </a>
              </li>
            </ul>

            {/* Company Links */}
            <ul className='list-none max-w-[50%] w-1/2 mb-[5rem] md:mb-0'>
              <li className='cursor-auto text-[2.4rem] font-bold uppercase'>Company</li>
              <li className='text-[1.6rem] mb-[1rem]'>
                <a href="#home" className='text-[#010103] decoration-none transition-all duration-200'>New York</a>
              </li>
              <li className='text-[1.6rem] mb-[1rem]'>
                <a href="#home" className='text-[#010103] decoration-none transition-all duration-200'>Careers</a>
              </li>
              <li className='text-[1.6rem] mb-[1rem]'>
                <a href="#home" className='text-[#010103] decoration-none transition-all duration-200'>Mobile</a>
              </li>
              <li className='text-[1.6rem] mb-[1rem]'>
                <a href="#home" className='text-[#010103] decoration-none transition-all duration-200'>Blog</a>
              </li>
              <li className='text-[1.6rem] mb-[1rem]'>
                <a href="#home" className='text-[#010103] decoration-none transition-all duration-200'>How we work</a>
              </li>
            </ul>
          </div>

          {/* Working Hours and Subscription Form */}
          <div className='flex flex-col gap-[1rem] items-center lg:items-start md:flex-row'>
            {/* Working Hours */}
            <ul className='list-none max-w-[50%] w-1/2 mb-[5rem] md:mb-0'>
              <li className='cursor-auto text-[2.4rem] font-bold uppercase'>Working hours</li>
              <li className='text-[1.6rem] mb-[1rem]'>
                <a href="#home" className='text-[#010103] decoration-none transition-all duration-200'>Mon - Fri: 9:00AM - 9:00PM</a>
              </li>
              <li className='text-[1.6rem] mb-[1rem]'>
                <a href="#home" className='text-[#010103] decoration-none transition-all duration-200'>Sat: 9:00AM - 19:00PM</a>
              </li>
              <li className='text-[1.6rem] mb-[1rem]'>
                <a href="#home" className='text-[#010103] decoration-none transition-all duration-200'>Sun: Closed</a>
              </li>
            </ul>

            {/* Subscription Form */}
            <ul className='list-none max-w-[50%] w-1/2 mb-[5rem] md:mb-0'>
              <li className='cursor-auto text-[2.4rem] font-bold uppercase'>Subscription</li>
              <li className='text-[1.6rem] mb-[1rem]'>
                <a href="#home" className='text-[#010103] decoration-none transition-all duration-200'>Subscribe your Email address for latest news & updates.</a>
              </li>
              <li className='text-[1.6rem] mb-[1rem]'>
                <a href="#home" className='text-[#010103] decoration-none transition-all duration-200'>
                  <input type="email" placeholder="Enter Email Address" className='w-full lg:w-[90%] bg-[#ececec] border border-[transparent] text-[14px] font-normal mt-[1rem] py-[10px] px-[20px] lg:px-[60px] outline-none' style={{ lineHeight: '26px' }} />
                </a>
              </li>
              <li className='text-[1.6rem] mb-[1rem]'>
                <a href="#home" className='text-[#010103] decoration-none transition-all duration-200'>
                  <button className="bg-[#ff4d30] rounded-sm w-[90%] py-3 shadow-md text-white cursor-pointer text-[1.6rem] font-bold decoration-none transition-all duration-200 hover:shadow-xl">Submit</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; // Export the Footer component for use in other parts of the application
