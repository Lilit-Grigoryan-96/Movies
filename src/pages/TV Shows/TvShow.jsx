import React from 'react'
import {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {UnorderedListOutlined, HeartOutlined, StarOutlined} from "@ant-design/icons"
import {Col, Row, Progress} from "antd";
import "../page.scss";
import classes from "./TvShow.module.scss"
import person from "../../assets/images/person-2.svg"
import Page from "../layout/Page";
import Card from "../../components/Card";
import {movieDescription} from "../index"

const TvShow = () => {

    const [contents, setContent] = useState([]);
    const [info, setInfo] = useState([]);
    const [genres, setGenres] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        movieDescription(id).then(response => {
            setInfo(response);
            setContent(response.credits.cast);
            setGenres(response.genres);
        });

    });
    let bgImg=info ? 'https://image.tmdb.org/t/p/w500/'+info.backdrop_path : '';
    return (
        <Page>
            <Row style={{ backgroundImage:  `url(${bgImg})` }} className={classes.movie_info_sec}>
                <Col  className={classes.column} md={8}>
                    <img src={info ? 'https://image.tmdb.org/t/p/w500/' + info.poster_path : ''}/>
                </Col>
                <Col className={classes.column} md={16}>
                    <h1>{info ? info.original_title : ''}</h1>
                    <p>
                        {info ? info.release_date : ''}

                        {
                            genres.map((el, index) => {
                               return (<span key={el + '_' + index}> {el.name}, </span>)
                            })
                        }
                    </p>
                    <div className={classes.icons}>
                           <Progress type="circle" percent={info ? info.vote_average*10 : ''} className="progress"/>
                            <UnorderedListOutlined />
                            <HeartOutlined />
                            <StarOutlined />
                    </div>

                    <h3>{info ? info.tagline : ''}</h3>
                    <h2>Overview</h2>
                    <p>{info ? info.overview : ''}</p>
                </Col>
            </Row>
            <Row className="movies" >
                <Col className="movies_sec" >
                    {
                        contents && contents.map((el, index) => {
                            return (
                                <NavLink to={'/people/' + el.id} className="people_card" key={el + '_' + index}>
                                    <Card
                                          img={el.profile_path ? 'https://image.tmdb.org/t/p/w500/' + el.profile_path: person}
                                          title={el.original_name}
                                          character={el.character}
                                    />
                               </NavLink>
                            )
                        })
                    }
                </Col>
            </Row>
        </Page>
    )
};

export default TvShow;