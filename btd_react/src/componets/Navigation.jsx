import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "./../assets/BTDlogo.png"



export default function Navigation()
{



    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="/"><img src={Logo} style={{height: '75px', width: '75px'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#">Find Us</Nav.Link>
                <NavDropdown title='Menus' id='basic-nav-dropdown'>
                    <NavDropdown.Item href='#'>In Store Menu</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Seasonal Preorder</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Custom Order Forms</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Wholesale/Catering Menus</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Classes</Nav.Link>
                <Nav.Link href="#">About Us</Nav.Link>
                <Nav.Link href="#">Shop All Products</Nav.Link>
                <Nav.Link href="#">Wholesale</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

/*
<NavDropdown title="Dropdown" id="basic-nav-dropdown">
<NavDropdown.Item href="#">Action</NavDropdown.Item>
<NavDropdown.Item href="#">
    Another action
</NavDropdown.Item>
<NavDropdown.Item href="#a">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#">
    Separated link
</NavDropdown.Item>
</NavDropdown>

*/