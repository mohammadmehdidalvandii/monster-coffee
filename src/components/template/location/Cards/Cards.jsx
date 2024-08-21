import { Link } from 'react-router-dom';
import './Cards.css';
import { FaLocationDot } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';

function Cards() {
  return (
    <Link to='' className="cards">
    <img src="/images/store.jpg" alt="coffee shop" className="card_img" />
    <div className="card_content">
        <h6 className="card_title">قهوه تلخ</h6>
        <div className="card_address">
            <span className="card_address_icon">
                <FaLocationDot/>
            </span>
            <span className="card_address_text">
                تهران / ملاصدرا پلاک 71
            </span>
        </div>
        <div className="card_rete">
            <span className="card_rete_text">
                4.8
            </span>
            <span className="card_rete_icon">
                <FaStar/>
            </span>
        </div>
        <div className="card_time">
            <span className="card_time_text">20 دقیقه</span>
            <span className="card_time_text">2.4 کیلومتر</span>
        </div>
    </div>
</Link>
  )
}

export default Cards