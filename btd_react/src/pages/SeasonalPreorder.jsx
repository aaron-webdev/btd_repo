import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import HotCross from './../assets/hot_cross_buns.gif';
import CinnRolls from './../assets/cinnamon_rolls.gif';
import CarrotCake from './../assets/carrot_cake.png';
import PullApart from './../assets/pull_apart_glam.png';


export default function SeasonalPreorder()
{



    return(
        <div>
            <Container id='EasterPreorder'>
                <Card stlye={{width:'15rem'}}>
                    <Card.Img src={HotCross}/>
                    <Card.Body>
                        <Card.Title>Hot Cross Buns</Card.Title>
                        <Card.Subtitle>$12.00</Card.Subtitle>
                    </Card.Body>
                </Card>

                <Card stlye={{width:'15rem'}}>
                    <Card.Img src={CinnRolls}/>
                    <Card.Body>
                        <Card.Title>Cinnamon Rolls</Card.Title>
                        <Card.Subtitle>$16.00</Card.Subtitle>
                    </Card.Body>
                </Card>

                <Card stlye={{width:'15rem'}}>
                    <Card.Img src={CarrotCake}/>
                    <Card.Body>
                        <Card.Title>Carrot Cake</Card.Title>
                        <Card.Subtitle>$16.00</Card.Subtitle>
                    </Card.Body>
                </Card>

                <Card stlye={{width:'15rem'}}>
                    <Card.Img src={PullApart}/>
                    <Card.Body>
                        <Card.Title>Pull Apart Dinner Rolls</Card.Title>
                        <Card.Subtitle>$10.00</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}