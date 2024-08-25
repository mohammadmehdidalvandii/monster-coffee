import { FaLocationDot } from 'react-icons/fa6';
import './UserLoc.css';
 
 function UserLoc() {
    const handlerNewAddress = ()=>{
        alert("به زود فعال میشود صبور باشید 😍")
    }
   return (
     <section className="userLoc">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className="userLoc_wrapper">
                        <img src="/images/loc.png" alt="location logo" className="userLoc_img" />
                        <h5 className="userLoco_title">ورود مکان‌های تحویل</h5>
                        <span className="userLoco_text">برای راحتی تحویل، مکان خود را وارد کنید.</span>
                    </div>
                </div>
            </div>
            <div className="row mt-4 row-gap-4">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="userLoc_item userLoc_item_active">
                        <span className="userLoc_item_icon">
                            <FaLocationDot/>
                        </span>
                        <div className="userLoc_item_content">
                            <h6 className="userLoc_item_title">تهران</h6>
                            <p className="userLoc_item_text">پونک عدل شرقی کوچه سوم پلاک 11</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="userLoc_item ">
                        <span className="userLoc_item_icon">
                            <FaLocationDot/>
                        </span>
                        <div className="userLoc_item_content">
                            <h6 className="userLoc_item_title">تهران</h6>
                            <p className="userLoc_item_text">پونک عدل شرقی کوچه سوم پلاک 11</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="userLoc_item ">
                        <span className="userLoc_item_icon">
                            <FaLocationDot/>
                        </span>
                        <div className="userLoc_item_content">
                            <h6 className="userLoc_item_title">تهران</h6>
                            <p className="userLoc_item_text">پونک عدل شرقی کوچه سوم پلاک 11</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <button className="userLoco_addNew" onClick={handlerNewAddress}>افزودن آدرس جدید</button>
                </div>
            </div>
        </div>
     </section>
   )
 }
 
 export default UserLoc