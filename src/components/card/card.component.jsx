import React from 'react';
import './card.styles.scss';

const Card = (props) => {

    return (
        
    <div className="card-list s12 m6" >{props.children}</div>
          
    )
}


export default Card;