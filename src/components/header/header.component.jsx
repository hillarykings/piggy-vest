import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/piggy-png_1_.png';
import './header.styles.scss';



const Header = () => {

    return (
       <div className="navbar-fixed">
        <nav>
        <div className='nav-wrapper'>
            <img className='brand-logo' src={Logo} alt="Logo"/>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <div id='nav-mobile' className='right hide-on-med-and-down'>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/stories'>Stories</Link>
            <Link className='link' to='/faq'>FAQ</Link>
            <Link className='link' to='/blog'>Blog</Link>
            <Link className='link' to='/log-in'>Log In</Link>
            <Link className='link create-account' to='/create-account'>Create a Free Account</Link>
            </div>
            <div className="sidenav" id="mobile-demo">
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