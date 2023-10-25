import React from 'react';
import audiA1 from '../assets/audia1.d038cf70b700e34e607a.webp'; // Importing an image
import vwGolf6 from '../assets/golf6.595c0bbfc7ce2e50aa05.webp'; // Importing an image
import toyotaCamry from '../assets/toyotacamry.3d493a56558c50b677cc.webp'; // Importing an image
import bmw320 from '../assets/bmw320.84ab73b0c9133418f907.webp'; // Importing an image
import mercedesbenz from '../assets/benz.0a6153731a2c1a68054a.webp'; // Importing an image
import passatcc from '../assets/passatcc.bd82bd1deac8c11e3c4d.webp'; // Importing an image
import felkialtojel from '../assets/felkialtojel.svg'; // Importing an image
import location from '../assets/location.svg'; // Importing an image
import { useMainContext } from '../utils/Maincontext';

const Overlay = () => {
  // Destructuring values from the context
  const { layoverHandler, pickupDate, dropoffDate, pickupLocation, dropoffLocation, choosenVehicleModel } = useMainContext();

  return (
    <>
      {/* Semi-transparent background overlay */}
      <div className='fixed h-full right-0 top-0 w-full z-[9999] bg-black bg-opacity-30' />
      <div className='fixed bg-white border-2 border-white text-[#010103] flex-col h-screen left-[50%] overflow-x-hidden overflow-y-scroll pr-[2px] top-[54%] lg:top-[54%] transform translate-x-[-50%] translate-y-[-50%] w-screen lg:w-[83rem] z-[999999999]'>

        <div className='items-center flex justify-between bg-[#ff4d30] text-white py-[1rem] px-[1.5rem]'>
          <h2 className='uppercase text-[2.4rem]'>Complete reservation</h2> {/* Title: "Complete reservation" */}
          <h1 className='text-[2.4rem] cursor-pointer' onClick={layoverHandler}>X</h1> {/* Close button */}
        </div>

        <div className='bg-[#ffeae6] flex flex-col gap-[1.5rem] py-[2rem] px-[3rem]'>
          <h4 className='text-[#ff4d30] text-[1.9rem] font-bold flex flex-row justify-start items-center'>
            <img src={felkialtojel} className='mr-5' alt="" /> {/* Warning sign icon */}
            Upon completing this reservation enquiry, you will receive:
          </h4>
          <p className='text-[#777] text-[1.7rem] font-medium' style={{ lineHeight: 1.6 }}>
            Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.
          </p> {/* Information text */}
        </div>

        <div className='bg-white border-b-2 border-gray-300 flex flex-col justify-between lg:flex-row p-[3rem]'>
          <div className='flex flex-col gap-[3.2rem]'>
            <div className='flex flex-col gap-[2rem]'>
              <h5 className='text-[#ff4d30] text-[1.8rem] font-bold'>Location & Date</h5> {/* Section title: "Location & Date" */}
              <span className='flex gap-[1rem]'>
                <img src={location} alt="" /> {/* Location icon */}
                <div className=''>
                  <h6 className='text-[1.5rem] font-bold mb-[0.2rem]'>Pick-up Date & Time</h6> {/* Subtitle: "Pick-up Date & Time" */}
                  <p className='text-[#777] text-[1.6rem]'>
                    {pickupDate} / <input type='time' className='border cursor-pointer text-[14px] text-center w-[8rem]' />
                  </p>
                </div>
              </span>
              <span className='flex gap-[1rem]'>
                <img src={location} alt="" /> {/* Location icon */}
                <div className=''>
                  <h6 className='text-[1.5rem] font-bold mb-[0.2rem]'>Drop-Off & Time</h6> {/* Subtitle: "Drop-Off & Time" */}
                  <p className='text-[#777] text-[1.6rem]'>
                    {dropoffDate} / <input type='time' className='border cursor-pointer text-[14px] text-center w-[8rem]' />
                  </p>
                </div>
              </span>
              <span className='flex gap-[1rem]'>
                <img src={location} alt="" /> {/* Location icon */}
                <div className=''>
                  <h6 className='text-[1.5rem] font-bold mb-[0.2rem]'>Pick-up location</h6> {/* Subtitle: "Pick-up location" */}
                  <p className='text-[#777] text-[1.6rem]'>
                    {pickupLocation}
                  </p>
                </div>
              </span>
              <span className='flex gap-[1rem]'>
                <img src={location} alt="" /> {/* Location icon */}
                <div className=''>
                  <h6 className='text-[1.5rem] font-bold mb-[0.2rem]'>Drop-off location</h6> {/* Subtitle: "Drop-off location" */}
                  <p className='text-[#777] text-[1.6rem]'>
                    {dropoffLocation}
                  </p>
                </div>
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-[3rem]'>
            <h5 className='text-[1.8rem] font-bold mt-28 mb-20 lg:my-0'>Car - <span className='text-[#ff4d30]'>{choosenVehicleModel}</span></h5>
            {/* Display the chosen vehicle image based on the selected model */}
            <img src={
              choosenVehicleModel === 'Audi A1 S-Line' ? audiA1 :
              choosenVehicleModel === 'VW Golf 6' ? vwGolf6 :
              choosenVehicleModel === 'Toyota Camry' ? toyotaCamry :
              choosenVehicleModel === 'BMW 320 ModernLine' ? bmw320 :
              choosenVehicleModel === 'Mercedes-Benz GLK' ? mercedesbenz :
              choosenVehicleModel === 'VW Passat CC' ? passatcc : ''
            }
            className='h-auto w-full' alt=''
            />
          </div>
        </div>

        <div className='bg-white flex flex-col p-12'>
          <h4 className='text-[#ff4d30] text-[1.8rem] mb-8 uppercase font-bold'>Personal information</h4> {/* Section title: "Personal information" */}
          <form className='flex flex-col'>
            <div className='gap-[2rem] grid grid-cols-1 lg:grid-cols-2 py-[1rem]'>
              <span className='flex flex-col gap-[0.4rem]'>
                <span className='text-[#777] text-[1.6rem] font-medium'>First Name <b className='text-[#ff4d30]'>*</b></span> {/* Input label: "First Name" */}
                <input type='text' className='bg-[#dbdbdb] border-none text-[#555] text-[1.5rem] font-medium outline-none py-[14px] px-[15px]' placeholder='First name' />
                <p>This field is required</p> {/* Error message */}
              </span>
              <span className='flex flex-col gap-[0.4rem]'>
                <span className='text-[#777] text-[1.6rem] font-medium'>Last Name <b className='text-[#ff4d30]'>*</b></span> {/* Input label: "Last Name" */}
                <input type='text' className='bg-[#dbdbdb] border-none text-[#555] text-[1.5rem] font-medium outline-none py-[14px] px-[15px]' placeholder='Last name' />
                <p>This field is required</p> {/* Error message */}
              </span>
              <span className='flex flex-col gap-[0.4rem]'>
                <span className='text-[#777] text-[1.6rem] font-medium'>Phone number <b className='text-[#ff4d30]'>*</b></span> {/* Input label: "Phone number" */}
                <input type='text' className='bg-[#dbdbdb] border-none text-[#555] text-[1.5rem] font-medium outline-none py-[14px] px-[15px]' placeholder='Phone number' />
                <p>This field is required</p> {/* Error message */}
              </span>
              <span className='flex flex-col gap-[0.4rem]'>
                <span className='text-[#777] text-[1.6rem] font-medium'>Age <b className='text-[#ff4d30]'>*</b></span> {/* Input label: "Age" */}
                <input type='number' className='bg-[#dbdbdb] border-none text-[#555] text-[1.5rem] font-medium outline-none py-[14px] px-[15px]' placeholder='Age' />
                <p>This field is required</p> {/* Error message */}
              </span>
            </div>
            <div className='gap-[2rem] py-[1rem]'>
              <span className='flex flex-col gap-[0.4rem]'>
                <span className='text-[#777] text-[1.6rem] font-medium'>Email <b className='text-[#ff4d30]'>*</b></span> {/* Input label: "Email" */}
                <input type='email' className='bg-[#dbdbdb] border-none text-[#555] text-[1.5rem] font-medium outline-none py-[14px] px-[15px]' placeholder='Email' />
                <p>This field is required</p> {/* Error message */}
              </span>
              <span className='flex flex-col gap-[0.4rem]'>
                <span className='text-[#777] text-[1.6rem] font-medium'>Address <b className='text-[#ff4d30]'>*</b></span> {/* Input label: "Address" */}
                <input type='text' className='bg-[#dbdbdb] border-none text-[#555] text-[1.5rem] font-medium outline-none py-[14px] px-[15px]' placeholder='Address' />
                <p>This field is required</p> {/* Error message */}
              </span>
            </div>
            <div className='gap-[2rem] grid grid-cols-1 lg:grid-cols-2 py-[1rem]'>
              <span className='flex flex-col gap-[0.4rem]'>
                <span className='text-[#777] text-[1.6rem] font-medium'>City <b className='text-[#ff4d30]'>*</b></span> {/* Input label: "City" */}
                <input type='text' className='bg-[#dbdbdb] border-none text-[#555] text-[1.5rem] font-medium outline-none py-[14px] px-[15px]' placeholder='City' />
                <p>This field is required</p> {/* Error message */}
              </span>
              <span className='flex flex-col gap-[0.4rem]'>
                <span className='text-[#777] text-[1.6rem] font-medium'>Zip Code <b className='text-[#ff4d30]'>*</b></span> {/* Input label: "Zip Code" */}
                <input type='text' className='bg-[#dbdbdb] border-none text-[#555] text-[1.5rem] font-medium outline-none py-[14px] px-[15px]' placeholder='Zip Code' />
                <p>This field is required</p> {/* Error message */}
              </span>
            </div>
            <span className='flex items-center text-[#565454] text-[1.6rem] gap-[1rem] mb-[3rem] mt-[2rem]'>
              <input type='checkbox' className='h-[1.6rem] w-[1.6rem]' />
              <p>Please send me latest news and updates</p>
            </span>
            <div className='bg-[#dbdbdb] mx-[-3rem] p-[3rem] text-right'>
              <button className='bg-[#ff4d30] border border-[#ff0] text-white cursor-pointer text-[2.4rem] font-bold py-[1.2rem] px-[2rem] transition-all duration-300 shadow-md hover:shadow-lg'>Reserve Now</button> {/* Button to reserve now */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Overlay;
