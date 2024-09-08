import "./WishlistCard.css";
import { Link } from 'react-router-dom';
import { MdAddShoppingCart, MdDelete } from 'react-icons/md';

function WishlistCard({name , id , handlerRemovedWishlist}) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div  className="wishlistCard">
        <img
          src="/images/coffee1.jpg"
          alt="coffee"
          className="wishlistCard_img"
        />
        <h5 className="wishlistCard_title">{name}</h5>
        <div className="wishlistCard_buttons">
          <button className="wishlistCard_btn" onClick={handlerRemovedWishlist}>
            <span className="wishlistCard_btnText">حذف</span>
            <span className="wishlistCard_btnIcon">
              <MdDelete />
            </span>
          </button>
          <Link to={`/Shop-d/:${id}`} className="wishlistCard_btn">
            <span className="wishlistCard_btnText">افزودن</span>
            <span className="wishlistCard_btnIcon">
              <MdAddShoppingCart />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
