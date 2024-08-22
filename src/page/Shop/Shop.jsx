import Breadcrumb from "../../components/modules/Breadcrumb/Breadcrumb"
import Store from "../../components/template/shop/Store/Store"
import HeadTitle from '../../utils/HeadTitle'

function Shop() {
    HeadTitle('فروشگاه')
    return (
    <>
        <Breadcrumb title='فروشگاه'/>
        <Store/>
    </>
  )
}

export default Shop