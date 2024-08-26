import './Register.css';

function Register() {
  return (
    <section className="register">
    <div className="containers">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <h3 className="loginRegister_title">اگر  ثبت نام کردی بالا فشار بده ⬆️</h3>
                <form action="#" className="lrForm">
                    <div className="lrFormBox">
                        <span className="lrForm_text">نام و نام خانوادگی</span>
                        <input type="text" className="lrForm_input" placeholder='نام و نام خانوادگی' />
                    </div>
                    <div className="lrFormBox">
                        <span className="lrForm_text">ایمیل</span>
                        <input type="text" className="lrForm_input" placeholder='ایمیل' />
                    </div>
                    <div className="lrFormBox">
                        <span className="lrForm_text">شماره همراه </span>
                        <input type="text" className="lrForm_input" placeholder='شماره همراه' />
                    </div>
                    <div className="lrFormBox">
                        <span className="lrForm_text">رمزعبور</span>
                        <input type="password" className="lrForm_input" placeholder='************' />
                    </div>
                    <button className="lrForm_btn">ثبت نام</button>
                </form>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <img src="/images/signup.jpg" alt="Login img" className="d-none d-md-block  register_img" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Register