import {useEffect, useState} from "react";



const useFilter = (func, movieUrl) =>{
    const [filterMovies, setFilterMovies] = useState([]);

    useEffect(() => {
        func(movieUrl).then(response => setFilterMovies(response));
    },[func]);

    return {filterMovies, setFilterMovies};

    
};
export default useFilter;