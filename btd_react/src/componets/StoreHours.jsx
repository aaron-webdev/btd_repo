import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function StoreHours()
{



    return(
        <>
            <Container className='m-5 p-auto'id='storeHours'>
                <ListGroup>

                    <ListGroup.Item>
                        <Row>
                            <Col>
                                <h3>Hours of Operation</h3>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Monday:
                            </Col>
                            <Col>
                                CLOSED
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Tuesday:
                            </Col>
                            <Col>
                                CLOSED
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Wednesday:
                            </Col>
                            <Col>
                                8am - 6pm
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Thursday:
                            </Col>
                            <Col>
                                8am - 6pm
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Friday:
                            </Col>
                            <Col>
                                8am - 8pm
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Saturday:
                            </Col>
                            <Col>
                                10am - 4pm
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Sunday:
                            </Col>
                            <Col>
                                10am - 4pm
                            </Col>
                        </Row>
                    </ListGroup.Item>

                </ListGroup>
            </Container>
        </>
    )
}


/*
    <ListGroup.Item>
    <Row>
        <Col>
        
        </Col>
        <Col>
        
        </Col>
    </Row>
    </ListGroup.Item>
*/