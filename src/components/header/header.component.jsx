import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/piggy-png_1_.png';
import './header.styles.scss';



const Header = () => {


    return (
       <div className="navbar-fixed z-depth-0">
        <nav>
        <div className='nav-wrapper z-depth-0'>
            <img className='brand-logo' src={Logo} alt="Logo"/>
            <a href="/" className="sidenav-trigger" data-target="mobile-links">
                <i className="material-icons text-blue">menu</i>
            </a>
            <div id="nav-bar" className='right hide-on-med-and-down'>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/stories'>Stories</Link>
                <Link className='link' to='/faq'>FAQ</Link>
                <Link className='link' to='/blog'>Blog</Link>
                <Link className='link' to='/log-in'>Log In</Link>
                <Link className='link create-account' to='/create-account'>Create a Free Account</Link>
            </div>
            <div className="sidenav" id="mobile-links">
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/stories'>Stories</Link>
                <Link className='link' to='/faq'>FAQ</Link>
                <Link className='link' to='/blog'>Blog</Link>
                <Link className='link' to='/log-in'>Log In</Link>
                <Link className='link create-account' to='/create-account'>Create a Free Account</Link>
            </div>
        </div>
        </nav>
       </div>
    )
}

export default Header;