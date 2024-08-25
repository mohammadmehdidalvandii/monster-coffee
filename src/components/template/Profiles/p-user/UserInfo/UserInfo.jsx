import './UserInfo.css';

function UserInfo() {
  return (
    <section className="userInfo">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <h6 className="userInfo_title">اطلاعات حساب کاربری</h6>
                </div>
            </div>
            <div className="row mt-4 row-gap-4">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="boxContent">
                        <div className="userInfo_info">
                            <h3 className="userInfo_text">خیلی خوش امدی</h3>
                            <span className="userInfo_user">محمدمهدی دالوندی</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="boxContent">
                        <div className="userInfo_change">
                            <h6 className="userInfo_change_title">تغییر اطلاعات</h6>
                            <input type="text" className="userInfo_input"  placeholder='نام ونام خانوادگی '/>
                            <input type="text" className="userInfo_input"  placeholder='شماره همراه'/>
                            <input type="text" className="userInfo_input"  placeholder='ایمیل'/>
                            <button className="userInfo_change_btn">ذخیره</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default UserInfo