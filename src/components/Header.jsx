/**
 * @copyright 2024 ajithmalle
 * @license Apache-2.0
 */


import React, { useState } from 'react'
import Navbar from './Navbar'

const Header = () => {

    const [ navOpen, setNavOpen ] = useState(false);

  return (
    <header className='fixed left-0 top-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
        <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr,3fr,1fr]'>
            <h1 className=''>
                <a href='/' className='logo'>
                    <img src='/images/logo.svg' alt='Ajith Malle' height={40} width={40} />
                </a>
            </h1>
            <div className='relative md:justify-self-center'>
                <button 
                    className='text-center grid place-items-center md:hidden h-10 w-10 bg-zinc-50/10 rounded-xl ring-inset ring-1 ring-zinc-50/[0.1] hover:bg-zinc-50/15 hover:cursor-pointer transition-all duration-500 backdrop-blur-2xl transform-[shadow,background-color] active:scale-90' 
                    onClick={() => setNavOpen(!navOpen)}
                >
                    <span className='material-symbols-rounded'>
                        {navOpen ? "close" : "menu"}
                    </span>
                </button>
                <Navbar navOpen={navOpen}/>
            </div>
            <a href='#contact' className='btn btn-secondary'>
                Contact Me
            </a>
        </div>
    </header>
  )
}

export default Header