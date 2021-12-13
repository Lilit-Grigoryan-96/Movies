import {useEffect, useState} from "react";

const useHomeFetch = (streaming, tv, rent, theater, free, nowPlaying, week) =>{
    const [streamingContent, setStreamingContent] = useState([]);
    const [tvContent, setTvContent] = useState([]);
    const [rentContent, setRentContent] = useState([]);
    const [theaterContent, setTheaterContent] = useState([]);
    const [freeContent, setFreeContent] = useState([]);
    const [nowPlayingContent, setNowPlayingContent] = useState([]);
    const [weekContent, setWeekContent] = useState([]);


    useEffect(() => {
        streaming().then(response => setStreamingContent(response));
        tv().then(response => setTvContent(response));
        rent().then(response => setRentContent(response));
        theater().then(response => setTheaterContent(response));
        free().then(response => setFreeContent(response));
        nowPlaying().then(response => setNowPlayingContent(response));
        week().then(response => setWeekContent(response));
    },[]);

    return [
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
};
export default useHomeFetch;