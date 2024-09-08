import Dashboard from "../P-admin/Dashboard/Dashboard";
import ShopList from "../P-admin/ShopList/ShopList";
import TakeCoffee from "../P-admin/TakeCoffee/TakeCoffee";
import UserList from "../P-admin/UserList/UserList";
import UserInfo from "../p-user/UserInfo/UserInfo";
import UserLoc from "../p-user/UserLoc/UserLoc";
import UserOrder from "../p-user/UserOrder/UserOrder";
import "./Panel.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
function Panel() {
  const [panelMenuUser, setPanelMenuUser] = useState("Info");
  const [panelMenuAdmin, setPanelMenuAdmin] = useState("Dashboard");
  const [isAdmin, setIsAdmin] = useState(false);

  // get cookie
  const token = Cookies.get("token");
  const admin = Cookies.get("isAdmin");
// Set ADMIN or USER menu
  useEffect(() => {
    const admin = Cookies.get("isAdmin");
    if (admin) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [admin]);
  if (!token) {
    swal({
      title: "شما به این صفحه دسترسی ندارید",
      icon: "error",
      buttons: "فهمیدم",
    }).then(() => {
      window.location.replace("/LoginRegister");
    });
  }
// Handler Change Menu Panel 
  const handlerPanelMenuUser = (panelID) => {
    setPanelMenuUser(panelID);
  };
  const handlerPanelMenuAdmin = (panelID) => {
    setPanelMenuAdmin(panelID);
  };

//   Handler Exit Panel

const handlerExitPanel = ()=>{
    swal({
        title:"ایا از خروج خود اطمینان دارید",
        icon:"warning",
        buttons:["نه","آره"]
    }).then((result)=>{
        if(result){
            Cookies.remove("token")
            Cookies.remove("isAdmin")
            swal({
                title:"با موفقیت خارج شدید ",
                icon:"success",
                buttons:"فهمیدم"
            }).then(()=>{
                window.location.replace('/')
            })
        }
    })
}

  return (
    <section className="panel">
      <div className="containers">
        <div className="row">
          <div className="col-12">
            {isAdmin ? (
              <div className="panel_menu">
                <button
                  className={
                    panelMenuAdmin === "Dashboard"
                      ? "panel_btn_active"
                      : "panel_btn"
                  }
                  onClick={() => handlerPanelMenuAdmin("Dashboard")}
                >
                  پیشخوان
                </button>
                <button
                  className={
                    panelMenuAdmin === "user_list"
                      ? "panel_btn_active"
                      : "panel_btn"
                  }
                  onClick={() => handlerPanelMenuAdmin("user_list")}
                >
                  لیست کاربران
                </button>
                <button
                  className={
                    panelMenuAdmin === "shop_list"
                      ? "panel_btn_active"
                      : "panel_btn"
                  }
                  onClick={() => handlerPanelMenuAdmin("shop_list")}
                >
                  لیست فروشگاه
                </button>
                <button
                  className={
                    panelMenuAdmin === "coffee_list"
                      ? "panel_btn_active"
                      : "panel_btn"
                  }
                  onClick={() => handlerPanelMenuAdmin("coffee_list")}
                >
                  لیست قهوه کده
                </button>
                <button className="panel_btn" onClick={handlerExitPanel}>خروج</button>
              </div>
            ) : (
              <div className="panel_menu">
                <button
                  className={
                    panelMenuUser === "Info" ? "panel_btn_active" : "panel_btn"
                  }
                  onClick={() => handlerPanelMenuUser("Info")}
                >
                  اطلاعات حساب
                </button>
                <button
                  className={
                    panelMenuUser === "Loco" ? "panel_btn_active" : "panel_btn"
                  }
                  onClick={() => handlerPanelMenuUser("Loco")}
                >
                  مکان تحویل
                </button>
                <button
                  className={
                    panelMenuUser === "FollowOrder"
                      ? "panel_btn_active"
                      : "panel_btn"
                  }
                  onClick={() => handlerPanelMenuUser("FollowOrder")}
                >
                  پیگیری سفارش
                </button>
                <button className="panel_btn" onClick={handlerExitPanel}>خروج</button>
              </div>
            )}
          </div>
        </div>
        {isAdmin ? (
          <div className="col-12">
            {panelMenuAdmin === "Dashboard" && <Dashboard />}
            {panelMenuAdmin === "user_list" && <UserList />}
            {panelMenuAdmin === "shop_list" && <ShopList />}
            {panelMenuAdmin === "coffee_list" && <TakeCoffee />}
          </div>
        ) : (
          <div className="row mt-3">
            <div className="col-12">
              {panelMenuUser === "Info" && <UserInfo />}
              {panelMenuUser === "Loco" && <UserLoc />}
              {panelMenuUser === "FollowOrder" && <UserOrder />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Panel;
