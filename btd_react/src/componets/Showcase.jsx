import Carousel from 'react-bootstrap/Carousel';

import Cookies1 from './../assets/cookies_in_oven.jpg'
import "./Showcase.css"


export default function Showcase()
{



    return(
            <Carousel>
                <Carousel.Item>
                    <img className='carousel-image showcase_image'src={Cookies1}/>
                    <Carousel.Caption style={{position:'absolute', top:'20%',bottom:'auto',textShadow: "2px 2px 4px rgba(0, 0, 0, 1)"}}>
                        <h3>"You can taste the quality, the love, and the care that goes into each of Bake That Dough's products!"</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}