import Carousel from 'react-bootstrap/Carousel';
import BiscuitGlam from './../assets/biscuit_glam.png';
import Cookies1 from './../assets/cookies_in_oven.jpg'
import GiftBox from './../assets/gift_box.png'
import "./Showcase.css"


export default function Showcase()
{



    return(
            <Carousel>

                <Carousel.Item interval={8000}>
                    <img className='carousel-image showcase_image'id='slide1' src={Cookies1}/>
                    <Carousel.Caption style={{position:'absolute', top:'20%',bottom:'auto',textShadow: "2px 2px 4px rgba(0, 0, 0, 1)"}}>
                        <h3>"You can taste the quality, the love, and the care that goes into each of Bake That Dough's products!"</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className='carousel-image showcase_image'id='slide2' src={GiftBox}/>
                    <Carousel.Caption style={{position:'absolute', top:'20%',bottom:'auto',textShadow: "2px 2px 4px rgba(0, 0, 0, 1)"}}>
                        <h3>"Great gift for Mother's Day!  These cookies absolutely made my day."</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className='carousel-image showcase_image'id='slide3' src={BiscuitGlam}/>
                    <Carousel.Caption style={{position:'absolute', top:'20%',bottom:'auto',textShadow: "2px 2px 4px rgba(0, 0, 0, 1)"}}>
                        <h3>"The take and bake is perfect for surprising my family with delicious goodies."</h3>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
    )
}