/**
 * @copyright 2024 ajithmalle
 * @license Apache-2.0
 */


import React from 'react'
import { ButtonOutline, ButtonPrimary } from './Button'

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36'>
        <div className='container lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
            <div>
                <div className='flex items-center gap-3'>
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img className='img-cover' src='/images/dp1.jpg' alt='' height={40} width={40}/>
                    </figure>
                    <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                        <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                            Available for work
                    </div>
                </div>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                    Building Scalable Modren Websites for the Future
                </h2>
                <div className="flex items-center gap-3">
                    <ButtonPrimary label="Download CV" icon="download" href="files/resume_ajith.pdf"/>
                    <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward"/>
                </div>
            </div>
            <div className="hidden lg:block">
                <figure className='w-full max-w-[390px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% border-[2px] border-zinc-600 rounded-[30px] overflow-hidden'>
                    <img className='w-full' src='images/blaa.png' alt='' width={50}/>
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero