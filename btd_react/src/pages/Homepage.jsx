import FooterInfo from "../componets/FooterInfo"
import MenuLinks from "../componets/MenuLinks"
import MiniBio from "../componets/MiniBio"
import NavigationMenu from "../componets/NavigationMenu"
import SeasonalPreorders from "../componets/SeasonalPreorders"
import Showcase from "../componets/Showcase"
import StoreFinder from "../componets/StoreFinder"





export default function Home() {
 



  
  return (
    <>
      <NavigationMenu/>
      <br/>
      <Showcase/>
      <br/>
      <SeasonalPreorders/>
      <StoreFinder/>
      <MiniBio/>
      <MenuLinks/>
      <FooterInfo/>
    </>
  )
}