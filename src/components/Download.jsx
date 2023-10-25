import React from 'react'
import downloadBg from '../assets/bg02.3efbc4567749d0a5671e.webp'
import googleplay from '../assets/googleapp.e6493904327fe3f9b89c7c75a4f3ae74.svg'
import appstore from '../assets/appstore.35481c6295b0744dfcc00d35874fbdd8.svg'

// This component represents a section that promotes downloading a mobile app.
const Download = () => {
    // Define a style object for the background image with dynamic URL.
    const downloadBgStyle = {
        backgroundImage: `url(${downloadBg})`, // Wrap the URL in `url()`
        backgroundSize: 'cover', // Optionally, set background size
        backgroundPosition: 'top', // Optionally, set background position
        backgroundRepeat: 'no-repeat'
    };

    return (
        <section style={downloadBgStyle} className='h-auto p-[2rem] lg:p-[10rem] w-full'>
            <div className="mx-auto max-w-[133rem] px-[2.5rem]">
                <div className='flex flex-col gap-[2rem] max-w-[55rem] text-left'>
                    <h2 className='text-[#010103] text-[4.2rem]'>Download our app to get the most out of it</h2>
                    <p className='text-[#706f7b] text-[1.6rem]' style={{ lineHeight: 1.5 }}>
                        Thrown shy denote ten ladies though ask saw. Or by to he going think order event music.
                        Incommode so intention defective at convinced. Led income months itself and houses you.
                    </p>
                    <div className='flex gap-[3rem] mt-[2rem]'>
                        {/* Display Google Play and App Store download buttons */}
                        <img src={googleplay} alt="" className='cursor-pointer w-[40%]' />
                        <img src={appstore} alt="" className='cursor-pointer w-[40%]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Download
