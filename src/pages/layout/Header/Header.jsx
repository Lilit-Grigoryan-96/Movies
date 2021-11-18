import React from 'react'
import { Row, Col } from 'antd';
import logo from '../../../assets/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
import classes from "./Header.module.scss"
import {NavLink} from "react-router-dom"
const Header = () =>{
    return (
        <header>
            <Row justify="center" className={classes.header_row} >
                <Col md={22} className={classes.header_menu}  >
                    <NavLink to="/">
                        <img src={logo} className={classes.header_menu_logo} alt="logo"/>
                    </NavLink>
                    <ul className={classes.header_menu_items}>
                        <li>
                            <NavLink to="/movies">
                                Movies
                            </NavLink>
                        </li>
                        <li>
                            <a href="/tv-shows">
                                TV Shows
                            </a>
                        </li>
                        <li>
                            <NavLink to="/people">
                                People
                            </NavLink>
                        </li>
                    </ul>
                </Col>

            </Row>
        </header>
    )
};

export default Header;