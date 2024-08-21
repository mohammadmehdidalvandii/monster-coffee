import { Link } from 'react-router-dom';
import './MenuBar.css';
import { FaHeart, FaHouse, FaLocationDot, FaUser } from 'react-icons/fa6';
import { BsShop } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

function MenuBar() {
  return (
    <section className="menuBar">
        <div className="containers">
            <ul className="menuBar_menu">
                <li className="menuBar_item">
                    <Link to='/' className='menuBar_item_link'>
                        <span className="menuBar_link_icon">
                            <FaHouse/>
                        </span>
                        <span className="d-none d-md-block menuBar_link_text">خانه</span>
                    </Link>
                </li>
                <li className="menuBar_item">
                    <Link to='/Location' className='menuBar_item_link'>
                        <span className="menuBar_link_icon">
                            <FaLocationDot/>
                        </span>
                        <span className="d-none d-md-block menuBar_link_text">نزدیکترین</span>
                    </Link>
                </li>
                <li className="menuBar_item">
                    <Link to='/Shop' className='menuBar_item_link'>
                        <span className="menuBar_link_icon">
                            <BsShop/>
                        </span>
                        <span className="d-none d-md-block menuBar_link_text">فروشگاه</span>
                    </Link>
                </li>
                <li className="menuBar_item">
                    <Link to='/ShoppingCard' className='menuBar_item_link'>
                        <span className="menuBar_link_icon">
                            <FaShoppingCart/>
                        </span>
                        <span className="d-none d-md-block menuBar_link_text">سبد خرید</span>
                    </Link>
                </li>
                <li className="menuBar_item">
                    <Link to='/favorite' className='menuBar_item_link'>
                        <span className="menuBar_link_icon">
                            <FaHeart/>
                        </span>
                        <span className="d-none d-md-block menuBar_link_text">مورد علاقه</span>
                    </Link>
                </li>
                <li className="menuBar_item">
                    <Link to='/Profile' className='menuBar_item_link'>
                        <span className="menuBar_link_icon">
                            <FaUser/>
                        </span>
                        <span className="d-none d-md-block menuBar_link_text">پروفایل</span>
                    </Link>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default MenuBar