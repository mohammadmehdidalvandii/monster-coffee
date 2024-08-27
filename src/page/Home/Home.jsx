import Banner from "../../components/template/home/Banner/Banner"
import Category from "../../components/template/home/Category/Category"
import Coffee from "../../components/template/home/Coffee/Coffee"
import Collections from "../../components/template/home/Collections/Collections"
import Popular from "../../components/template/home/Popular/Popular"
import Suggestion from "../../components/template/home/Suggestion/Suggestion"
import headTitle from "../../utils/HeadTitle"


 function Home() {

 headTitle("خانه")
  return (
   <>
   <Banner/>
   <Category/>
   <Popular/>
   <Suggestion/>
   <Collections/>
   <Coffee/>
   </>
  )
}

export default Home