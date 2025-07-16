/**
 * @copyright 2024 ajithmalle
 * @license Apache-2.0
 */


import React from 'react'
import ReactLenis from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up')
    
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-50 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y:0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
  })

  
  return (
    <ReactLenis root>
      <Header />
      <main>
        <h1 className="visually-hidden">
          Ajith Malle – Web Developer | Frontend React Developer | Ajith Krishiii Portfolio
        </h1>

        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App
