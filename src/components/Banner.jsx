import React from 'react'; // Import the React library
import bg from '../assets/book-banner.09fcba44170a314c81a8.webp'; // Import the background image
import bannerPhone from '../assets/bannerphone.svg'; // Import the phone icon image

function Banner() {

    // Define a background style object with the imported background image
    const background = {
        backgroundImage: `url(${bg})`,
    };

    // Return the JSX for the Banner component
    return (
        <section className='flex h-80 mt-28 relative w-full' style={background}>
            {/* Create a semi-transparent overlay div */}
            <div className='bg-[#2d2d2d] h-full bg-opacity-90 absolute top-0 right-0 w-full'></div>
            <div className="mx-auto max-w-[133rem] px-[2.5rem]">
                <div className='items-center text-white flex flex-col lg:flex-row text-center gap-20 h-80 relative w-full z-[5]'>
                    {/* Display a heading */}
                    <h2 className='text-[3.2rem]'>Book a car by getting in touch with us</h2>
                    {/* Display a phone number with an icon */}
                    <span className='items-center text-[#ff4d30] flex text-[2.7rem] gap-4 whitespace-nowrap'>
                        <img src={bannerPhone} alt='' /> {/* Display the phone icon */}
                        <h3>(123) 456-7890</h3> {/* Display the phone number */}
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Banner; // Export the Banner component for use in other parts of the application
