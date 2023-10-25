import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Testimonialcards from '../components/Testimonialcards';

// This is the main Testimonials component.
function Testimonials() {
    return (
        <section className='bg-[#f8f8f8] text-[#010103] py-[10rem]'>
            <Header 
                title="Testimonials"
                describe="Home / Testimonials"
            />
            <div className="mx-auto max-w-[133rem] px-[2.5rem]">
                <Testimonialcards />
            </div>
            <Banner />
        </section>
    );
}

export default Testimonials;
