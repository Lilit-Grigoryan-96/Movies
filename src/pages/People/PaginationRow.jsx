import React from 'react'
import {Col, Row, Pagination} from "antd";
import "../page.scss";



const PaginationRow = ({currentPage, setPage}) => {

    function onChange(pageNumber) {
        setPage(pageNumber);
    }

    return (
            <Row className="movie_info_sec">

                <Col className="column" md={24}>
                    <Pagination
                        defaultCurrent={currentPage}
                        total={500}
                        onChange={onChange}
                    />
                </Col>

            </Row>
    )
};

export default PaginationRow;