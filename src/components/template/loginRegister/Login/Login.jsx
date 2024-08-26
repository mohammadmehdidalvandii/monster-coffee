import './Login.css';

function Login() {
  return (
    <section className="login">
        <div className="containers">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h3 className="loginRegister_title">اگر  ثبت نام نکردی بالا فشار بده ⬆️</h3>
                    <form action="#" className="lrForm">
                        <div className="lrFormBox">
                            <span className="lrForm_text">شماره همراه | ایمیل</span>
                            <input type="text" className="lrForm_input" placeholder='شماره همراه | ایمیل' />
                        </div>
                        <div className="lrFormBox">
                            <span className="lrForm_text">رمزعبور</span>
                            <input type="password" className="lrForm_input" placeholder='************' />
                        </div>
                        <button className="lrForm_btn">ورود</button>
                    </form>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/images/singin.jpg" alt="Login img" className="d-none d-md-block  login_img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login