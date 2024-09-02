import { Link } from 'react-router-dom';
import './Basket.css';
import ShoppingCard from '../ShoppingCard/ShoppingCard';


function Basket() {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");

  return (
    <section className="basket">
        <div className="containers">
            <div className="row row-gap-4">

                    {basket.length === 0 ?(
                                <div className="col-12">
                    <div className="basket_content_empty">
                        <h3 className="basket_empty_title">سبد خرید شما خالی است !</h3>
                        <Link to='/Shop' className='basket_empty_link'>رفتن به فروشگاه</Link>
                    </div>
                </div> 
                    ):(
                       basket.map(item=>(
                        <ShoppingCard key={item.id} {...item}/>
                       )) 
                    )}

            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div className="basket_bill">
                            <ul className="basket_bill_items">
                                <li className="basket_bill_item">
                                    <span className="basket_bill_title">جمع کل :</span>
                                    <span className="basket_bill_number">120 تومان</span>
                                </li>
                            </ul>
                            <Link to='#' className='basket_bill_pay'>پرداخت</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Basket