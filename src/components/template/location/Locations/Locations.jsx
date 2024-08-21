import { FaSearch,  } from 'react-icons/fa'
import './Locations.css'
import { useState } from 'react'
import Cards from '../Cards/Cards';


function Locations() {
    const [locationMenu ,  setLocationMenu ] = useState("coffee");

    const handleMenuLocations = (menuID) =>{
        setLocationMenu(menuID)
    }

  return (
    <section className="locations">
        <div className="containers">
            <div className="locations_wrapper">
                {/* locations search */}
                <div className="locations_search">
                    <span className="locations_search_icon">
                        <FaSearch/>
                    </span>
                    <input type="text" className="locations_search_input" placeholder='جستجو کافه قهوه کده ...'/>
                </div>
                {/* locations search */}

                <ul className="locations_menu">
                    <li className="location_item">
                        <button 
                        className={locationMenu === "coffee" ?"location_btn_active" :"location_btn"}
                        onClick={()=>handleMenuLocations("coffee")}
                        >قهوه کده</button>
                    </li>
                    <li className="location_item">
                        <button 
                        className={locationMenu === "shop" ?"location_btn_active" :"location_btn"}
                        onClick={()=>handleMenuLocations("shop")}
                        >فروشگاه</button>
                    </li>
                    <li className="location_item">
                        <button 
                        className={locationMenu === "coffee-shop" ?"location_btn_active" :"location_btn"}
                        onClick={()=>handleMenuLocations("coffee-shop")}
                        >کافی شاپ</button>
                    </li>
                </ul>

                <div className="location_menu_site">
                    {locationMenu === "coffee" &&(
                        <>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                        </>
                    )}
                    {locationMenu === "shop" &&(
                        <>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                        </>
                    )}
                    {locationMenu === "coffee-shop" &&(
                        <>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                        </>
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Locations