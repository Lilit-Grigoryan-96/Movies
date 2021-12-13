import React from 'react'
import {Progress} from "antd";

function Card({img, title, date, vote, id, character}) {
    let className= vote > 7 ? 'bg-green' : 'bg-yellow';
    return (

        <div className="card" id={id}>
            <div className="card_head">
                <img loading="lazy" className="poster" src={img} alt=""/>
            </div>
            <div className="card_body">
                <h3>{title}</h3>
                <p>{date}</p>
                {/* <span>{vote}</span> */}
                {vote && <Progress type="circle" percent={vote*10} className={`progress ${className}`}/>}
                <p>{character}</p>
            </div>

        </div>
    );
}

export default Card;