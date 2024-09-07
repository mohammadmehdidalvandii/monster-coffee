import { Link } from 'react-router-dom';
import './Basket.css';
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import { showSwal } from '../../../../utils/Helpers';
import { useEffect, useState } from 'react';

function Basket() {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const [basketItems, setBasketItems] = useState(basket.map(item => ({ ...item, count: item.count || 1 })));
    const [totalPrice , setTotalPrice] = useState(0)

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

    // add Logic counters 
        const handlerBtnPlus = (count, size) => {
            const newBasketItems = [...basketItems];
            const item = newBasketItems.find((item) => item.count === count && item.size === size);
            item.count++;
            setBasketItems(newBasketItems);
            localStorage.setItem("basket", JSON.stringify(newBasketItems));
          }
          
          const handlerBtnMinus = (count, size) => {
            const newBasketItems = [...basketItems];
            const item = newBasketItems.find((item) => item.count === count && item.size === size);
            if (item.count > 1) {
              item.count--;
            }
            setBasketItems(newBasketItems);
            localStorage.setItem("basket", JSON.stringify(newBasketItems));
          }
        // TotalPrice 
        useEffect(calcTotalPrice , [basket])
        function calcTotalPrice (){
            let price = 0
            if(basket.length){
                price = basket.reduce((prev , current)=> prev + current.price * current.count , 0)
                setTotalPrice(price)
            }
            setTotalPrice(price)
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
                        <ShoppingCard
                         key={item.id} {...item} count={item.count}
                         handlerRemoved={()=>handlerRemoved(item.id , item.size)}
                         handlerBtnPlus={()=>handlerBtnPlus(item.count , item.size , item.price)}
                        handlerBtnMinus={()=>handlerBtnMinus(item.count , item.size , item.price)}
                        />
                       )) 
                    )}

            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div className="basket_bill">
                            <ul className="basket_bill_items">
                                <li className="basket_bill_item">
                                    <span className="basket_bill_title">جمع کل :</span>
                                    <span className="basket_bill_number">{totalPrice} تومان</span>
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