import UserInfo from '../p-user/UserInfo/UserInfo';
import UserLoc from '../p-user/UserLoc/UserLoc';
import UserOrder from '../p-user/UserOrder/UserOrder';
import './Panel.css';
import { useState } from 'react';

function Panel() {
    const [panelMenu , setPanelMenu] = useState("Info || dashboard")

    const handlerPanelMenu=(panelID)=>{
        setPanelMenu(panelID);
    }

  return (
    <section className="panel">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    {/* <div className="panel_menu">
                        <button 
                         className={panelMenu === "Info" ? "panel_btn_active" :"panel_btn"}
                         onClick={()=>handlerPanelMenu("Info")}
                         >اطلاعات حساب</button>
                        <button 
                        className={panelMenu === "Loco" ? "panel_btn_active" :"panel_btn"}
                        onClick={()=>handlerPanelMenu("Loco")}
                        >مکان تحویل</button>
                        <button
                         className={panelMenu === "FollowOrder" ? "panel_btn_active" :"panel_btn"}
                         onClick={()=>handlerPanelMenu("FollowOrder")}
                         >پیگیری سفارش</button>
                        <button className="panel_btn">خروج</button>
                    </div> */}

                    <div className="panel_menu">
                        <button 
                         className={panelMenu === "Dashboard" ? "panel_btn_active" :"panel_btn"}
                         onClick={()=>handlerPanelMenu("Dashboard")}
                         >پیشخوان</button>
                        <button 
                        className={panelMenu === "user_list" ? "panel_btn_active" :"panel_btn"}
                        onClick={()=>handlerPanelMenu("user_list")}
                        >لیست کاربران</button>
                        <button 
                        className={panelMenu === "shop_list" ? "panel_btn_active" :"panel_btn"}
                        onClick={()=>handlerPanelMenu("shop_list")}
                        >لیست فروشگاه</button>
                        <button 
                        className={panelMenu === "coffee_list" ? "panel_btn_active" :"panel_btn"}
                        onClick={()=>handlerPanelMenu("coffee_list")}
                        >لیست قهوه کده</button>
                        <button className="panel_btn">خروج</button>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                {/* <div className="col-12">
                    {panelMenu === "Info" && (<UserInfo/>)}
                    {panelMenu === "Loco" && (<UserLoc/>)}
                    {panelMenu === "FollowOrder" && (<UserOrder/>)}
                </div> */}
                <div className="col-12">
                    {panelMenu === "Dashboard" && (<h1>Dashboard</h1>)}
                    {panelMenu === "user_list" && (<h1>user_list</h1>)}
                    {panelMenu === "shop_list" && (<h1>shop_list</h1>)}
                    {panelMenu === "coffee_list" && (<h1>coffee_list</h1>)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Panel