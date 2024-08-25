import { FaClock, FaLocationDot } from 'react-icons/fa6';
import {FaOrcid } from 'react-icons/fa';
import './UserOrder.css';

function UserOrder() {
  return (
    <section className="userOrder">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className="userOder_wrapper">
                        <h5 className="userOrder_title">لیست ارسالی ها</h5>
                    </div>
                </div>
            </div>
            <div className="row mt-4 row-gap-4 ">
                <div className="col-12">
                    <div className="userOrder_item">
                        <div className="userOrder_item_delivery">
                            <img src="/images/user.png" alt="" className="userOrder_item_img" />
                            <span className="userOrder_item_name">محمد احمدی</span>
                        </div>
                    <div className="userOder_content">
                        <span className="userOrder_content_icon">
                            <FaLocationDot/>
                        </span>
                        <div className="userOrder_content_wrapper">
                            <span className="userOrder_content_title">آدرس</span>
                            <span className="userOrder_content_text">تهران پونک عدل شرقی</span>
                        </div>
                    </div>
                    <div className="userOder_content">
                        <span className="userOrder_content_icon">
                            <FaClock/>
                        </span>
                        <div className="userOrder_content_wrapper">
                            <span className="userOrder_content_title">زمان تحویل</span>
                            <span className="userOrder_content_text">
                                20-30 دقیقه
                            </span>
                        </div>
                    </div>
                    <div className="userOder_content">
                        <span className="userOrder_content_icon">
                            <FaOrcid/>
                        </span>
                        <div className="userOrder_content_wrapper">
                            <span className="userOrder_content_title">شناسه</span>
                            <span className="userOrder_content_text">#546984</span>
                        </div>
                    </div>
                    <div className="userOder_content">
                        <span className="userOrder_content_icon">
                            <FaOrcid/>
                        </span>
                        <div className="userOrder_content_wrapper">
                            <span className="userOrder_content_title">وضعیت</span>
                            <span className="userOrder_content_text">تحویل داد شد</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="userOrder_item">
                        <div className="userOrder_item_delivery">
                            <img src="/images/user.png" alt="" className="userOrder_item_img" />
                            <span className="userOrder_item_name">محمد احمدی</span>
                        </div>
                    <div className="userOder_content">
                        <span className="userOrder_content_icon">
                            <FaLocationDot/>
                        </span>
                        <div className="userOrder_content_wrapper">
                            <span className="userOrder_content_title">آدرس</span>
                            <span className="userOrder_content_text">تهران پونک عدل شرقی</span>
                        </div>
                    </div>
                    <div className="userOder_content">
                        <span className="userOrder_content_icon">
                            <FaClock/>
                        </span>
                        <div className="userOrder_content_wrapper">
                            <span className="userOrder_content_title">زمان تحویل</span>
                            <span className="userOrder_content_text">
                                20-30 دقیقه
                            </span>
                        </div>
                    </div>
                    <div className="userOder_content">
                        <span className="userOrder_content_icon">
                            <FaOrcid/>
                        </span>
                        <div className="userOrder_content_wrapper">
                            <span className="userOrder_content_title">شناسه</span>
                            <span className="userOrder_content_text">#546984</span>
                        </div>
                    </div>
                    <div className="userOder_content">
                        <span className="userOrder_content_icon">
                            <FaOrcid/>
                        </span>
                        <div className="userOrder_content_wrapper">
                            <span className="userOrder_content_title">وضعیت</span>
                            <span className="userOrder_content_text">تحویل داد شد</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default UserOrder