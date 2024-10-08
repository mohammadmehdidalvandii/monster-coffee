import { FaSearch } from 'react-icons/fa';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
    const [fixNavTop , setFixNavTop] = useState(false);
    const [search , setSearch] = useState("");
    const navigate = useNavigate();

    // logic search handler
    const handlerSearch = ()=>{
        if(search.trim()){
            navigate(`/Search/${search}`)
            setSearch("");
        }
    }
    const handlerSearchEnter = (event)=>{
        if(event.key === "Enter"){
            if(search.trim()){
                navigate(`/Search/${search}`)
                setSearch("");
            }
        }
    }
 
    useEffect(()=>{
        const fixNavbarToTop = ()=>{
            const currentScroll = window.pageYOffset;            
            if(currentScroll > 90){
                setFixNavTop(true)
            }else{
                setFixNavTop(false)
            }
        }

        window.addEventListener("scroll", fixNavbarToTop);
        return ()=> window.removeEventListener("scroll" ,fixNavbarToTop);
    },[])



  return (
    <section className="navBar">
        <div className="containers">
            <div className={fixNavTop ? "navbar_Wrapper_fixed":"navbar_Wrapper"}>
                <h1 className="navbar_title">صبح بخیر قهوه شما امادست!</h1>
                {/* <span className="navbar_icons" onClick={handlerShowMenu}>
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
                </div> */}
                <Link to='/' className='navbar_logo'>
                    <img src="/images/logo.png" alt="" className="navbar_logo_img" />
                </Link>
            </div>
            <div className="navbar_search">
                <span className="navbar_search_icon" onClick={handlerSearch}>
                    <FaSearch/>
                </span>
                <input
                 type="text"
                 value={search}
                 onChange={e=>setSearch(e.target.value)}
                 onKeyDown={handlerSearchEnter}
                 className="navbar_search_input"
                  placeholder='جستجو قهوه شما'
                  />
            </div>
        </div>
    </section>
  )
}

export default Navbar