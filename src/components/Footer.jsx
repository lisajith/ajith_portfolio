/**
 * @copyright 2024 ajithmalle
 * @license Apache-2.0
 */


import React from 'react'
import { ButtonPrimary } from './Button';

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    // {
    //   label: 'Reviews',
    //   href: '#reviews'
    // },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/lisajith'
    },
    {
      label: 'LinkedIn',
      href: '#'
    },
    {
      label: 'Twitter X',
      href: '#'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/lisa_badguy_kpop_'
    },
    {
      label: 'CodePen',
      href: '#'
    }
  ];

const Footer = () => {
  return (
    <footer className='section'>
        <div className="container">

            <div className="lg:grid lg:grid-cols-2">

                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                        Let&apos;s work together today!
                    </h2>
                    <ButtonPrimary href="mailto:lisajith27@gmail.com" label="Start Project" icon="chevron_right" classes="reveal-up"/>
                </div>

                <div className="grid grid-cols-2 gap-2 lg:pl-20">
                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>
                        <ul>
                            {
                                sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a href={href} className='block text-sm text-zinc-400 py-1 hover:text-zinc-200 duration-400 transition-all reveal-up'>
                                            {label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <p className="mb-2 reveal-up">Socials</p>
                        <ul>
                            {
                                socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a href={href} target='_blank' className='block text-sm text-zinc-400 py-1 hover:text-zinc-200 duration-400 transition-all reveal-up'>
                                            {label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10">
                <a href="" className=" mb-20">
                    <img src="images/logo.svg" height={40} width={40} alt="Logo"/>
                </a>
                <p className='text-zinc-500 text-sm  mb-20'>
                    &copy; {new Date().getFullYear()} <span className='text-zinc-200'>ajithkumarmalle</span>
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer