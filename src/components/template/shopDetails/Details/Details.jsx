import { FaHeart } from 'react-icons/fa';
import './Details.css';
import { useEffect, useState } from 'react';


function Details({coffees}) {
    const [selectSize , SetSelectSize] = useState();
    const [price ,  setPrice] = useState()
    const handlerChangeSize = (event)=>{
        const sizeSelected = event.target.value;
        SetSelectSize(sizeSelected);
        const size = coffees.sizes.find((size) => size.size === sizeSelected);
        if (size) {
          setPrice(size.price)
        }
      }
    useEffect(()=>{
    },[selectSize , price])

   
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
                                        {coffees?.sizes?.map((size)=>(
                                            <option value={size.size} className="details_option" key={size}>{size.size}</option>
                                        ))}
                                    </select>
                                    <span className="prices"> {price} تومان  </span> 
                                    <div className="detail_btns">
                                        <button className="details_btn_favorite">
                                            <FaHeart/>
                                        </button>
                                        <button className="details_btn">
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