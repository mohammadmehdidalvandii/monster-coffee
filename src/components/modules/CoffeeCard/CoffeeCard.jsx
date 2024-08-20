import "./CoffeeCard.css";
import { Link } from "react-router-dom";
import { FaPlus, FaStar } from "react-icons/fa";

function CoffeeCard() {
  return (
    <>
      <Link to="/" className="coffeeCard">
        <img src="/images/coffee.jpg" alt="coffee" className="coffeeCard_img" />
        <div className="coffeeCard_content">
          <h6 className="coffeeCard_title">قهوه دالگونا</h6>
          <div className="coffeeCard_rate">
            <span className="coffeeCard_rate_number">4.8</span>
            <span className="coffeeCard_rete_icon">
              <FaStar />
            </span>
          </div>
          <div className="coffeeCard_price_addCard">
            <span className="coffeeCard_price">30 تومان</span>
            <button className="coffeeCard_addToBasket">
              <FaPlus />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CoffeeCard;
