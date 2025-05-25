import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HotCross from './../assets/hot_cross_buns.gif';
import CinnRolls from './../assets/cinnamon_rolls.gif';
import CarrotCake from './../assets/carrot_cake.png';
import PullApart from './../assets/pull_apart_glam.png';
import NavigationMenu from './../componets/NavigationMenu.jsx';

export default function EasterPreorder()
{



    return(
        <div>
            <NavigationMenu/>
            <h1>Easter Preorder Menu</h1>
            <Container id='EasterPreorder'>
                <Row className='m-2'>

                    <Col>
                        <Card>
                            <Card.Img src={HotCross}/>
                            <Card.Body className='text-center'>
                                <Card.Title>Hot Cross Buns</Card.Title>
                                <Card.Subtitle>$12.00</Card.Subtitle>
                                <Button variant='success'>Add or Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img src={CinnRolls}/>
                            <Card.Body className='text-center'>
                                <Card.Title>Cinnamon Rolls</Card.Title>
                                <Card.Subtitle>$16.00</Card.Subtitle>
                                <Button variant='success'>Add or Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                <Row>

                    <Col>
                        <Card>
                            <Card.Img src={CarrotCake}/>
                            <Card.Body className='text-center'>
                                <Card.Title>Carrot Cake</Card.Title>
                                <Card.Subtitle>$16.00</Card.Subtitle>
                                <Button variant='success'>Add or Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img src={PullApart}/>
                            <Card.Body className='text-center'>
                                <Card.Title>Pull Apart Dinner Rolls</Card.Title>
                                <Card.Subtitle>$10.00</Card.Subtitle>
                                <Button variant='success'>Add or Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}