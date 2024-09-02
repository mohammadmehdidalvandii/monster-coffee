import './ShoppingCard.css';
import { MdDeleteForever } from 'react-icons/md';

function ShoppingCard({name , price}) {
  return (
    <div className="col-12">
    <div className="shoppingCard">
        <div className="shoppingCard_content">
            <img src="/images/coffee1.jpg" alt="coffee" className="shoppingCard_img" />
            <div className="shoppingCard_details">
                <h6 className="shoppingCard_title">{name}</h6>
                <span className="shoppingCard_time">زمان اماده شدن - 16 دقیقه</span>
                <span className="shoppingCard_price">{price} تومان</span>
            </div>
        </div>
        <div className="shoppingCard_action">
            <button className="shoppingCard_remove">
                <span className="shoppingCard_remove_text">حذف</span>
                <span className="shoppingCard_remove_icon">
                    <MdDeleteForever/>
                </span>
            </button>
            <div className="shoppingCard_counter">
                <button className="shoppingCard_countBtn">+</button>
                    <span className="shoppingCard_count">1</span>
                <button className="shoppingCard_countBtn">-</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default ShoppingCard