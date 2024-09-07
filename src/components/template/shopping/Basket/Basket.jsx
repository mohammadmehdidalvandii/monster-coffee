import { Link } from 'react-router-dom';
import './Basket.css';
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import { showSwal } from '../../../../utils/Helpers';

function Basket() {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");

    // add Logic Removed Cart Basket
    const handlerRemoved = (coffeeId , coffeeSize)=>{
        swal({
            title:"آیا از حذف قهوه خود اطمینان دارید ؟",
            icon:"warning",
            buttons:["نه","اره"]
        })
        .then((result)=>{
            if(result){
                const newBasket  = basket.filter((item)=> item.id !== coffeeId || item.size !== coffeeSize);
            localStorage.setItem("basket" , JSON.stringify(newBasket));
            swal({
                title:"قهوه مورد نظر شمابا موفقیت حذف شد",
                icon:"success",
                buttons:"فهمیدم"
            })
            .then(()=>{
                window.location.reload()
            })
            }
        })

    }

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
                        <ShoppingCard key={item.id} {...item} handlerRemoved={()=>handlerRemoved(item.id , item.size)}/>
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