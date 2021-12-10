
import {rent, streaming, theater, tv, free, nowPlaying, week} from "../index";

export const useFetch = () =>{
        

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
    } 