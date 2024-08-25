import UserInfo from '../p-user/UserInfo/UserInfo';
import UserLoc from '../p-user/UserLoc/UserLoc';
import './Panel.css';
import { useState } from 'react';

function Panel() {
    const [panelMenu , setPanelMenu] = useState("Info")

    const handlerPanelMenu=(panelID)=>{
        setPanelMenu(panelID);
    }

  return (
    <section className="panel">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className="panel_menu">
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
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    {panelMenu === "Info" && (<UserInfo/>)}
                    {panelMenu === "Loco" && (<UserLoc/>)}
                    {panelMenu === "FollowOrder" && (<h1>order</h1>)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Panel