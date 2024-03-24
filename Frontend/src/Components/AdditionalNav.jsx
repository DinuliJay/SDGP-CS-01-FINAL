import React, {useState} from 'react';
import logo from '../images/logo.png'
// import {Link} from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';
import {useNavigate} from "react-router-dom";


function AdditionalNav() {
    const [nav,setnav] = useState(false);
    const navigate = useNavigate();

    const handleSignUpClick = () =>{
        navigate('/signup')
    }

    const handleLoginClick = () =>[
        navigate('/login')
    ]

    const handleLogoClick = () =>{
        navigate('/')
    }

    const handleHomeClick = () =>{
        navigate('/')
    }

    const handleFeaturesClick = () =>{
        navigate('/')
    }

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

    const toggleMenu = () => {
        setnav(!nav);
    };

    window.addEventListener('scroll',changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <div className="nav-container">
                <Link to='/' className='logo' smooth={true} duration={1000}>
                    <img src={logo} alt='Logo' onClick={handleLogoClick}/>
                </Link>
                <input className='menu-btn' type='checkbox' id='menu-btn'  onClick={toggleMenu}/>
                <label className='menu-icon' from='menu-btn'  onClick={toggleMenu}>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li><Link to='/' smooth={true} duration={1000} onClick={handleHomeClick}>Home</Link></li>
                    <li><Link to='/' smooth={true} duration={1000} onClick={handleFeaturesClick}>Features</Link></li>
                    <li><Link to='/' smooth={true} duration={1000} onClick={handleHomeClick}>Contact</Link></li>
                    <li className='/signup'><Link onClick={handleSignUpClick}> Login / SignUp</Link> </li>
                </ul>
            </div>
        </nav>
    )
}

export default AdditionalNav;
