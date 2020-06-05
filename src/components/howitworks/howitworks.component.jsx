import React, { useState } from 'react';
import Card from '../card/card.component';
import './howitworks.styles.scss';

const HowItWorks = () => {
    // constructor() {
    //     super();

    //     this.state = {
    //            cards: [
    //             {
    //                 id: 1,
    //                 cardImage: `https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-1.png`,
    //                 cardTitle: `Enjoy\n quarterly savings`,
    //                 cardContent: `Join over 100,000 users that use our quarterly savings feature called "PiggyBank" to reach their general/personal savings goals more quickly.`,
    //                 },
    //                 {
    //                 id: 2,
    //                 cardImage: `https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-3.png`,
    //                 cardTitle: `Reach\n multiple targets`,
    //                 cardContent: `Set and reach multiple saving goals you set using our "Target Savings" feature, you can save for holidays, fees or even special events.`,
    //                 },
    //                 {
    //                 id: 3,
    //                 cardImage: `https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-2.png`,
    //                 cardTitle: `Lock\n funds away`,
    //                 cardContent: `Use our "SafeLock" feature to lock funds away so you dont have access until your set date. You also earn over 13% p.a.`,
    //                 },
    //            ]
            
    //        }
    // }

    const [card, setcard] = useState({
      cards: [
        {
            id: 1,
            cardImage: `https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-1.png`,
            cardTitle: `Enjoy\n quarterly savings`,
            cardContent: `Join over 100,000 users that use our quarterly savings feature called "PiggyBank" to reach their general/personal savings goals more quickly.`,
            },
            {
            id: 2,
            cardImage: `https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-3.png`,
            cardTitle: `Reach\n multiple targets`,
            cardContent: `Set and reach multiple saving goals you set using our "Target Savings" feature, you can save for holidays, fees or even special events.`,
            },
            {
            id: 3,
            cardImage: `https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-2.png`,
            cardTitle: `Lock\n funds away`,
            cardContent: `Use our "SafeLock" feature to lock funds away so you dont have access until your set date. You also earn over 13% p.a.`,
            },
       ]
    })
    const [card1, setcard1] = useState({
      cards: [
        {
            id: 1,
            cardImage: `https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-4.png`,
            cardTitle: `Co-invest
            in opportunities`,
            cardContent: `Join other PiggyVest users to co-invest in guaranteed fixed income investments & other amazing projects.`,
            },
            {
            id: 2,
            cardImage: `https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-5.png`,
            cardTitle: `Decide
            on what to invest`,
            cardContent: `You have complete control on the type of investments you want to engage. All opportunities are pre-vetted by PiggyVest.`,
            },
            {
            id: 3,
            cardImage: `https://storage.googleapis.com/piggybankservice.appspot.com/statics/New-homepage-6.png`,
            cardTitle: `Watch
            your portfolio grow`,
            cardContent: `Easily monitor the progress of your investments from your PiggyVest dashboard.`,
            },
       ]
    })

    return (
        <div className="container main-div" >
           <div>
           <div className="headline">
                <h1 className="title">Save smartly & responsibly!</h1>
                <p className="subtitle">PiggyVest helps you reach your savings target much faster with various savings types. Plus you can even team up with others to reach joint goals.</p>
            </div>

            <Card>
            {card.cards.map(card => (
                     <div  classNameName="row" id="card-list" key={card.id}>
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


           <div style={{ marginTop: "155px"}}>       
            <div className="headline" style={{ width: "85%"}}>
                <h1 className="title">Invest in bits & on the go!</h1>
                <p className="subtitle">Many investments are expensive, which makes it hard to get started.<br />
                At PiggyVest, you too can invest in tiny & affordable chunks and still enjoy the same return rates in amazing opportunities.</p>
            </div>

            <Card>
            {card1.cards.map(card => (
                     <div  classNameName="row" id="card-list" key={card.id}>
                     <div className="col s12 m6">
                       <div className="card">
                         <div className="card-image">
                           <img src={card.cardImage} alt="home" className="img" />
                           <h3 className="card-title">{card.cardTitle}</h3>
                           {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
                         </div>
                         <div className="card-content">
                           <p   style={{ paddingTop: "30px"}}>{card.cardContent}</p>
                         </div>
                       </div>
                     </div>
                   </div>
                ))
                }
            </Card>
            </div>
        </div>
 )

}

export default HowItWorks;