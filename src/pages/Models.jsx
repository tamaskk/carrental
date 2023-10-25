import React from 'react'
import Header from '../components/Header'
import star from '../assets/star.svg'
import car from '../assets/car.svg'

import { NavLink } from 'react-router-dom'
import { useMainContext } from '../utils/Maincontext'


function Card({ img, name, price, model, transmission, doors, fuel }) {
    return (
        <article className='border border-[#d5d5d5] flex rounded-md flex-col w-[35rem]'>
            <div className='h-auto w-full rounded-sm'>
                <img src={img} className='h-[27rem] w-auto p-5' alt='' />
                <div className='text-[#010103] flex flex-col py-[2rem] px-[3rem]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col gap-[0.5rem] text-left'>
                            <p className='text-[2.4rem] font-semibold'>{name}</p>
                            <span className='flex gap-[0.4rem]'>
                                <img src={star} alt=''/>
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                            </span>
                        </div>
                        <div className='flex flex-col text-right'>
                            <h4 className='text-[2.8rem]'>${price}</h4>
                            <p className='text-[1.6rem]'>per day</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-x-5 gap-y-14 border-b border-gray-300 mb-8 py-12 px-3'>
                        <span className='text-[#777] text-[1.8rem] h-12 font-medium text-left flex justify-start items-end w-full'>
                            <img src={car} alt='' />
                            &nbsp; {model}
                        </span>
                        <span className='text-[#777] text-[1.8rem] h-12 font-medium text-right flex justify-end items-end'>
                            &nbsp; {doors}
                            <img src={car} alt='' />
                        </span>
                        <span className='text-[#777] text-[1.8rem] h-12 font-medium text-left flex justify-start items-end'>
                            <img src={car} alt='' />
                            &nbsp; {transmission}
                        </span>
                        <span className='text-[#777] text-[1.8rem] h-12 font-medium text-right flex justify-end items-end'>
                            &nbsp; {fuel}
                            <img src={car} alt='' />
                        </span>
                    </div>
                    <div className='bg-[#ff4d30] rounded-md shadow-lg cursor-pointer text-center text-[1.8rem] py-[1.8rem] px-[3rem] transition-all duration-300 hover:shadow-2xl'>
                        <NavLink to="/" className="text-white font-semibold">
                            Book Ride
                        </NavLink>
                    </div>
                </div>
            </div>
        </article>
    )
}

function Models() {

const { vehicleList } = useMainContext()

    const carList = Object.entries(vehicleList).map(([name, details]) => (
        <Card
            key={name}
            img={details.Picture}
            name={name}
            price={details.Price}
            model={details.Model}
            transmission={details.Transmission}
            doors={details.Doors}
            fuel={details.Fuel}
        />
    ));

    return (
        <section className='overflow-x-hidden'>
            <Header
                title="Vehicle Models"
                describe="Home / Vehicle Models"
            />
            <div className="mx-auto max-w-[133rem] px-[2.5rem] ">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 items-center mx-auto py-40 text-center w-fit lg:w-full relative'>
                    {carList}
                </div>
            </div>
        </section>
    )
}

export default Models