import React from 'react'

/**
 * The `Banner1` component is a section that displays a promotional banner.
 * It encourages users to save on car rentals and highlights key features.
 */
const Banner1 = () => {
    return (
        <section className='bg-[#2d2d2d] flex h-auto my-[8rem] py-[6rem] text-center w-full'>
            <div className="mx-auto max-w-[133rem] px-[2.5rem]">
                <div className='items-center text-white flex h-full justify-between w-full'>
                    <div className='flex flex-col gap-[1.5rem]'>
                        <h2 className='text-[5.2rem]' style={{ lineHeight: 1.3 }}>
                            Save big with our cheap car rental!
                        </h2>
                        <p className='text-[2.4rem]'>
                            Top Airports. Local Suppliers. 
                            <span className='text-[#ff4d30]'>24/7 </span>Support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner1
