import React from 'react'
import {NavLink, useParams} from "react-router-dom";
import {UnorderedListOutlined, HeartOutlined, StarOutlined} from "@ant-design/icons"
import {Col, Row, Progress} from "antd";
import "../page.scss";
import classes from "./TvShow.module.scss"
import person from "../../assets/images/person-2.svg"
import noimg from "../../assets/images/noimg.png"
import Page from "../layout/Page";
import Card from "../../components/Card";
import {movieDescription} from "../index"
import useData from "../../hooks/useData";

const TvShow = () => {

    let { id } = useParams();
    let data  = useData(movieDescription, id);
    let bgImg=data ? 'https://image.tmdb.org/t/p/w500/'+data.backdrop_path : '';
    let className= data.vote_average > 7 ? 'bg-green' : 'bg-yellow';

    return (
        <Page>
            <Row style={{ backgroundImage:  `url(${bgImg})` }} className={classes.movie_info_sec}>
                <Col  className={classes.column} md={8}>
                    <img src={data ? 'https://image.tmdb.org/t/p/w500/' + data.poster_path : noimg} alt="movie"/>
                </Col>
                <Col className={classes.column} md={16}>
                    <h1>{data ? data.original_title : ''}</h1>
                    <p>
                        {data ? data.release_date : ''}

                        {
                            data.genres && data.genres.map((el, index) => {
                               return (<span key={el + '_' + index}> {el.name}, </span>)
                            })
                        }
                    </p>
                    <div className={classes.icons}>
                           <Progress type="circle" percent={data ? data.vote_average*10 : ''} className={`progress ${className}`}/>
                            <UnorderedListOutlined />
                            <HeartOutlined />
                            <StarOutlined />
                    </div>

                    <h3>{data ? data.tagline : ''}</h3>
                    <h2>Overview</h2>
                    <p>{data ? data.overview : ''}</p>
                </Col>
            </Row>
            <Row className="movies" >
                <Col className="movies_sec single_sec" >
                    {
                        data.credits && data.credits.cast.map((el, index) => {
                            return (
                                <NavLink to={'/people/' + el.id} className="people_card" key={el + '_' + index}>
                                    <Card
                                          img={el.profile_path ? 'https://image.tmdb.org/t/p/w500/' + el.profile_path: person}
                                          title={el.original_name}
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