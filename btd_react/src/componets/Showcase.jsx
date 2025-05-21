import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Cookies from './../assets/cookies_in_oven.jpg';
import GlamBiscuit from './../assets/biscuit_glam.png';
import GiftBox from './../assets/gift_box.png';
import './Showcase.css';



export default function Showcase()
{



    return(
        <>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <Image src={Cookies} id='showcase1' className='showcase-img'/>
                        <Carousel.Caption className='showcase-captions mx-4'>
                            <h5>"I love picking up cookies that are still warm out of the oven, best spot in HV!"</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <Image src={GlamBiscuit} id='showcase2' className='showcase-img'/>
                        <Carousel.Caption className='showcase-captions mx-4'>
                            <h5>"Thank you for saving me time with breakfast. Take and Bake for the win."</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <Image src={GiftBox} id='showcase3' className='showcase-img'/>
                        <Carousel.Caption className='showcase-captions mx-4'>
                            <h5>"My clients love getting these gift boxes as a joining gift."</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}