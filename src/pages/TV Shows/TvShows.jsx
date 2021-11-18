import React from 'react'
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Col, Row} from "antd";
import "../page.scss";
import Page from "../layout/Page";
import Card from "../../components/Card";
import {tv} from "../index";



const TvShows = () => {

    const [popular, setPopularContent] = useState([]);

    useEffect(() => {

            tv().then(response => setPopularContent(response))
            console.log()
        
    },[]);

    return (
        <Page>
            <Row className="movies">

                {
                    popular && popular.map((el, index) => {
                        return (
                            <Col md={5} key={el + '_' + index}>
                                <div className="movies_sec">
                                    <NavLink to={'/tv-show/'+el.id}>
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

export default TvShows;