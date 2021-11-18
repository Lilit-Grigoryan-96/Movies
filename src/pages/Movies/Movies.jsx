import React from 'react'
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Col, Row} from "antd";
import "../page.scss";
import Page from "../layout/Page";
import Card from "../../components/Card";
import {popularMovies} from "../index";



const Movies = () => {

    const [popular, setPopularContent] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setPopularContent(await popularMovies())
        };
        fetchApi();
    },[]);

    return (
        <Page>
            <Row className="movies">

                {
                    popular && popular.map((el, index) => {
                        return (
                            <Col md={5} key={el + '_' + index}>
                                <div className="movies_sec">
                                    <NavLink to={'/movie/'+el.id}>
                                        <Card
                                              id={el.id}
                                              img={el.img}
                                              title={el.title}
                                              date={el.date}
                                              vote={el.vote}
                                        />

                                    </NavLink>
                                </div>

                            </Col>
                        )
                    })
                }

            </Row>
        </Page>
    )
};

export default Movies;