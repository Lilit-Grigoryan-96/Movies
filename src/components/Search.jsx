import React, {useState} from 'react'
import classes from "./components.module.scss"
import {Col, Row} from "antd";
import {Link} from "react-router-dom";
const Search = () =>{
    const [val, setVal] = useState('');

    return (
        <Row justify="center">
            <Col md={22} className={classes.search_row}>
                <h2>Welcome.</h2>
                <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                <form className={classes.search_form}>
                    <input type="text" value={val} onInput={(e) => setVal(e.target.value)}/>
                    <Link to={"/search/" + val}>
                        <button>
                            search
                        </button>
                    </Link>
                </form>
            </Col>
        </Row>
    )
};

export default Search;