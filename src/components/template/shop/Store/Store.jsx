import './Store.css';
import Title from '../../../modules/Title/Title';
import { useState } from 'react';
import CoffeeCard from '../../../modules/CoffeeCard/CoffeeCard';

function Store() {
    const [shopMenu , setShopMenu] = useState("coffee")

    const handlerMenuShop = (menuID)=>{
        setShopMenu(menuID);
    }

  return (
    <section className="store">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <Title title='دسته بندی'/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="store_menu">
                    <button 
                    className={shopMenu === "coffee" ? "store_btn_active" :"store_btn"}
                    onClick={()=>handlerMenuShop("coffee")}
                    > قهوه</button>
                    <button 
                    className={shopMenu === "coffee_filter" ? "store_btn_active" :"store_btn"}
                    onClick={()=>handlerMenuShop("coffee_filter")}
                    > قهوه فیلتر شد</button>
                    <button 
                    className={shopMenu === "coffee_fast" ? "store_btn_active" :"store_btn"}
                    onClick={()=>handlerMenuShop("coffee_fast")}
                    > قهوه فوری</button>
                    <button 
                    className={shopMenu === "coffee_black" ? "store_btn_active" :"store_btn"}
                    onClick={()=>handlerMenuShop("coffee_black")}
                    > قهوه سیاه</button>
                    <button 
                    className={shopMenu === "coffee_white" ? "store_btn_active" :"store_btn"}
                    onClick={()=>handlerMenuShop("coffee_white")}
                    > قهوه سفید</button>
                    <button 
                    className={shopMenu === "coffee_thinness" ? "store_btn_active" :"store_btn"}
                    onClick={()=>handlerMenuShop("coffee_thinness")}
                    > قهوه لاغری</button>
                    <button 
                    className={shopMenu === "coffee_combined" ? "store_btn_active" :"store_btn"}
                    onClick={()=>handlerMenuShop("coffee_combined")}
                    > قهوه ترکیبی</button>
                    <button 
                    className={shopMenu === "coffee_arabic" ? "store_btn_active" :"store_btn"}
                    onClick={()=>handlerMenuShop("coffee_arabic")}
                    > قهوه عربیکا</button>
                    <button 
                    className={shopMenu === "coffee_robusta" ? "store_btn_active" :"store_btn"}
                    onClick={()=>handlerMenuShop("coffee_robusta")}
                    > قهوه روبوستا</button>
                </div>
            </div>

            <div className="row mt-5 row-gap-4">
                {shopMenu === "coffee" && (
                   <>
                     <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                   </>
                )}
                {shopMenu === "coffee_filter" && (
                     <>
                     <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                   </>
                )}
                {shopMenu === "coffee_fast" && ( <>
                     <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                   </>)}
                {shopMenu === "coffee_black" && (
                     <>
                     <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                   </>
                )}
                {shopMenu === "coffee_white" && (
                     <>
                     <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                   </>
                )}
                {shopMenu === "coffee_thinness" && (
                     <>
                     <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                   </>
                )}
                {shopMenu === "coffee_combined" && (
                     <>
                     <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                   </>
                )}
                {shopMenu === "coffee_arabic" && (
                     <>
                     <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                   </>
                )}
                {shopMenu === "coffee_robusta" && (
                     <>
                     <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <CoffeeCard/>
                    </div>
                   </>
                )}
            </div>
        </div>
    </section>
  )
}

export default Store