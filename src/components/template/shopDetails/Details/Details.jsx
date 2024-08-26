import { FaHeart } from 'react-icons/fa';
import './Details.css';

function Details() {
  return (
   <section className="details">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className="boxContent">
                        <div className="details_wrapper">
                            <img src="/images/coffee1.jpg" alt="" className="details_img" />
                            <div className="details_content">
                                    <h6 className="details_name">قهوه شکلاتی</h6>
                                    <select name="" id="" className="details_menu">
                                        <option value="" className="details_option">انتخاب سایز</option>
                                        <option value="" className="details_option">کوچیک</option>
                                        <option value="" className="details_option">متوسط</option>
                                        <option value="" className="details_option">بزرگ</option>
                                    </select>
                                    <span className="prices"> 40 تومان  </span>
                                    <div className="detail_btns">
                                        <button className="details_btn_favorite">
                                            <FaHeart/>
                                        </button>
                                        <button className="details_btn">
                                            افزودن سبد خرید
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Details