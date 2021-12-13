import React from 'react'
import {NavLink} from "react-router-dom";
import {Col, Row} from "antd";
import "../page.scss";
import Page from "../layout/Page";
import Card from "../../components/Card";
import {tv} from "../index";
import useData from "../../hooks/useData";


const TvShows = () => {

    let data = useData(tv);

    return (
        <Page>
            <Row  justify="space-around" className="movies_conrainer movies">

                {
                    data && data.map((el, index) => {
                        return (
                            <Col md={5} key={el + '_' + index}>
                                <div className="movies_card">
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