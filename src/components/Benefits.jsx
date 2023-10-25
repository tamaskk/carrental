import React from 'react'; // Import the React library
import selectCar from '../assets/selectedcar.webp'; // Import an image
import fastCar from '../assets/fastcar.webp'; // Import another image
import contact from '../assets/blob.webp'; // Import another image

function Benefits() {
  return (
    <section className='bg-white py-[5.3rem]'>
      <div className="mx-auto max-w-[133rem] px-[2.5rem]">
        <div className='flex flex-col'>
          <div className='text-[#010103] mx-auto text-center'>
            <h3 className='text-[2.4rem] font-medium'>Plan your trip now</h3>
            <h2 className='text-[4.2rem] my-5 mx-0 mb-12"'>Quick & easy car rental</h2>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 grid-rows-auto mt-[3.7rem] px-[3rem]'>
            {/* Display the benefits of car rental */}
            <div className='py-[1rem] px-0 lg:px-[6rem] text-center flex flex-col items-center'>
              <img src={selectCar} className='h-auto w-[17rem]' alt='' /> {/* Display an image */}
              <h3 className='text-[2.4rem] mb-[1rem]'>Selected Car</h3> {/* Display a title */}
              <p className='text-[#706f7b] text-[1.6rem]' style={{ lineHeight: 1.4 }}>
                We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
              </p>
            </div>

            <div className='py-[1rem] px-0 lg:px-[6rem] text-center flex flex-col items-center'>
              <img src={contact} className='h-auto w-[17rem]' alt='' /> {/* Display another image */}
              <h3 className='text-[2.4rem] mb-[1rem]'>Contact Operator</h3> {/* Display a title */}
              <p className='text-[#706f7b] text-[1.6rem]' style={{ lineHeight: 1.4 }}>
                Our knowledgeable and friendly operators are always ready to help with any questions or concerns.
              </p>
            </div>

            <div className='py-[1rem] px-0 lg:px-[6rem] text-center flex flex-col items-center'>
              <img src={fastCar} className='h-auto w-[17rem]' alt='' /> {/* Display yet another image */}
              <h3 className='text-[2.4rem] mb-[1rem]'>Let's Drive</h3> {/* Display a title */}
              <p className='text-[#706f7b] text-[1.6rem]' style={{ lineHeight: 1.4 }}>
                Whether you're hitting the open road, we've got you covered with our wide range of cars.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits; // Export the Benefits component for use in other parts of the application
