import FooterInfo from "../componets/FooterInfo"
import MenuLinks from "../componets/MenuLinks"
import MiniBio from "../componets/MiniBio"
import NavigationMenu from "../componets/NavigationMenu"
import SeasonalHours from "../componets/SeasonalHours"
import SeasonalPreorder from "../componets/SeasonalPreorder"
import Showcase from "../componets/Showcase"
import StoreFinder from "../componets/StoreFinder"





export default function Home() {
 



  
  return (
    <>
      <NavigationMenu/>
      <Showcase/>
      <SeasonalPreorder/>
      <SeasonalHours/>
      <StoreFinder/>
      <MiniBio/>
      <MenuLinks/>
      <FooterInfo/>
    </>
  )
}