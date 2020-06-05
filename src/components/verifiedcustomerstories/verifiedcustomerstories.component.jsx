import React, { useState } from 'react'
import Card from '../card/card.component'
import './verifiedcustomerstories.styles.scss'

export const VerifiedCustomerstories = () => {

    const [state, setState] = useState({
        cards: [
            {
                id: 1,
                name: `Felicia E.`,
                avatar: `https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img844de894dc.jpeg`,
                feedback: `"I never really believed in saving through the regular wooden savings box (kolo), but as soon as I heard about piggyvest platform, I knew it was for me and I've not turned back since then. I actually introduced it to my sisters and it's been the best...`,
                date: `Posted on Thursday, 28th of May 2020 by 16:46 PM`
            },
            {
                id: 2,
                name: `Rasheed H.`,
                avatar: `https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/ava83cbea9590.jpg`,
                feedback: `"Piggyvest has been a turning point in my life, after I started using this app my saving habit and discipline have just been superb, with the standing order for them to deduct from your account depending on how you want it either weekly, daily or...`,
                date: `Posted on Wednesday, 27th of May 2020 by 21:52 PM`
            },
            {
                id: 3,
                name: `Rosamond E.`,
                avatar: `https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img7742c2ffbb.jpeg`,
                feedback: `"Hey there. I am a serving corper about to finish her service year without savings. I have been thinking of how I can save up some money without touching it and I came across a YouTuber (Nelo_okeke) who told her story and I got sold out on the idea...`,
                date: `Posted on Wednesday, 27th of May 2020 by 14:07 PM`
            },
            {
                id: 4,
                name: `Kazeem A.`,
                avatar: `https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img61f7e070bf.jpeg`,
                feedback: `"Hi piggyvest, thanks for showing me what saving is truly is and how fun it could be to save and invest. All was made real since I joined piggyvest. Your response to your customers are always fast and your promises are kept. E. G the referral bonus...`,
                date: `Posted on Tuesday, 12th of May 2020 by 14:41 PM`
            },
            {
                id: 5,
                name: `Promise I.`,
                avatar: `https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img3e63f88ef6.jpeg`,
                feedback: `"I just joined Piggyvest 4days ago via Instagram and I didn't waste time signing up because this is the platform I've been searching for where I can invest a chunk of money as a student and watch it grow. Piggyvest is the best Saving Platform so far,...`,
                date: `Posted on Tuesday, 12th of May 2020 by 14:41 PM`
            },
            {
                id: 6,
                name: `Babatunde O.`,
                avatar: `https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img380411040c.jpeg`,
                feedback: `"I have always saved my daily profit in a local made bank called Kolo(Yoruba) piggybank, but when a friend told me about this PiggyVest. I was amazed. This is exactly what I needed to build my business."`,
                date: `Posted on Saturday, 9th of May 2020 by 22:13 PM`
            },
        ]
    })


    return (
        <div>
           {/* <Card className="container">
               {
                   state.cards.map(card => {
                   return (
                    <div  classNameName="row" key={card.id}>
                    <div className="col s12 l120-">
                          <h3 className="card-title">{card.name}</h3>
                    <div className="card-image">
                        <img src={card.avatar} alt="customer" className="img responsive-img customer-img" />
                    </div>
                      <div className="col s12 l6 offset-l1">
                          <p>{card.feedback}</p>
                        <div>
                            <p>{card.date}</p>
                        </div>
                        </div>
                      </div>
                    </div>
                   )
                   })
               }
            </Card>  */}
        </div>
    )
}
