import './ShopList.css';
import Tables from './Tables';

function ShopList() {
  return (
    <section className="shopList">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className="shopList_wrapper">
                        <h5 className="shopList_title">لیست فروشگاه</h5>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <Tables/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShopList