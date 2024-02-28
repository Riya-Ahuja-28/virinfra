import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import BlueLogo from './assets/images/BlueWhite.png'
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = ({handleHome, handleAboutus,handleService, contactus, setIsOpen, isOpen}) => {


    const toggleNavbar = () => {
        console.log("toggleNavbartoggleNavbartoggleNavbar", isOpen);
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        window.addEventListener('scroll', setIsOpen(false));
    
        return () => {
            window.removeEventListener('scroll', setIsOpen(false) );
            
        };
    }, []);
    return (
        <nav className='main-nav'>
        <div >
            <img src=
                {BlueLogo}
                className='logo'

            />
        </div>
        <div className='div-nav'>
            {/* <Navbar /> */}
            <div className="navbar-icon" onClick={toggleNavbar}>
                   <GiHamburgerMenu />
                </div>
            <div className="navbar">
                
                <div className={isOpen ? 'navbar-menu-open' : 'navbar-menu'}>
                    <div onClick={handleHome} className="nav-link">HOME</div>
                    <div onClick={handleService} className="nav-link">SERVICES</div>
                    <div onClick={handleAboutus} className="nav-link">ABOUT US</div>
                    <div onClick={contactus}  className="nav-link">CONTACT US</div>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;