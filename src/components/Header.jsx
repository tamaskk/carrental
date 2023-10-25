import React from 'react'
import headerImg from '../assets/heroes-bg.71ab9a13d73de3860763.webp'


function Header({title, describe}) {

    const headerBg = {
        backgroundImage: `url(${headerImg})`, // Wrap the URL in `url()`
        backgroundSize: 'cover', // Optionally, set background size
        backgroundPosition: 'top', // Optionally, set background position
        backgroundRepeat: 'no-repeat'
      };

  return (
    <div className='h-[41rem] relative w-full' style={headerBg}>
    <div className='bg-white bg-opacity-95 h-full absolute right-0 top-0 w-full'></div>
    <div className="mx-auto max-w-[133rem] px-[2.5rem]">
      <div className='text-[#010103] flex flex-col h-[41rem] justify-center relative w-full z-[3]'>
        <h3 className='text-[3.6rem] mb-[0.5rem]'>{title}</h3>
        <p className='text-[1.6rem] font-semibold'>{describe}</p>
      </div>
    </div>
  </div>
  )
}

export default Header