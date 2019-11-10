import React from 'react';
import { Button } from '../index';
import "./card.scss"

const generateCredits = credits =>
    <div>
        {credits.map((credit, idx) =>
            <p key={idx}>{credit.amountOfCredits} {credit.creditType} Credits for {credit.title}</p>
        )}
    </div>

const Card = props => {
    const { title, price, includes, credits } = props.data;
    return (
        <div className="card">
            <h2 className="card__header">{title}</h2>
            <h2 className="card__subscription">12 Month Subscription ${price}</h2>
            <p>Includes {includes}</p>
            {generateCredits(credits)}
            <Button />
        </div>
    )
}

export default Card