import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 50) {
                setNav(true);
            } else {
                setNav(false);
            }
        };

        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoClick = () => {
        scroll.scrollToTop();
    };

    const toggleMenu = () => {
        setNav(!nav);
    };

    return (
        <nav className={nav ? "nav active" : "nav"}>
    <div className="nav-container">
        <Link to='main' className='logo' smooth={true} duration={1000}>
            <img src={logo} alt='Logo' onClick={handleLogoClick}/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn' onClick={toggleMenu}/>
        <label className='menu-icon' htmlFor='menu-btn' onClick={toggleMenu}>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='main' smooth={true} duration={1000}>Home</Link></li>
            <li><Link to='features' smooth={true} duration={1000}>Features</Link></li>
            <li><Link to='contact' smooth={true} duration={1000}>Contact</Link></li>
            <li className='sign-up-btn'><Link onClick={handleSignUpClick}> Login / SignUp</Link> </li>
        </ul>
    </div>
</nav>
);
}

export default Navbar;