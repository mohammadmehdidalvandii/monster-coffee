import { FaHeart } from 'react-icons/fa';
import './Details.css';
import { useState } from 'react';
import { showSwal } from '../../../../utils/Helpers';
import { json } from 'react-router-dom';


function Details({coffees}) {
    const [selectSize , SetSelectSize] = useState(null || "");
    const [price ,  setPrice] = useState()


    const handlerChangeSize = (event)=>{
        const sizeSelected = event.target.value;
        SetSelectSize(sizeSelected);
        const size = coffees.sizes.find((size) => size.size === sizeSelected);
        if (size) {
          setPrice(size.price)
        }else{
            setPrice(null)
        }
      }

    //   add to coffee Wishlist
    const addToWishlist = () => {
            const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
                const isInWishlist = wishlist.some((item)=> item.id === coffees.id) 
                if(!isInWishlist){
                    const newWishlist = {
                        id :coffees.id , 
                        name : coffees.name
                    };

                    wishlist.push(newWishlist)
                    localStorage.setItem("wishlist" , JSON.stringify(wishlist))
                    showSwal("محصول با موفقیت اضافه شد","success","فهمیدم")
                }else{
                    showSwal("محصول از قبل وجود دارد","error","متوجه شدم")
                }
      }

    //   Add To Basket 
    const addToBasket = (coffeeId)=>{
        const basket = JSON.parse(localStorage.getItem("basket") || "[]");

        const isInBasket = basket.some((item)=> item.id === coffeeId && item.sizes  === selectSize);
        const isInSelectSize = basket.some((item)=>item.size === selectSize);

        if(!isInBasket){
            if(isInSelectSize){
                showSwal("این سایز در سبد خرید موجود است","error","فهمیدم")
            } else{
                if(selectSize === "" || null){
                    showSwal("لظفا سایز مورد نظر انتخاب کنید","error","فهمیدم")
                } else{
                    let newBasket = {
                        id: coffeeId,
                        name: coffees.name ,
                        size :selectSize ,
                        price : price,
                    }
                    basket.push(newBasket);
                    localStorage.setItem("basket" , JSON.stringify(basket));
                    swal({
                        title:"قهوه به سبد خرید اضافه شد",
                        icon:"success",
                        buttons:"فهمیدم"
                    })
                    .then(()=>{
                        window.location.reload()
                    })
                   
                }
            }
        }else{
            showSwal("محصول در سبد خرید موجود است","success","فهمیدم")
        }
    }
   
  return (
   <section className="details">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    
                    <div className="boxContent" key={coffees.id}>
                        <div className="details_wrapper">
                            <img src="/images/coffee1.jpg" alt="" className="details_img" />
                            <div className="details_content">
                                    <h6 className="details_name">{coffees.name}</h6>
                                    <select name="" id="" className="details_menu" value={selectSize} onChange={handlerChangeSize}>
                                        <option className="details_option">انتخاب سایز</option>
                                        {coffees?.sizes?.map((size, index)=>(
                                            <option value={size.size} className="details_option" key={index}>{size.size}</option>
                                        ))}
                                    </select>
                                    <span className="prices"> {price} تومان  </span> 
                                    <div className="detail_btns">
                                        <button className="details_btn_favorite" onClick={addToWishlist}>
                                            <FaHeart/>
                                        </button>
                                        <button className="details_btn" onClick={()=>addToBasket(coffees.id)}>
                                            افزودن سبد خرید
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
 
                </div>
            </div>
        </div>
   </section>
  )
}

export default Details