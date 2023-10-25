import React from 'react'
import audiA1 from '../assets/audia1.d038cf70b700e34e607a.webp'
import vwGolf6 from '../assets/golf6.595c0bbfc7ce2e50aa05.webp'
import toyotaCamry from '../assets/toyotacamry.3d493a56558c50b677cc.webp'
import bmw320 from '../assets/bmw320.84ab73b0c9133418f907.webp'
import mercedesbenz from '../assets/benz.0a6153731a2c1a68054a.webp'
import passatcc from '../assets/passatcc.bd82bd1deac8c11e3c4d.webp'
import { useMainContext } from '../utils/Maincontext'

// This component represents a section that displays vehicle models and their details.
const Models = () => {

    // Extract necessary state and functions from the MainContext using the custom hook.
    const { setVehicleModel, vehicleModel, vehicleList } = useMainContext()

  return (
    <section className='py-[10rem]'>
    <div className="mx-auto max-w-[133rem] px-[2.5rem] flex flex-col">
      <div className="flex flex-col items-center">
        <div className='text-[#010103] mx-[5rem] max-w-[50rem] text-center mb-20 lg:mb-0'>
          <h3 className='text-[2.4rem] font-medium'>Vehicle Models</h3>
          <h2 className='text-[4.2rem] my-2 mx-0 mb-4'>Our rental fleet</h2>
          <p className='text-[#706f7b] text-[1.6rem]' style={{ lineHeight: 1.5 }}>
            Choose from a variety of our amazing vehicles to rent for your next adventure or business trip
          </p>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-[1rem] justify-between'>
        <div className="flex flex-col gap-[0.7rem]">
          {/* Buttons for selecting different vehicle models */}
          <button onClick={() => setVehicleModel('Audi A1 S-Line')} className={`${vehicleModel === 'Audi A1 S-Line' ? 'bg-[#ff4d30] text-white' : 'bg-[#e9e9e9]'} border-none cursor-pointer text-[2rem] font-semibold py-[1.5rem] px-[2.5rem] text-left transition-all duration-200 hover:text-white hover:bg-[#ff4d30] active:text-white active:bg-[#ff4d30]`}>Audi A1 S-Line</button>
          <button onClick={() => setVehicleModel('VW Golf 6')} className={`${vehicleModel === 'VW Golf 6' ? 'bg-[#ff4d30] text-white' : 'bg-[#e9e9e9]'} border-none cursor-pointer text-[2rem] font-semibold py-[1.5rem] px-[2.5rem] text-left transition-all duration-200 hover:text-white hover:bg-[#ff4d30] active:text-white active:bg-[#ff4d30]`}>VW Golf 6</button>
          <button onClick={() => setVehicleModel('Toyota Camry')} className={`${vehicleModel === 'Toyota Camry' ? 'bg-[#ff4d30] text-white' : 'bg-[#e9e9e9]'} border-none cursor-pointer text-[2rem] font-semibold py-[1.5rem] px-[2.5rem] text-left transition-all duration-200 hover:text-white hover.bg-[#ff4d30] active:text-white active.bg-[#ff4d30]`}>Toyota Camry</button>
          <button onClick={() => setVehicleModel('BMW 320 ModernLine')} className={`${vehicleModel === 'BMW 320 ModernLine' ? 'bg-[#ff4d30] text-white' : 'bg-[#e9e9e9]'} border-none cursor-pointer text-[2rem] font-semibold py-[1.5rem] px-[2.5rem] text-left transition-all duration-200 hover.text-white hover.bg-[#ff4d30] active.text-white active.bg-[#ff4d30]`}>BMW 320 ModernLine</button>
          <button onClick={() => setVehicleModel('Mercedes-Benz GLK')} className={`${vehicleModel === 'Mercedes-Benz GLK' ? 'bg-[#ff4d30] text-white' : 'bg-[#e9e9e9]'} border-none cursor-pointer text-[2rem] font-semibold py-[1.5rem] px-[2.5rem] text-left transition-all duration-200 hover.text-white hover.bg-[#ff4d30] active.text-white active.bg-[#ff4d30]`}>Mercedes-Benz GLK</button>
          <button onClick={() => setVehicleModel('VW Passat CC')} className={`${vehicleModel === 'VW Passat CC' ? 'bg-[#ff4d30] text-white' : 'bg-[#e9e9e9]'} border-none cursor-pointer text-[2rem] font-semibold py-[1.5rem] px-[2.5rem] text-left transition-all duration-200 hover.text-white hover.bg-[#ff4d30] active.text-white active.bg-[#ff4d30]`}>VW Passat CC</button>
        </div>
        <div className="flex flex-col lg:flex-row gap-[11rem] justify-center items-center lg:justify-between">
          <div className='relative flex items-center justify-center w-full lg:w-[50rem]'>
            {/* Display an image of the selected vehicle model */}
            <img src={vehicleModel === 'Audi A1 S-Line' ? audiA1 :
              vehicleModel === 'VW Golf 6' ? vwGolf6 :
                vehicleModel === 'Toyota Camry' ? toyotaCamry :
                  vehicleModel === 'BMW 320 ModernLine' ? bmw320 :
                    vehicleModel === 'Mercedes-Benz GLK' ? mercedesbenz :
                      vehicleModel === 'VW Passat CC' ? passatcc : ''}
              className='mt-[6rem] w-3/4 lg:w-full' alt='' />
          </div>
          <div className='w-[25rem]'>
            {/* Display pricing and details of the selected vehicle model */}
            <div className='justify-center items-center bg-[#ff4d30] text-white flex text-[1.8rem] gap-[1.5rem] py-[0.3rem] px-[1.9rem] whitespace-nowrap w-full'>
              <span className='text-[2.8rem] font-bold'>$45</span>
              / rent per day
            </div>
            <div className='grid grid-cols-1 grid-rows-[auto] text-[1.4rem]'>
              <div className='border-b-2 border-r-2 border-[#706f7b] grid border-l-2 grid-cols-2 grid-rows-[auto] py-[0.9rem] px-[0.5rem] text-center'>
                <span className='border-r-2 border-[#706f7b]'>Model</span>
                <span>{vehicleList[vehicleModel]?.Model}</span>
              </div>
              <div className='border-b-2 border-r-2 border-[#706f7b] grid border-l-2 grid-cols-2 grid-rows-[auto] py-[0.9rem] px-[0.5rem] text-center'>
                <span className='border-r-2 border-[#706f7b]'>Mark</span>
                <span>{vehicleList[vehicleModel]?.Mark}</span>
              </div>
              <div className='border-b-2 border-r-2 border-[#706f7b] grid border-l-2 grid-cols-2 grid-rows-[auto] py-[0.9rem] px-[0.5rem] text-center'>
                <span className='border-r-2 border-[#706f7b]'>Year</span>
                <span>{vehicleList[vehicleModel]?.Year}</span>
              </div>
              <div className='border-b-2 border-r-2 border-[#706f7b] grid border-l-2 grid-cols-2 grid-rows-[auto] py-[0.9rem] px-[0.5rem] text-center'>
                <span className='border-r-2 border-[#706f7b]'>Doors</span>
                <span>{vehicleList[vehicleModel]?.Doors}</span>
              </div>
              <div className='border-b-2 border-r-2 border-[#706f7b] grid border-l-2 grid-cols-2 grid-rows-[auto] py-[0.9rem] px-[0.5rem] text-center'>
                <span className='border-r-2 border-[#706f7b]'>AC</span>
                <span>{vehicleList[vehicleModel]?.AC}</span>
              </div>
              <div className='border-b-2 border-r-2 border-[#706f7b] grid border-l-2 grid-cols-2 grid-rows-[auto] py-[0.9rem] px-[0.5rem] text-center'>
                <span className='border-r-2 border-[#706f7b]'>Transmission</span>
                <span>{vehicleList[vehicleModel]?.Transmission}</span>
              </div>
              <div className='border-b-2 border-r-2 border-[#706f7b] grid border-l-2 grid-cols-2 grid-rows-[auto] py-[0.9rem] px-[0.5rem] text-center'>
                <span className='border-r-2 border-[#706f7b]'>Fuel</span>
                <span>{vehicleList[vehicleModel]?.Fuel}</span>
              </div>
            </div>
            {/* A link to reserve the selected vehicle */}
            <a href='https://localhost:3000' className='bg-[#ff4d30] shadow-lg text-white flex text-[2rem] font-semibold justify-center mt-[1.4rem] p-[1rem] decoration-none uppercase transition-all duration-300 w-full hover.bg-[#ff4c30c5] cursor-pointer'>
              Reserve now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Models
