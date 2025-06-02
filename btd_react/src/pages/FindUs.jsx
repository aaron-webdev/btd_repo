import Container from 'react-bootstrap/Container';
import MarketInfo from "../componets/MarketInfo.jsx";
import StoreInfo from "../componets/StoreInfo.jsx";
import NavigationMenu from './../componets/NavigationMenu.jsx';




export default function FindUs()
{

    
    return(
        <>
        <NavigationMenu/>
        <br/>
        <Container>
            <StoreInfo/>
            <br/>
            <MarketInfo/>
            <br/>
        </Container>
        </>
    )
}