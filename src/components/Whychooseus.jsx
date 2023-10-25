import React from 'react';
import threeCarImg from '../assets/main.70cd75042bdf42515d92.webp'; // Importing an image
import crossCountryDriveImg from '../assets/carimg.webp'; // Importing an image
import money from '../assets/money.webp'; // Importing an image
import cheap from '../assets/cheap.webp'; // Importing an image

const Whychooseus = () => {
  return (
    <section className='bg-white p-8 pt-0 pb-40'>
      <div className="mx-auto max-w-screen lg:max-w-[133rem] px-[2.5rem]">
        <div className='flex flex-col'>
          <img src={threeCarImg} className='h-auto mx-auto w-[90%]' alt='' /> {/* Display a large image of three cars */}
          <div className='flex flex-col lg:flex-row items-center justify-around mt-[3rem] w-full'>
            <div className='text-[#010103] flex flex-col items-center max-w-full lg:max-w-[50rem] text-center lg:text-left mb-20 lg:mb-0'>
              <h4 className='text-[2.2rem] font-semibold mb-[0.7rem]'>Why Choose Us</h4> {/* Display a subtitle */}
              <h2 className='text-[4.2rem] mb-[2rem]' style={{ lineHeight: 1.2 }}>Best valued deals you will ever find</h2> {/* Display a main title */}
              <p className='text-[#706f7b] text-[1.6rem] mb-[3.3rem]' style={{ lineHeight: 1.5 }}>
                Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.
              </p> {/* Display a description */}
              <a href='#home' className='bg-[#ff4d30] border-2 border-[#ff4d30] shadow-lg text-white flex text-[1.6rem] font-bold py-[1.5rem] px-[2.5rem] transition-all duration-300 w-fit'>Find Details &nbsp;</a> {/* Display a button to find details */}
            </div>
            <div className='flex flex-col gap-[4.5rem] lg:max-w-[44rem] max-w-full'>
              {/* Feature 1: Cross Country Drive */}
              <div className='flex flex-col lg:flex-row items-center justify-center text-center lg:text-left'>
                <img src={crossCountryDriveImg} className='w-[11rem] mr-[1.1rem] h-[11rem]' alt='' /> {/* Display an image for Cross Country Drive */}
                <div className='flex flex-col gap-[1rem] justify-center'>
                  <h4 className='text-[2.4rem]'>Cross Country Drive</h4> {/* Display a title for the feature */}
                  <p className='text-[#706f7b] text-[1.6rem]' style={{ lineHeight: 1.3 }}>
                    Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.
                  </p> {/* Display a description for the feature */}
                </div>
              </div>
              {/* Feature 2: All Inclusive Pricing */ }
              <div className='flex flex-col lg:flex-row items-center justify-center text-center lg:text-left'>
                <img src={money} className='w-[11rem] mr-[1.1rem] h-[11rem]' alt='' /> {/* Display an image for All Inclusive Pricing */ }
                <div className='flex flex-col gap-[1rem] justify-center'>
                  <h4 className='text-[2.4rem]'>All Inclusive Pricing</h4> {/* Display a title for the feature */ }
                  <p className='text-[#706f7b] text-[1.6rem]' style={{ lineHeight: 1.3 }}>
                    Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.
                  </p> {/* Display a description for the feature */}
                </div>
              </div>
              {/* Feature 3: No Hidden Charges */}
              <div className='flex flex-col lg:flex-row items-center justify-center text-center lg:text-left'>
                <img src={cheap} className='w-[11rem] mr-[1.1rem] h-[11rem]' alt='' /> {/* Display an image for No Hidden Charges */}
                <div className='flex flex-col gap-[1rem] justify-center'>
                  <h4 className='text-[2.4rem]'>No Hidden Charges</h4> {/* Display a title for the feature */}
                  <p className='text-[#706f7b] text-[1.6rem]' style={{ lineHeight: 1.3 }}>
                    Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.
                  </p> {/* Display a description for the feature */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychooseus;
