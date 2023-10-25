import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Luke from '../assets/1.4ba4d772bcd6e82365e8.webp';
import Michael from '../assets/2.f41d050c1c5b9e59fc22.webp';
import Briana from '../assets/3.1d499e4b69de7b9e10fb.webp';
import Lauren from '../assets/4.0e752081a69322c59b26.webp';
import Martin from '../assets/5.e46bcc8b44d7c4298aea.webp';
import Caitlyn from '../assets/6.528b8c60ae315bc6a52a.webp';

// This is a functional component that represents a card displaying team member information.
const Card = ({ img, name, position }) => {
    return (
        <article className='bg-white w-[33rem] shadow-2xl hover:translate-y-2 transition-all duration-300'>
            <div className='bg-[#f6f6f6] h-auto w-full'>
                <img src={img} className='w-full' alt={name} />
            </div>
            <div className='text-[#010103] p-[3rem]'>
                <h3 className='text-[2.2rem]'>{name}</h3>
                <p className='text-[#777] text-[1.6rem] font-medium'>{position}</p>
            </div>
        </article>
    );
}

// This is the main Team component.
function Team() {
    // An object containing information about team members.
    const members = {
        "Luke Miller": {
            Position: "Salesman",
            img: Luke
        },
        "Michael Diaz": {
            Position: "Business Owner",
            img: Michael
        },
        "Briana Ross": {
            Position: "Photographer",
            img: Briana
        },
        "Lauren Rivera": {
            Position: "Car Detailist",
            img: Lauren
        },
        "Martin Rizz": {
            Position: "Mechanic",
            img: Martin
        },
        "Caitlyn Hunt": {
            Position: "Manager",
            img: Caitlyn
        }
    }

    // Create an array of Card components using the team member data.
    const memberList = Object.entries(members).map(([name, details]) => (
        <Card
            key={name}
            img={details.img}
            name={name}
            position={details.Position}
        />
    ));

    return (
        <>
            <Header
                title="Our team"
                describe="Home / Our Team"
            />
            <section className='mx-auto max-w-[133rem] px-[2.5rem]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 items-center mx-auto py-40 text-center w-fit lg:w-full relative'>
                    {memberList}
                </div>
            </section>
            <Banner />
        </>
    );
}

export default Team;
