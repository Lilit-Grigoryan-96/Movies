import React from 'react'
import Page from "../layout/Page";
import Search from "../../components/Search"
import MoviesSection from "./components/MoviesSection";
import {rent, streaming, theater, tv, free, nowPlaying, week} from "../index";
import useHomeFetch from "../../hooks/useHomeFetch";


const Home = () =>{

    const opt = useHomeFetch(streaming, tv, rent, theater, free, nowPlaying, week);
    console.log(opt);
    return (
        <Page>
            <Search/>
            {
                opt && opt.map((el,ind)=>{
                    return(
                        <MoviesSection title={el.title} arr={el.arr} video={el.video}  key={el + '_' + ind}/>
                    )
                })
            }

        </Page>
    )
};

export default Home;