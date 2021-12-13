import React from 'react'
import {NavLink, useParams} from "react-router-dom";
import {UnorderedListOutlined, HeartOutlined, StarOutlined} from "@ant-design/icons"
import {Col, Row, Progress} from "antd";
import "../page.scss";
import classes from "./Movies.module.scss"
import person from "../../assets/images/person-2.svg"
import Page from "../layout/Page";
import Card from "../../components/Card";
import {movieDescription} from "../index"
import noimg from "../../assets/images/noimg.png"
import useData from "../../hooks/useData";


const Movie = () => {

    let { id } = useParams();
    let data  = useData(movieDescription, id);

    let bgImg=data ? 'https://image.tmdb.org/t/p/w500/'+data.backdrop_path : noimg;
    
    return (
        <Page>
            <Row style={{ backgroundImage:  `url(${bgImg})` }} className={classes.movie_info_sec}>
                <Col  className={classes.column} md={8}>
                    <img src={data.poster_path ? 'https://image.tmdb.org/t/p/w500/' + data.poster_path : noimg} alt='poster'/>
                </Col>
                <Col className={classes.column} md={16}>
                    <h1>{data.original_title}</h1>
                    <p>
                        {data.release_date}

                        {
                            data.genres && data.genres.map((el, index) => {
                               return (<span key={el + '_' + index}> {el.name}, </span>)
                            })
                        }
                    </p>
                    <div className={classes.icons}>
                           <Progress type="circle" percent={data.vote_average*10} className="progress"/>
                            <UnorderedListOutlined />
                            <HeartOutlined />
                            <StarOutlined />
                    </div>

                    <h3>{data.tagline}</h3>
                    <h2>Overview</h2>
                    <p>{data.overview}</p>
                </Col>
            </Row>
            <Row className="movies" >
                <Col className="movies_sec actors single_sec" >
                    {
                        data.credits && data.credits.cast.map((el, index) => {
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

export default Movie;