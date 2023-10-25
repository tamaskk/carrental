import React from 'react';
import bg from '../assets/hero-bg.3b5f7a2502f0f81d1490.webp'; // Importing background image
import car from '../assets/main-car.9b30faa59387879fa060.webp'; // Importing car image
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section className={`bg-[#f8f8f8] h-[97vh] relative w-full overflow-x-hidden overflow-y-hidden`} id="home">
      <div className="mx-auto max-w-[133rem] px-[2.5rem]">
        <img src={bg} className='absolute right-0 top-0 z-[0]' alt='herobg' /> {/* Background image */}
        <div className='items-center flex h-screen relative w-full justify-center lg:justify-start'>
          <div className='flex flex-col mt-[5rem] max-w-[100vw] lg:max-w-[50rem] z-[3] text-center lg:text-left'>
            <h4 className='text-[#010103] text-[2.2rem] font-bold'>Plan your trip now</h4> {/* Subtitle */}
            <h1 className='text-[#010103] text-[5.2rem] font-bold mb-[2.3rem] mt-[1rem]' style={{ lineHeight: 1.2 }}>
              Save
              <span className='text-[#ff4d30]'> big </span> {/* Highlighted text */}
              with our car rental
            </h1> {/* Main title */}
            <p className='text-[#706f7b] text-[1.6rem] mb-[4rem]' style={{ lineHeight: 1.6 }}>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p> {/* Description */}
            <div className='flex justify-center lg:justify-start text-[1.6rem] gap-[2rem]'>
              <NavLink to="/" className='items-center text-white flex font-bold decoration-[none] bg-[#ff4d30] border-2 hover:shadow-2xl border-[#ff4d30] rounded-lg shadow-lg px-[3rem] py-[2rem] transition-all duration-300'>Book Ride</NavLink> {/* "Book Ride" button */}
              <NavLink to="/" className='items-center text-white flex font-bold decoration-[none] bg-black hover:bg-white hover:text-black border-2 border-black rounded-lg shadow-lg px-[3rem] py-[2rem] transition-all duration-300'>Learn more</NavLink> {/* "Learn more" button */}
            </div>
          </div>
          <img src={car} alt="" className='mt-[5rem] absolute right-0 w-[65%] z-[2] hidden lg:block' /> {/* Car image */}
        </div>
      </div>
    </section>
  );
};

export default Home;
