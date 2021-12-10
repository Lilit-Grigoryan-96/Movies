import {useEffect, useState} from "react";



const useFilter = (func) =>{
    const [filterMovies, setFilterMovies] = useState([]);

    useEffect(() => {
        func().then(response => setFilterMovies(response));
    },[]);

    return {filterMovies, setFilterMovies};

    
};
export default useFilter;