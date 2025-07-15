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
        label: 'Years of experince',
        number: 0
    }
];

const About = () => {
  return (
    <section id='about' className='section'>
        <div className='container'>
            <div className='bg-zinc-800/50 p-7 md:p-12 rounded-2xl reveal-up'>
                <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
                    Welcome! This is Ajith Malle, a software web developer, I am a passionate and self-driven Computer Science Graduate with a strong interest in web development. I would like to create a responsive, and user-friendly websites using modern technologies like React JS and Tailwind CSS. I am willing to learn new tools and improve my skills. My goal is to grow as a productive and efficient software professional and contribute to meaningful software solutions while continuously learning and improving.
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
