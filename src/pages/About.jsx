import React from 'react'; // Import the React library
import Header from '../components/Header'; // Import the Header component
import aboutMain from '../assets/about-main.ed0137841dc67d61ec95.webp'; // Import the main image for the About page
import carTypes from '../assets/cartypes.webp'; // Import an image related to car types
import rentaloutlets from '../assets/rentaloutlets.webp'; // Import an image related to rental outlets
import Benefits from '../components/Benefits'; // Import the Benefits component
import Banner from '../components/Banner'; // Import the Banner component

function About() {
  return (
    <>
      {/* Display the header component */}
      <Header
        title="About"
        describe="Home / About"
      />

      <section className="mx-auto max-w-[133rem] px-[2.5rem]">
        <div className='items-center flex flex-col-reverse text-left lg:text-center lg:flex-row gap-[5rem] my-[10rem] mx-auto max-w-[90rem]'>
          <img src={aboutMain} className='w-[43rem] h-[43rem]' alt='' />
          <div className='text-[#010103] flex flex-col'>
            <div className='flex flex-col'>
              <h3 className='text-[2.2rem] font-medium mb-4'>About Company</h3>
              <h2 className='text-[4.2rem]' style={{ lineHeight: 1.2 }}>
                You start the engine and your adventure begins
              </h2>
              <p className='text-[#706f7b] text-[1.6rem] mb-16 mt-8' style={{ lineHeight: 1.5 }}>
                Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.
              </p>
              <div className='grid gap-[4rem] grid-cols-3 mt-0 lg:mt-5'>

                {/* Car Types Section */}
                <div className='flex flex-col'>
                  <img src={carTypes} className='w-[7rem]' alt='' />
                  <span className='items-end lg:items-center flex gap-4'>
                    <h4 className='text-[4.6rem]'>20</h4>
                    <p className='text-[#706f7b] text-[1.6rem] mb-0 lg:mb-16 mt-4' style={{ lineHeight: 1.5 }}>Car Types</p>
                  </span>
                </div>

                {/* Rental Outlets Section */}
                <div className='flex flex-col'>
                  <img src={rentaloutlets} className='w-[7rem]' alt='' />
                  <span className='items-center flex gap-4'>
                    <h4 className='text-[4.6rem]'>85</h4>
                    <p className='text-[#706f7b] text-[1.6rem] mb-0 lg:mb-16 mt-4' style={{ lineHeight: 1.5 }}>Rental Outlets</p>
                  </span>
                </div>

                {/* Repair Shop Section */}
                <div className='flex flex-col'>
                  <img src={carTypes} className='w-[7rem]' alt='' />
                  <span className='items-center flex gap-4'>
                    <h4 className='text-[4.6rem]'>75</h4>
                    <p className='text-[#706f7b] text-[1.6rem] mb-0 lg:mb-16 mt-4' style={{ lineHeight: 1.5 }}>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Display the Benefits component */}
      <Benefits />

      {/* Display the Banner component */}
      <Banner />
    </>
  );
}

export default About;
