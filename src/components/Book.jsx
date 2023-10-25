import React from 'react'
import { useMainContext } from '../utils/Maincontext'
import miniCar from '../assets/minicar.svg'
import calendar from '../assets/Calendar.svg'
import location from '../assets/location.svg'

const Book = () => {
    
  const { setChoosenVehicleModel, error, setPickupLocation, setDropoffLocation, setDropoffDate, setPickupDate, handleSearch } = useMainContext()

  return (
    <section className='bg-gradient-to-b from-[#f8f8f8] via-[#fff] to-transparent relative overflow-x-hidden'>
      <div className="mx-auto max-w-[133rem] px-[2.5rem]">
        <div className='mx-auto mb-[10rem]'>
          <div className='bg-white rounded-lg shadow-lg text-[#010103] flex flex-col h-auto pt-[4rem] px-[4.5rem] pb-[5.5rem] relative w-full z-[4]'>
            <h2 className='text-[2.4rem] font-bold mb-[2.7rem] z-[6]'>Book a car</h2>
            {error && (
              <h1 className='w-full text-[2rem] py-5 pl-5 bg-red-400 text-red-900 rounded-xl mb-5'>
                All fields required!
              </h1>
            )}
            <form className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              <div className='flex  flex-col'>
                <label className='items-center flex text-[1.6rem] font-semibold mb-[1.2rem]'>
                  <img src={miniCar} alt='car' />
                  Select Your Car Type
                  <b className='text-red-500'>*</b>
                </label>
                <select
                  onChange={(e) => setChoosenVehicleModel(e.target.value)}
                  className='border border-[#ccd7e6] rounded-sm text-[#ababab] text-[1.5rem] font-normal outline-none py-[1.2rem] px-[1.3rem]'>
                  <option className='font-normal block whitespace-nowrap min-h-[1.2em] text-[1.5rem] py-[1.2rem] px-[1.3rem]'>Select your car type</option>
                  <option value="VW Golf 6">VW Golf 6</option>
                  <option value="Toyota Camry">Toyota Camry</option>
                  <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                  <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                  <option value="VW Passat CC">VW Passat CC</option>
                </select>
              </div>

              <div className='flex  flex-col'>
                <label className='items-center flex text-[1.6rem] font-semibold mb-[1.2rem]'>
                  <img src={location} alt='location' />
                  Pick-up
                  <b className='text-red-500'>*</b>
                </label>
                <select
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className='border border-[#ccd7e6] rounded-sm text-[#ababab] text-[1.5rem] font-normal outline-none py-[1.2rem] px-[1.3rem]'>
                  <option>Select pick up location</option>
                  <option value="Belgrade">Belgrade</option>
                  <option value="Novi Sad">Novi Sad</option>
                  <option value="Nis">Nis</option>
                  <option value="Kragujevac">Kragujevac</option>
                  <option value="Subotica">Subotica</option>
                </select>
              </div>

              <div className='flex  flex-col'>
                <label className='items-center flex text-[1.6rem] font-semibold mb-[1.2rem]'>
                  <img src={location} alt="locationimg" />
                  Drop-off
                  <b className='text-red-500'>*</b>
                </label>
                <select
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  className='border border-[#ccd7e6] rounded-sm text-[#ababab] text-[1.5rem] font-normal outline-none py-[1.2rem] px-[1.3rem]'>
                  <option>Select drop off location</option>
                  <option value="Belgrade">Belgrade</option>
                  <option value="Novi Sad">Novi Sad</option>
                  <option value="Nis">Nis</option>
                  <option value="Kragujevac">Kragujevac</option>
                  <option value="Subotica">Subotica</option>
                </select>
              </div>

              <div className='flex  flex-col'>
                <label className='items-center flex text-[1.6rem] font-semibold mb-[1.2rem]'>
                  <img src={calendar} alt="calendar" />
                  Pick-up date
                  <b className='text-red-500'>*</b>
                </label>
                <input
                  onChange={(e) => setPickupDate(e.target.value)}
                  type='date' className='border border-[#ccd7e6] rounded-sm text-[#ababab] text-[1.5rem] font-normal outline-none py-[1.2rem] px-[1.3rem]' />
              </div>

              <div className='flex  flex-col'>
                <label className='items-center flex text-[1.6rem] font-semibold mb-[1.2rem]'>
                  <img src={calendar} alt="calendar" />
                  Drop-off date
                  <b className='text-red-500'>*</b>
                </label>
                <input
                  onChange={(e) => setDropoffDate(e.target.value)}
                  type='date' className='border border-[#ccd7e6] rounded-sm text-[#ababab] text-[1.5rem] font-normal outline-none py-[1.2rem] px-[1.3rem]' />
              </div>

              <button onClick={handleSearch} type='submit' className="self-end bg-[#ff4d30] border-none rounded-lg text-white cursor-pointer font-rubik font-medium text-2xl p-[1.5rem] transition-all duration-300 shadow-md hover:shadow-2xl">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Book
