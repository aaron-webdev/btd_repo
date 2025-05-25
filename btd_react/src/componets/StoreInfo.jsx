import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import StoreMap from './../assets/map_cap.png'




export default function StoreInfo()
{



    return(
        <>
            <h1>The When and Where</h1>
            <Container className='m-5 p-auto'id='storeHours'>
                <ListGroup>

                    <ListGroup.Item>
                        <Row>
                            <Col>
                                <h3>Storefront Hours</h3>
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

            <Container className='m-5 p-auto'id='storeAddress'>
                <Card>
                    <Card.Img variant='top' src={StoreMap}/>
                    <Card.Title></Card.Title>
                </Card>Storefront Location
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


    https://www.google.com/maps/dir/35.8950022,-84.1962554/10700+Virginia+Pine+Way,+Knoxville,+TN+37932/@35.9200054,-84.2182576,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x885c2e27af961b3d:0x5375b639c2a4aeb4!2m2!1d-84.1561482!2d35.9452135?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D
*/