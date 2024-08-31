import './Store.css';
import Title from '../../../modules/Title/Title';
import { useEffect, useState } from 'react';
import CoffeeCard from '../../../modules/CoffeeCard/CoffeeCard';

function Store() {
    const [shopMenu , setShopMenu] = useState("coffee")
    const [coffees , setCoffees] = useState([]);
    console.log(coffees)

    const handlerMenuShop = (menuID)=>{
        setShopMenu(menuID);
    }

    useEffect(()=>{
        fetch('http://localhost:3000/coffees')
        .then(res=>res.json())
        .then(data=>setCoffees(data))
    },[])

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
                    className={shopMenu === "coffee_ice" ? "store_btn_active" :"store_btn"}
                    onClick={()=>handlerMenuShop("coffee_ice")}
                    >قهوه خنک</button>
                    <button 
                    className={shopMenu === "coffee_ess" ? "store_btn_active" :"store_btn"}
                    onClick={()=>handlerMenuShop("coffee_ess")}
                    > قهوه اسپرسو</button>
                    <button 
                    className={shopMenu === "coffee_trk" ? "store_btn_active" :"store_btn"}
                    onClick={()=>handlerMenuShop("coffee_trk")}
                    > قهوه ترک</button>
                    {/* <button 
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
                    > قهوه روبوستا</button> */}
                </div>
            </div>

            <div className="row mt-5 row-gap-4">
                {shopMenu === "coffee" && (
                   <>
                   {coffees.map(coffee=>(
                        <div className="col-lg-3 col-md-6 col-sm-12" key={coffee.id}>
                        <CoffeeCard 
                            {...coffee}
                            price={coffee.sizes.find(size=>size.size === "کوچیک").price}
                        />
                         </div>
                   ))}
                   </>
                )}
                {shopMenu === "coffee_ice" && (
                     <>
                        {coffees.filter(coffee => coffee.categoryId === 2).map(item =>(
                              <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
                              <CoffeeCard
                                {...item}
                                price={item.sizes.find(size=>size.size === "کوچیک").price}
                              />
                          </div>
                        ))}
                   </>
                )}
                {shopMenu === "coffee_ess" && (
                     <>
                    {coffees.filter(coffee => coffee.categoryId === 3).map(item =>(
                              <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
                              <CoffeeCard
                                {...item}
                                price={item.sizes.find(size=>size.size === "کوچیک").price}
                              />
                          </div>
                        ))}
                   </>
                )}
                {shopMenu === "coffee_trk" && (
                     <>
                  {coffees.filter(coffee => coffee.categoryId === 4).map(item =>(
                              <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
                              <CoffeeCard
                                {...item}
                                price={item.sizes.find(size=>size.size === "کوچیک").price}
                              />
                          </div>
                        ))}
                   </>
                )}
                {/* {shopMenu === "coffee_white" && (
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
                )} */}
            </div>
        </div>
    </section>
  )
}

export default Store