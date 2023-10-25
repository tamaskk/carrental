import React from 'react'; // Import the React library
import logo from '../assets/logo.0ad964cb93ab30cc809d.webp'; // Import the logo image
import { NavLink } from 'react-router-dom'; // Import NavLink for routing
import { useMainContext } from '../utils/Maincontext'; // Import a context for managing state

function Nav() {
  // Extract menuView and menuOpenHandler from the context
  const { menuView, menuOpenHandler } = useMainContext();

  // Define styles for navigation links
  const navlinkStyle = 'mr-[2.1rem] text-[#010103] cursor-pointer text-[1.6rem] font-medium hover:text-[#ff4d30] transition-all duration-100';
  const navlinkStyleMobile = 'mb-[2.1rem] text-[#010103] cursor-pointer text-[1.6rem] font-medium hover:text-[#ff4d30] transition-all duration-100';

  return (
    <>
      {/* Desktop Navigation */}
      <nav className='absolute items-center bg-transparent hidden lg:flex h-auto justify-between left-0 my-0 mx-auto max-w-[133rem] py-[2.7rem] px-[2rem] right-0 top-0 w-full max-w-screen overflow-x-hidden'>
        <div className="w-[14.5rem] flex flex-row relative z-10">
          <img src={logo} alt='logo' className='w-full h-full' />
        </div>
        <div className="flex flex-row items-center justify-evenly relative z-10">
          <NavLink to="/" className={navlinkStyle}>Home</NavLink>
          <NavLink to="about" className={navlinkStyle}>About</NavLink>
          <NavLink to="models" className={navlinkStyle}>Vehicle Models</NavLink>
          <NavLink to="testimonials" className={navlinkStyle}>Testimonials</NavLink>
          <NavLink to="team" className={navlinkStyle}>Our Team</NavLink>
          <NavLink to="contact" className='text-[#010103] cursor-pointer text-[1.6rem] font-medium hover:text-[#ff4d30] transition-all duration-100'>Contact</NavLink>
        </div>
        <div className="items-center flex text-[1.6rem] font-medium bg-transparent relative z-10">
          <button className='mr-[2.5rem] hover:text-[#ff4d30] transition-all duration-100'>Sign In</button>
          <button className='mr-[2.5rem] bg-[#ff4d30] rounded-lg text-white py-[1.5rem] px-[3rem] hover:bg-white hover:text-[#ff4d30] transition-all duration-200 shadow-lg'>Register</button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className='max-w-[133rem] h-auto flex lg:hidden bg-transparent absolute items-center justify-between left-0 my-0 mx-auto px-[2rem] py-[2.7rem] right-0 top-0 w-full'>
        <div className="w-[14.5rem] flex flex-row z-10">
          <img src={logo} alt='logo' className='w-full h-full' />
        </div>
        <div className='flex flex-col cursor-pointer z-10' onClick={menuOpenHandler}>
          <div className="w-14 h-2 bg-black rounded-full mb-3"></div>
          <div className="w-14 h-2 bg-black rounded-full mb-3"></div>
          <div className="w-14 h-2 bg-black rounded-full"></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden flex flex-col w-screen h-screen bg-white items-center justify-center absolute top-0 ${menuView ? 'left-0' : 'left-[-100vw]'} z-[9999] transition-all duration-500`}>
        <button className='absolute right-10 top-14 text-[4rem] cursor-pointer' onClick={menuOpenHandler}>
          <div className="w-14 h-2 bg-black rounded-full mb-3 rotate-45 translate-y-5"></div>
          <div className="w-14 h-2 bg-black rounded-full mb-3 rotate-[-45deg]"></div>
        </button>
        <NavLink to="/" className={navlinkStyleMobile} onClick={menuOpenHandler}>Home</NavLink>
        <NavLink to="about" className={navlinkStyleMobile} onClick={menuOpenHandler}>About</NavLink>
        <NavLink to="models" className={navlinkStyleMobile} onClick={menuOpenHandler}>Vehicle Models</NavLink>
        <NavLink to="testimonials" className={navlinkStyleMobile} onClick={menuOpenHandler}>Testimonials</NavLink>
        <NavLink to="team" className={navlinkStyleMobile} onClick={menuOpenHandler}>Our Team</NavLink>
        <NavLink to="contact" className={navlinkStyleMobile} onClick={menuOpenHandler}>Contact</NavLink>
        <button className='mt-[5rem] mb-[2.1rem] hover:text-[#ff4d30] transition-all duration-100 text-[1.6rem] font-medium'>Sign In</button>
        <button className='text-[1.6rem] font-medium bg-[#ff4d30] rounded-lg text-white py-[1.5rem] px-[3rem] hover:bg-white hover:text-[#ff4d30] transition-all duration-200 shadow-lg'>Register</button>
      </div>
    </>
  );
}

export default Nav;
