import React from 'react'
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Col, Row} from "antd";
import "../page.scss";
import Page from "../layout/Page";
import Card from "../../components/Card";
import {fetchMovieByFilter} from "../index";
import Filters from '../../components/Filters';
import useFilter from "../../hooks/useFilter";
const Movies = () => {

   const {filterMovies, setFilterMovies} = useFilter(fetchMovieByFilter);

    return (
        <Page>
            <Row justify="space-around" className="movies_conrainer">
                <Col lg={6}>
                    <Filters setFilterMovies={setFilterMovies}/>
                </Col>
                <Col lg={16}>
                    <Row className="movies">
                        {
                            filterMovies && filterMovies.map((el, index) => {
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
                </Col>
            </Row>
            
        </Page>
    )
};

export default Movies;