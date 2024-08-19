import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [showMenu , setShowMenu] = useState(false);

    const handlerShowMenu = ()=>{
        setShowMenu(!showMenu)
        
    }


  return (
    <section className="navBar">
        <div className="containers">
            <div className="navbar_Wrapper">
                <h1 className="navbar_title">صبح بخیر قهوه شما امادست!</h1>
                <span className="navbar_icons" onClick={handlerShowMenu}>
                    {showMenu ?(
                           <FaTimes/>
                    ):(
                        <FaBars/>
                    )}
                 
                </span>
                <div className={showMenu ? "navbar_menu_active" :"navbar_menu"}>
                    <div className="navbar_menu_nav">
                        <img src="/images/logo.png" alt="" className="navbar_menu_logo" />
                        <h6 className="navbar_menu_title">کافه هیولا !</h6>
                    </div>
                    <ul className="navbar_items">
                        <li className="navbar_item">
                            <Link to='#' className='navbar_link'>خانه</Link>
                        </li>
                        <li className="navbar_item">
                            <Link to='#' className='navbar_link'>نزدیکترین</Link>
                        </li>
                        <li className="navbar_item">
                            <Link to='#' className='navbar_link'>پروفایل</Link>
                        </li>
                        <li className="navbar_item">
                            <Link to='#' className='navbar_link'>سفارش</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar_search">
                <span className="navbar_search_icon">
                    <FaSearch/>
                </span>
                <input type="text" className="navbar_search_input" placeholder='جستجو قهوه شما'/>
            </div>
        </div>
    </section>
  )
}

export default Navbar