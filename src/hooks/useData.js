import {useEffect, useState} from "react";

const useData = (func,param) =>{

  
    const [contents, setContent] = useState([]);

    useEffect(() => {
       func(param).then(response => setContent(response));
    },[param, func]);

    return contents
};
export default useData;