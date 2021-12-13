import {useEffect, useState} from "react";



const useFilterFetch = (func) =>{
    const [filterMovies, setFilterMovies] = useState([]);

    useEffect(() => {
        func().then(response => setFilterMovies(response));
    },[func]);

    return {filterMovies, setFilterMovies};

    
};
export default useFilterFetch;