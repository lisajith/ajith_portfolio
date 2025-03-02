/**
 * @copyright 2024 ajithmalle
 * @license Apache-2.0
 */


import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types';


const Navbar = ({navOpen}) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();
    
    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        // {
        //     label: 'Reviews',
        //     link: '#reviews',
        //     className: 'nav-link'
        // },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link1'
        }
    ];

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active')
        event.target.classList.add('active');
        lastActiveLink.current = event.target
        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    }

    const initActiveBox =() => {
        console.log(lastActiveLink.current);
        
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        
    }
    useEffect(initActiveBox, []);
    window.addEventListener('resize',initActiveBox);
    return (
        <nav className={'navbar '+(navOpen ? 'active' : '')}>
        {
            navItems.map(({label, link, className, ref}, key) => (
                <a href={link} key={key} className={className} ref={ref} onClick={activeCurrentLink}>
                    {label}
                </a>
            ))
        }
        <div className='absolute bg-blue-100/95 h-9 rounded-lg -z-10 transition-[top,left] duration-750' ref={activeBox}>
            
        </div>
    </nav>
  )
}


Navbar.proptypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar