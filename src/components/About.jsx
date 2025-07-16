/**
 * @copyright 2024 ajithmalle
 * @license Apache-2.0
 */


import React from 'react'

const aboutItems = [
    {
        label: 'Project done',
        number: 2
    },
    {
        label: 'Years of experience',
        number: 0
    }
];

const About = () => {
  return (
    <section id='about' className='section'>
        <div className='container'>
            <div className='bg-zinc-800/50 p-7 md:p-12 rounded-2xl reveal-up'>
                <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
                    Welcome! This is Ajith Malle, a software web developer
                    with a knack for crafting visually stunning highly functional websites.
                    Combining creativity and technical expertise that excels in both appearance and performance
                </p>
                <div className='flex flex-wrap items-center gap-4 md:gap-7'>
                    {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className='flex items-center md:mb-2'>
                                    <span className='text-2xl md:text-4xl font-bold'>{number}</span>
                                    <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                                </div>
                                <p className='text-sm text-zinc-400'>{label}</p>
                            </div>
                        ))
                    }
                    <img className='ml-auto md:w-[40px] md:h-[40px]' src='images/logo.svg' alt='Logo' height={30} width={30}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
