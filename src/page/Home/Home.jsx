import Banner from "../../components/template/home/Banner/Banner"
import Category from "../../components/template/home/Category/Category"
import Collections from "../../components/template/home/Collections/Collections"
import Popular from "../../components/template/home/Popular/Popular"
import Suggestion from "../../components/template/home/Suggestion/Suggestion"


function Home() {
  return (
   <>
   <Banner/>
   <Category/>
   <Popular/>
   <Suggestion/>
   <Collections/>
   <br /><br /><br />
   </>
  )
}

export default Home