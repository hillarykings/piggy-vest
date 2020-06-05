import React from 'react';
import security from '../../img/security-login-400-min.png';
import './promotional.styles.scss';


const Promotional = () => {

    return (
        <div className='main-container'>   
        <div className='promotional'>
            <img src={security} alt=""/>
            <div className='container-wrapper'>
            <h4>Your Security is our Priority</h4>
            <p>PiggyVest uses the highest levels of Internet Security, and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud.</p>
            </div>
        </div>
        </div>
    )
}


// export const InvestInBits = () => {

//     return (
//         <div className="main-div">
//             <div className="headline">
//             <h1 className="title">Invest in bits & on the go!</h1>
//             <p className="subtitle">Many investments are expensive, which makes it hard to get started. At PiggyVest, you too can invest in tiny & affordable chunks and still enjoy the same return rates in amazing opportunities.</p>
//             </div>
//         </div>
//     )
// }

export default Promotional;