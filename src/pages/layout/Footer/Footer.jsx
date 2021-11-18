import React from 'react'
import logo from '../../../assets/images/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
import classes from "./Footer.module.scss"
import {Col, Row} from "antd";
const Footer = () =>{
    return (
        <footer>
            <Row justify="center">
                <Col md={22}>
                    <a>
                        <img src={logo} className={classes.footer_logo}/>
                    </a>
                </Col>
            </Row>
        </footer>

    )
};

export default Footer;