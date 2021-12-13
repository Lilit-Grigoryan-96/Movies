import React from 'react'
import {useParams, NavLink} from "react-router-dom";
import {Col, Row} from "antd";
import "../page.scss";
import Page from "../layout/Page";
import Card from "../../components/Card";
import {actor} from "../index"
import person from "../../assets/images/person-2.svg"
import useData from "../../hooks/useData";

const Person = () => {

    let { id } = useParams();
    let data  = useData(actor, id);

    return (
        <Page>
            <Row className="movie_info_sec">
                <Col className="column" md={8}>
                    <img src={data.profile_path ? 'https://image.tmdb.org/t/p/w500/' + data.profile_path : person} alt='actore'/>
                </Col>
                <Col className="column" md={16}>
                    <h1>{data.name}</h1>
                    <h2>Biography</h2>
                    <p>
                        {data.biography}
                    </p>
                    <div className="movies_sec">
                        {
                           data.credits && data.credits.cast.map((el, index) => {
                                return (
                                    <NavLink to={'/movie/'+el.id} key={el + '_' + index}>
                                        <Card
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