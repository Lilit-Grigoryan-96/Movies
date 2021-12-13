import React from 'react'
import {useParams} from "react-router-dom";
import "./SearchPage.css"
import {search} from "../index"
import noimg from "../../assets/images/noimg.png"
import useData from "../../hooks/useData";

const SearchPage = () => {

    let { param } = useParams();
    let data = useData(search, param);

    return (
        <div className="search_card_wrapper">
            {
                data && data.map((el, index) => {
                    return (
                        <div className='search_card' key={el + '_' + index}>
                            <div className='card_img'>
                                <img src={el.poster_path ? 'https://image.tmdb.org/t/p/w500/' + el.poster_path : noimg} alt="movie"/>
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