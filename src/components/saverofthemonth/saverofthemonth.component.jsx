import React from 'react';
import "./saverofthemonth.style.scss"

export const SaverOfTheMonth = () => {
    return (  
		<section className="container saverofthemonth section">
        <div className="row">
			<h1 className="center bold">The saver of the month!</h1>
				<div className="col s12 l4">
					<img src="https://storage.googleapis.com/piggybankservice.appspot.com/main-assets/smallpic94b73e3c00.jpeg" className="responsive-img   meet-img" alt="saver of the month"/>
				</div>
        
			<div className="col s12 l6 offset">
				<div className="">
					<h1>Meet Robert</h1>
					<p>Every month, we shine a spotlight on one saver, asking them questions about their savings culture and how the product is specifically helping them shape how they spend and save for future responsibilities.</p>
					<a href="https://medium.com/@PiggyVest/meetapiggyvestsaver-robert-ekpo-8a997487d559" target="_blank" rel="noopener noreferrer" className="btn _margin-20">Meet Robert</a>
				</div>
			</div>
            </div>
        </section>
	
    )
}