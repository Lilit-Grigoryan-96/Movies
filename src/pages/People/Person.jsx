import React from 'react'
import {useEffect, useState} from "react";
import {useParams, NavLink} from "react-router-dom";
import {Col, Row} from "antd";
import "../page.scss";
import Page from "../layout/Page";
import Card from "../../components/Card";
import {actor} from "../index"
import person from "../../assets/images/person-2.svg"

const Person = () => {

    const [cast, setContent] = useState([]);
    const [info, setInfo] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        // fetchFunc()
        actor(id).then(response => {
            setInfo(response);
            setContent(response.credits.cast);
        })
    },[]);

    return (
        <Page>
            <Row className="movie_info_sec">
                <Col className="column" md={8}>
                    <img src={info.profile_path ? 'https://image.tmdb.org/t/p/w500/' + info.profile_path : person}/>
                </Col>
                <Col className="column" md={16}>
                    <h1>{info.name}</h1>
                    <h2>Biography</h2>
                    <p>
                        {info.biography}
                    </p>
                    <div className="movies_sec">
                        {
                            cast.map((el, index) => {
                                return (
                                    <NavLink to={'/movie/'+el.id}>
                                        <Card key={el + '_' + index}
                                            img={el.poster_path? 'https://image.tmdb.org/t/p/w500/' + el.poster_path : person}
                                            title={el.title}
                                        />
                                    </NavLink>
                                )
                            })
                        }

                    </div>
                </Col>
            </Row>
        </Page>
    )
};

export default Person;