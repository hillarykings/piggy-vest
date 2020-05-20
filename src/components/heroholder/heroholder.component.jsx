import React from 'react';
import './heroholder.styles.scss';
import googleApp from '../../img/google-play-badge.webp';
import iosApp from '../../img/iosbadge-101-image.webp';


const HeroHolder = () => {

    return(
        <div className='container' id='container'>
            <h1>The Better Way <br />To Save & Invest</h1>
            <p className='headline'>PiggyVest helps you achieve financial freedom by enabling you save responsibly and invest on the go. </p>
            <div className='earn'>
            <p>Earn 10% - 15.5% interests on savings. </p>
            <p>Earn over 25% return on investments.</p>
            </div>
            <button className='btn-large'>Create a Free Account</button><br />
            <img className='download  app_store_badges' src={googleApp} alt=""/>
            <img className='download  app_store_badges' src={iosApp} alt=""/>
        </div>
    )
}

export default HeroHolder;