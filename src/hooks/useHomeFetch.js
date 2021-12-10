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

    });

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