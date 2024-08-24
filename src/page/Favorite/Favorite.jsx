
import Breadcrumb from '../../components/modules/Breadcrumb/Breadcrumb'
import Wishlist from '../../components/template/favorite/Wishlist/Wishlist'
import HeadTitle from '../../utils/HeadTitle'

function Favorite() {
    HeadTitle("مورد علاقه")
  return (
   <>
   <Breadcrumb title='مورد علاقه'/>
   <Wishlist/>
   </>
  )
}

export default Favorite