import React from 'react';
import './card.styles.scss';

const Card = (props) => {

    return (
        
    <div className="card-list" >{props.children}</div>
          
    )
}


export default Card;