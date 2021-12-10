import React, { useState} from 'react'
import { Tabs, Col, Row, Modal } from "antd";
import {PlayCircleOutlined} from '@ant-design/icons';
import "../../page.scss";
import Card from "../../../components/Card";
import classes from "../Home.module.scss"
import {NavLink} from "react-router-dom";
import {getVideo} from "../../index"

const MoviesSection = ({title, arr, video}) => {
    const { TabPane } = Tabs;
    const [videoKey, setVideoKey] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
      setIsModalVisible(false);
      setVideoKey('');
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
      setVideoKey('');
    };
    const getVideoKey = (id) =>{
       getVideo(id).then(response => setVideoKey(response));
       setIsModalVisible(true);
    };

    return (
      <>

            <Row justify="center" className="movies_row">
                <Col md={22}>
                <div className="column_header">
                    <h2>{title}</h2>
                </div>
                <Tabs defaultActiveKey="1"  className="tabs">
                {
                    arr.map((el, ind) => {

                        return (
                            <TabPane tab={el.categories} key={ind+1} className="movies_sec">

                                {
                                    el.movies.map((el, index )=> {
                                        if(video===false) {
                                            return (
                                                <NavLink to={'/movie/'+el.id} key={el + '_' + index}>
                                                    <Card
                                                          id={el.id}
                                                          img={el.img}
                                                          title={el.title}
                                                          date={el.date}
                                                          vote={el.vote}
                                                    />
                                                </NavLink>
                                            )
                                        }
                                        else{
                                            return (
                                                <div className={classes.video_card} key={el + '_' + index}>
                                                    <div onClick = {() => getVideoKey(el.id)}>
                                                        <Card key={el + '_' + index}
                                                              id={el.id}
                                                              img={el.img}
                                                              title={el.title}
                                                              date={el.date}
                                                              vote={el.vote}
                                                        />
                                                        <PlayCircleOutlined className={classes.play}/>
                                                    </div>
                                                    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                                        <iframe width="100%" height="300" src={"https://www.youtube.com/embed/" + videoKey} title="YouTube video player" 
                                                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                    </Modal>
                                                    
                                                </div>
                                            )
                                        }
                                    })

                                }

                            </TabPane>
                        )
                    })
                }
                </Tabs>
               </Col>
            </Row>
      </>
    )
};

export default MoviesSection;