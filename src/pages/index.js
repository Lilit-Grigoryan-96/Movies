import axios from "axios";

const KEY= 'api_key=84b4ae21e6430ff5a2eea4866300ebf8';
const URL = 'https://api.themoviedb.org/3/';
const STREAMING_API = URL + 'discover/movie?'+KEY+'&watch_region=US&with_watch_monetization_types=flatrate';
const TV_API = URL + 'tv/on_the_air?sort_by=popularity.desc&'+KEY;
const RENT_API = URL + 'discover/movie?'+KEY+'&watch_region=US&with_watch_monetization_types=rent';
const THEATER_API = URL + 'discover/movie?'+KEY+'&region=US&with_release_type=3';
const FREE_API = URL + 'discover/movie?'+KEY+'&watch_region=US&with_watch_monetization_types=free';
const NOWPLAYING_API = 'https://api.themoviedb.org/3/trending/movie/day?'+KEY;
const WEEK_API = 'https://api.themoviedb.org/3/trending/movie/week?'+KEY;
const POPULAR = URL + 'movie/popular?'+KEY;
const PEOPLE = URL + 'person/popular?'+KEY;

export const streaming = async () =>{

    return axios.get(STREAMING_API)
        .then(response => {
            return response.data.results.map((el, index)=>({
                     id:el.id,
                     img:'https://image.tmdb.org/t/p/w500/'+el.poster_path,
                     title:el.original_title ? el.original_title : el.original_name,
                     date:el.release_date ? el.release_date : el.first_air_date,
                     vote:el.vote_average
                 } ));

        })
        .catch(error => console.log('Error:', error));
};

export const tv = async () =>{
    return axios.get(TV_API)
                .then(response =>{
                    return response.data.results.map((el, index)=>({
                            id:el.id,
                            img:'https://image.tmdb.org/t/p/w500/'+el.poster_path,
                            title:el.original_title ? el.original_title : el.original_name,
                            date:el.release_date ? el.release_date : el.first_air_date,
                            vote:el.vote_average
                        } ));
                })
                .catch(error => console.log('Error:', error));
};
export const rent = async () =>{
    return axios.get(RENT_API)
        .then(response => {
            return response.data.results.map((el, index)=>({
                            id:el.id,
                            img:'https://image.tmdb.org/t/p/w500/'+el.poster_path,
                            title:el.original_title ? el.original_title : el.original_name,
                            date:el.release_date ? el.release_date : el.first_air_date,
                            vote:el.vote_average
                        } ));
        })
        .catch(error => console.log('Error:', error));

};

export const theater = async () =>{
    return axios.get(THEATER_API)
        .then(response => {
            return response.data.results.map((el, index)=>({
                            id:el.id,
                            img:'https://image.tmdb.org/t/p/w500/'+el.poster_path,
                            title:el.original_title ? el.original_title : el.original_name,
                            date:el.release_date ? el.release_date : el.first_air_date,
                            vote:el.vote_average
                        } ));
        }).catch(error => console.log('Error:', error))
};
export const free = async () =>{

    return axios.get(FREE_API)
        .then(response => {
            return response.data.results.map((el, index)=>({
                            id:el.id,
                            img:'https://image.tmdb.org/t/p/w500/'+el.poster_path,
                            title:el.original_title ? el.original_title : el.original_name,
                            date:el.release_date ? el.release_date : el.first_air_date,
                            vote:el.vote_average
                        } ));
        })
        .catch(error => console.log('Error:', error));

};
export const nowPlaying = async () =>{

    return axios.get(NOWPLAYING_API)
        .then(response => {
            return response.data.results.map((el, index)=>({
                            id:el.id,
                            img:'https://image.tmdb.org/t/p/w500/'+el.poster_path,
                            title:el.original_title ? el.original_title : el.original_name,
                            date:el.release_date ? el.release_date : el.first_air_date,
                            vote:el.vote_average
                        } ));

        })
        .catch(error => console.log('Error:', error))

};
export const week = async () =>{

    return axios.get(WEEK_API)
        .then(response => {
            return response.data.results.map((el, index)=>({
                            id:el.id,
                            img:'https://image.tmdb.org/t/p/w500/'+el.poster_path,
                            title:el.original_title ? el.original_title : el.original_name,
                            date:el.release_date ? el.release_date : el.first_air_date,
                            vote:el.vote_average
                        } ));
        })
        .catch(error => console.log('Error:', error))
};

export const popularMovies = async () =>{

    return axios.get(POPULAR)
        .then(response => {
            return response.data.results.map((el, index)=>({
                            id:el.id,
                            img:'https://image.tmdb.org/t/p/w500/'+el.poster_path,
                            title:el.original_title ? el.original_title : el.original_name,
                            date:el.release_date ? el.release_date : el.first_air_date,
                            vote:el.vote_average
                        } ));
        })
        .catch(error => console.log('Error', error))

};

export const getVideo = async (id) =>{
    return axios.get('https://api.themoviedb.org/3/movie/'+id+'/videos?api_key=84b4ae21e6430ff5a2eea4866300ebf8')
        .then(response =>{
            return response.data.results[0].key;
        })
        .catch(error => console.log('Error', error))
};

export const movieDescription  = async (id) =>{
    return axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=84b4ae21e6430ff5a2eea4866300ebf8&append_to_response=credits')
        .then(response =>{
            return response.data;

        })
        .catch(error => console.log('Error', error))
};

export const actor = async (id) =>{
    return axios.get('https://api.themoviedb.org/3/person/'+id+'?api_key=84b4ae21e6430ff5a2eea4866300ebf8&append_to_response=credits')
        .then(response =>{
            return response.data;
        })
        .catch(error => console.log('Error', error))
};
export const people = async () =>{
    return axios.get(PEOPLE)
        .then(response =>{
            return response.data.results;
        })
        .catch(error => console.log('Error', error))
};
export const search = async (param) =>{
    return axios.get('https://api.themoviedb.org/3/search/movie?api_key=84b4ae21e6430ff5a2eea4866300ebf8&query=' +param )
        .then(response =>{
            return response.data.results;
        })
        .catch(error => console.log('Error', error))
};