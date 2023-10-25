import React from 'react'; // Import the React library
import quote from '../assets/quote.svg'; // Import the quote image
import parry from '../assets/pfp1.ba7974ae51bb5d44fa69.webp'; // Import a profile picture
import ron from '../assets/pfp2.fd9b1716200244ed8905.webp'; // Import another profile picture

function Testimonialcards() {
  return (
    <section className='bg-[#f8f8f8] py-[10rem] overflow-y-hidden'>
      <div className="mx-auto max-w-[133rem] px-[2.5rem]">
        <div className='flex flex-col'>
          <div className='mx-auto mb-20 max-w-[70rem] text-center'>
            <h4 className='text-[2.2rem] font-medium'>Reviewed by People</h4>
            <h2 className='text-[4.2rem] mb-[1.4rem]'>Client's Testimonials</h2>
            <p className='text-[#706f7b] text-[1.6rem]' style={{ lineHeight: 1.4 }}>
              Discover the positive impact we've made on our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.
            </p>
          </div>
          <div className='flex flex-col lg:flex-row gap-[3rem] justify-center items-center p-[3rem] w-full'>
            {/* First Testimonial */}
            <div className='bg-white shadow-lg p-[2.5rem] lg:p-[5.5rem] relative w-full lg:w-[54rem]'>
              <span>
                <img src={quote} className='absolute bottom-[10px] right-[20px]' alt='' />
              </span>
              <p className='font-medium text-[1.6rem] lg:text-[2.2rem]'>
                "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."
              </p>
              <div className='flex'>
                <div className='items-center flex gap-[2rem] mt-[3rem]'>
                  <img src={parry} className='rounded-[50%] h-[7rem] w-[7rem]' alt='' />
                  <span>
                    <h4 className='text-[1.8rem]'>Parry Hotter</h4>
                    <p className='text-[1.6rem] font-normal'>Belgrade</p>
                  </span>
                </div>
              </div>
            </div>

            {/* Second Testimonial */}
            <div className='bg-white shadow-lg p-[2.5rem] lg:p-[5.5rem] relative w-full lg:w-[54rem]'>
              <span>
                <img src={quote} className='absolute bottom-[10px] right-[20px]' alt='' />
              </span>
              <p className='font-medium text-[1.8rem] lg:text-[2.5rem]'>
                "The car was in great condition and made our trip even better. Highly recommend this car rental website!"
              </p>
              <div className='flex'>
                <div className='items-center flex gap-[2rem] mt-[3rem]'>
                  <img src={ron} className='rounded-[50%] h-[7rem] w-[7rem]' alt='' />
                  <span>
                    <h4 className='text-[1.8rem]'>Ron Rizzly</h4>
                    <p className='text-[1.6rem] font-normal'>Novi Sad</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonialcards;
