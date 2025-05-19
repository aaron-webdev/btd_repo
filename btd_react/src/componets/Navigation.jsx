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
            <Navbar.Brand href="#"><img src={Logo} style={{height: '75px', width: '75px'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Link</Nav.Link>
                
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