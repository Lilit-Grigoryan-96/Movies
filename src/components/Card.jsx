import React from 'react'

function Card({img, title, date, vote, id, character}) {

    return (

        <div className="card" id={id}>
            <div className="card_head">
                <img loading="lazy" className="poster" src={img} alt=""/>
            </div>
            <div className="card_body">
                <h3>{title}</h3>
                <p>{date}</p>
                <span>{vote}</span>
                <p>{character}</p>
            </div>

        </div>
    );
}

export default Card;