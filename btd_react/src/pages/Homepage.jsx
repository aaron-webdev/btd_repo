import Container from 'react-bootstrap/esm/Container';
import Navigation from '../componets/Navigation';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import Cookies1 from './../assets/cookies_in_oven.jpg'





export default function Home() {
 



  
  return (
    <>
      <Navigation/>

      <Container>
        <Carousel>
          <Card>
            <Card.Img src={Cookies1}/>
          </Card>
          
        </Carousel>
      </Container>
    </>
  )
}

/*
        <Carousel>
          <Carousel.Item>
            <ExampleCarouselImage src={cookies1} />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
*/