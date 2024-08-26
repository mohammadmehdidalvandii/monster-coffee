import Breadcrumb from "../../components/modules/Breadcrumb/Breadcrumb"
import Details from "../../components/template/shopDetails/Details/Details"
import HeadTitle from "../../utils/HeadTitle"

function ShopDetails() {
    HeadTitle("فروشگاه - جزئیات محصول")
  return (
    <>
    <Breadcrumb title='جزئیات محصول'/>
    <Details/>
    </>
  )
}

export default ShopDetails