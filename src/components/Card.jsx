import React from 'react'
import classes from "./components.module.scss";



function Card({img, title, date, vote, id, character}) {

    return (

        <div className={classes.card} id={id}>
            <div className={classes.card_head}>
                    <a className="image">
                        <img loading="lazy" className="poster"
                             src={img} alt=""/>
                    </a>
            </div>
            <div className={classes.card_body}>
                <h3>{title}</h3>
                <p>{date}</p>
                <span>{vote}</span>
                <p>{character}</p>
            </div>

        </div>
    );
}

export default Card;