import { Link, useLocation } from 'react-router-dom';
import './MenuBar.css';
import { FaHeart, FaHouse, FaLocationDot, FaUser } from 'react-icons/fa6';
import { BsShop } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { MdLogin } from 'react-icons/md';

function MenuBar() {
    const locations = useLocation();
    const [activeMenu , setActiveMen] = useState('/')
    const [basketItem ,  setBasketItem] = useState()


    useEffect(()=>{
        const basket = JSON.parse(localStorage.getItem("basket")|| "[]")
        setBasketItem(basket.length)
    },[localStorage.getItem("basket") ]);


    useEffect(()=>{
        const pathName= locations.pathname;
        setActiveMen(pathName);
        window.scroll(0,0)
    },[locations])

  return (
    <section className="menuBar">
        <div className="containers">
            <ul className="menuBar_menu">
                <li className="menuBar_item">
                    <Link to='/' className={activeMenu === '/' ? "menuBar_item_link_active" :"menuBar_item_link"}>
                        <span className="menuBar_link_icon">
                            <FaHouse/>
                        </span>
                        <span className="d-none d-md-block menuBar_link_text">خانه</span>
                    </Link>
                </li>
                <li className="menuBar_item">
                    <Link to='/Location' className={activeMenu === '/Location' ? "menuBar_item_link_active" :"menuBar_item_link"}>
                        <span className="menuBar_link_icon">
                            <FaLocationDot/>
                        </span>
                        <span className="d-none d-md-block menuBar_link_text">نزدیکترین</span>
                    </Link>
                </li>
                <li className="menuBar_item">
                    <Link to='/Shop' className={activeMenu === '/Shop' ? "menuBar_item_link_active" :"menuBar_item_link"}>
                        <span className="menuBar_link_icon">
                            <BsShop/>
                        </span>
                        <span className="d-none d-md-block menuBar_link_text">فروشگاه</span>
                    </Link>
                </li>
                <li className="menuBar_item">
                    <Link to='/Shopping' className={activeMenu === '/Shopping' ? "menuBar_item_link_active" :"menuBar_item_link"}>
                        <span className="menuBar_link_icon">
                            <FaShoppingCart/>
                            <sub className="menubar_link_number">{basketItem}</sub>     
                        </span>
                        <span className="d-none d-md-block menuBar_link_text">سبد خرید</span>
                    </Link>
                </li>
                <li className="menuBar_item">
                    <Link to='/Favorite' className={activeMenu === '/Favorite' ? "menuBar_item_link_active" :"menuBar_item_link"}>
                        <span className="menuBar_link_icon">
                            <FaHeart/>
                        </span>
                        <span className="d-none d-md-block menuBar_link_text">مورد علاقه</span>
                    </Link>
                </li>
                {/* <li className="menuBar_item">
                    <Link to='/Profiles' className={activeMenu === '/Profiles' ? "menuBar_item_link_active" :"menuBar_item_link"}>
                        <span className="menuBar_link_icon">
                            <FaUser/>
                        </span>
                        <span className="d-none d-md-block menuBar_link_text">پروفایل</span>
                    </Link>
                </li> */}
                <li className="menuBar_item">
                    <Link to='/LoginRegister' className={activeMenu === '/LoginRegister' ? "menuBar_item_link_active" :"menuBar_item_link"}>
                        <span className="menuBar_link_icon">
                            <MdLogin/>
                        </span>
                        <span className="d-none d-md-block menuBar_link_text">ورود | ثبت نام</span>
                    </Link>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default MenuBar