import React,{useEffect, useState} from 'react'
import Page from "../layout/Page";
import Search from "../../components/Search"
import MoviesSection from "./components/MoviesSection";
import {rent, streaming, theater, tv, free, nowPlaying, week} from "../index";


const Home = () =>{

    const [streamingContent, setStreamingContent] = useState([]);
    const [tvContent, setTvContent] = useState([]);
    const [rentContent, setRentContent] = useState([]);
    const [theaterContent, setTheaterContent] = useState([]);
    const [freeContent, setFreeContent] = useState([]);
    const [nowPlayingContent, setNowPlayingContent] = useState([]);
    const [weekContent, setWeekContent] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setStreamingContent(await streaming());
            setTvContent(await tv());
            setRentContent(await rent());
            setTheaterContent(await theater());
            setFreeContent(await free());
            setNowPlayingContent(await nowPlaying());
            setWeekContent(await week())
        };
        fetchApi();

    },[]);
    const opt= [
        {
            title: 'What\'s Popular',
            arr:[{ categories: 'Streaming ', movies: streamingContent},{ categories: 'On TV',movies: tvContent},
                { categories: 'For Rent',movies: rentContent},{categories: 'In Theaters',movies: theaterContent},],
            video: false
        },
        {
            title: 'Free To Watch',
            arr:[{ categories: 'Movies',movies: tvContent},{ categories: 'TV',movies: freeContent}],
            video: false
        },
        {
            title: 'Latest Trailers',
            arr:[{ categories: 'Streaming ', movies: streamingContent},{ categories: 'On TV',movies: tvContent},
                { categories: 'For Rent',movies: rentContent},{categories: 'In Theaters',movies: theaterContent},],
            video: true
        },
        {
            title: 'Trending',
            arr:[{ categories: 'Today ', movies: nowPlayingContent},{ categories: 'This Week',movies: weekContent},],
            video: false
        },

    ];

    return (
        <Page>
            <Search/>
            {
                opt.map((el,ind)=>{
                    return(
                        <MoviesSection title={el.title} arr={el.arr} video={el.video}  key={el + '_' + ind}/>
                    )
                })
            }

        </Page>
    )
};

export default Home;