import React from 'react'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./SearchPage.css"
import {search} from "../index"

const SearchPage = () => {
    const [contents, setContent] = useState([]);
    let { param } = useParams();

    useEffect(() => {
        search(param).then(response => setContent(response))
    });

    return (
        <div className="search_card_wrapper">
            {
                contents && contents.map((el, index) => {
                    return (
                        <div className='search_card' key={el + '_' + index}>
                            <div className='card_img'>
                                <img src={'https://image.tmdb.org/t/p/w500/' + el.poster_path}/>
                            </div>
                            <div className='details'>
                                <h3>{el.original_title}</h3>
                                <p className='date'>{el.release_date}</p>
                                <p className='overview'>{el.overview}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};


export default SearchPage;