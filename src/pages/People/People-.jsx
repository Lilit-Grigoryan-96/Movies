import React from 'react'
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Col, Row} from "antd";
import "../page.scss";
import Page from "../layout/Page";
import Card from "../../components/Card";
import personImg from "../../assets/images/person.svg"
import {people} from "../index"
import PaginationRow from "./PaginationRow";
import classes from "./People.module.scss"


const People = () => {
    const [contents, setContent] = useState([]);
    const [currentPage, setPage] = useState(1);

    useEffect(() => {
        people(currentPage).then(response => setContent(response));
    });
//
    return (
        <Page>
            <Row justify="space-around" className="movies_conrainer movies ">

                    {
                        contents && contents.map((el, index) => {
                                return (
                                    <Col md={5} key={el + '_' + index} className={classes.card}>
                                        <div>
                                            <NavLink to={'/people/' + el.id}>
                                                <Card
                                                      id={index}
                                                      img={el.profile_path ? 'https://image.tmdb.org/t/p/w500/' + el.profile_path: personImg}
                                                      title={el.name}
                                                />
                                            </NavLink>
                                        </div>
                                    </Col>
                                )
                            })
                    }

            </Row>
            <PaginationRow currentPage={currentPage} setPage={setPage}/>
        </Page>
    )
};

export default People;