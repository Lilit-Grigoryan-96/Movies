import {useEffect, useState} from "react";

const useData = (func,param) =>{

  
    const [contents, setContent] = useState([]);

    useEffect(() => {
       func(param).then(response => setContent(response));
    });

    return contents
};
export default useData;