import Breadcrumb from '../../components/modules/Breadcrumb/Breadcrumb';
import Basket from '../../components/template/shopping/Basket/Basket';
import HeadTitle from '../../utils/HeadTitle'

function Shopping() {

    HeadTitle("سبد خرید")
  return (
    <>
        <Breadcrumb title='سبد خرید'/>
        <Basket/>
    </>
  )
}

export default Shopping