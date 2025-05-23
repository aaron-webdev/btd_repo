import FooterInfo from "../componets/FooterInfo"
import MenuLinks from "../componets/MenuLinks"
import MiniBio from "../componets/MiniBio"
import NavigationMenu from "../componets/NavigationMenu"
import SeasonalHours from "../componets/SeasonalHours"
import SeasonalPreorders from "../componets/SeasonalPreorders"
import Showcase from "../componets/Showcase"
import StoreFinder from "../componets/StoreFinder"





export default function Home() {
 



  
  return (
    <>
      <NavigationMenu/>
      <Showcase/>
      <SeasonalPreorders/>
      <SeasonalHours/>
      <StoreFinder/>
      <MiniBio/>
      <MenuLinks/>
      <FooterInfo/>
    </>
  )
}