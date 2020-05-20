import React, { useState, Component } from 'react';
import Card from '../card/card.component';
import './howitworks.styles.scss';

class HowItWorks extends Component {
    constructor() {
        super();

        this.state = {
               cards: [
                {
                    id: 1,
                    cardImage: 'https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-1.png',
                    cardTitle: 'Enjoy quarterly savings',
                    cardContent: 'Join over 100,000 users that use our quarterly savings feature called "PiggyBank" to reach their general/personal savings goals more quickly.',
                    },
                    {
                    id: 2,
                    cardImage: 'https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-3.png',
                    cardTitle: 'Reach multiple targets',
                    cardContent: 'Set and reach multiple saving goals you set using our "Target Savings" feature, you can save for holidays, fees or even special events.',
                    },
                    {
                    id: 3,
                    cardImage: 'https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-2.png',
                    cardTitle: 'Lock funds away',
                    cardContent: 'Use our "SafeLock" feature to lock funds away so you dont have access until your set date. You also earn over 13% p.a.',
                    },
               ]
            
           }
    }


 render() {
    return (
        <div className="container main-div" >
            <div className="headline">
                <h1 className="title">Save smartly & responsibly!</h1>
                <p className="subtitle">PiggyVest helps you reach your savings target much faster with various savings types. Plus you can even team up with others to reach joint goals.</p>
            </div>

            <Card>
            {this.state.cards.map(card => (
                     <div  classNameName="column" id="card-list" key={card.id}>
                     <div className="col s12 m6">
                       <div className="card">
                         <div className="card-image">
                           <img src={card.cardImage} alt="home" className="img" />
                           <h3 className="card-title">{card.cardTitle}</h3>
                           {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
                         </div>
                         <div className="card-content">
                           <p>{card.cardContent}</p>
                         </div>
                       </div>
                     </div>
                   </div>
                ))
                }
            </Card>
        </div>
 )
 }

}

export default HowItWorks;