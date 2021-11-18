import React from 'react'
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Col, Row} from "antd";
import "../page.scss";
import Page from "../layout/Page";
import Card from "../../components/Card";
import personImg from "../../assets/images/person.svg"
import {people} from "../index"


const People = () => {
    const [contents, setContent] = useState([]);

    useEffect(() => {
        people().then(response => setContent(response));
    });

    return (
        <Page>
            <Row className="movies">

                    {
                        contents && contents.map((el, index) => {
                                return (
                                    <Col md={5} key={el + '_' + index}>
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
        </Page>
    )
};

export default People;