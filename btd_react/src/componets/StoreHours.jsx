import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';




export default function StoreHours()
{



    return(
        <>
            <Container id='storeHours'>
                <ListGroup>
                    <ListGroup.Item><h3>Hours of Operation</h3></ListGroup.Item>
                    <ListGroup.Item>Monday: CLOSED</ListGroup.Item>
                    <ListGroup.Item>Tuesday:CLOSED</ListGroup.Item>
                    <ListGroup.Item>Wednesday:</ListGroup.Item>
                    <ListGroup.Item>Thursday:</ListGroup.Item>
                    <ListGroup.Item>Friday:</ListGroup.Item>
                    <ListGroup.Item>Saturday:</ListGroup.Item>
                    <ListGroup.Item>Sunday:</ListGroup.Item>
                </ListGroup>
                
                
            </Container>
        </>
    )
}