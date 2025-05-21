import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "./../assets/BTDlogo.png"



export default function NavigationMenu()
{



    return(
        <>
        <Navbar expand="md" className="bg-body-tertiary px-2">
            <Navbar.Brand href="/"><img src={Logo} style={{height: '75px', width: '75px'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link>
                    
                </Nav.Link>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#">Find Us</Nav.Link>
                <NavDropdown title='Menus' id='basic-nav-dropdown'>
                    <NavDropdown.Item href='#'>In Store Menu</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Seasonal Preorder</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Custom Order Forms</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Wholesale/Catering Menus</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Classes</Nav.Link>
                <NavDropdown title='About Us'>
                    <NavDropdown.Item href='#'>Our Story</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Frequently Asked Questions</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Testimonials</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Contact Us</Nav.Link>
                <Nav.Link href="#">Shop All Products</Nav.Link>
                <Nav.Link href="#">Wholesale</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

/*
import {SocialIcon} from 'react-social-icons'
<SocialIcon
    network='instagram'
    url='https://www.instagram.com/bakethatdough/'
    style={{height:25,width:25}}
/>
*/