import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { showSwal } from '../../../../utils/Helpers';


function Login() {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate()

    // logic login Handler
    const loginHandler = (event)=>{
        event.preventDefault();
        // validations 
        
      

        fetch('http://localhost:3000/users')
        .then(res=>res.json())
        .then(data=>{
            const isUser = data.find((item)=> item.email === email && item.password === password);
            console.log(isUser)
            if(isUser){
                const expires = new Date(Date.now() + 60 *60 *24 *3)
                document.cookie = `user=${JSON.stringify(`userName=${isUser.name}`+`userId=${isUser.id}`+`userRole=${isUser.role}`)};expires=${expires}`;
                swal({
                    title:"ورود شما با موفقیت انجام شد",
                    icon:"success",
                    buttons:"ورود به پنل کاربری"
                }).then(()=>{
                    navigate('/Profiles');
                })
            }else{
                if(!email.trim() || !password.trim()){
                    showSwal("ایمیل و رمزعبور اجباری است","warning","تلاش مجدد")
                } 
            }
        })
    }

  return (
    <section className="login">
        <div className="containers">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h3 className="loginRegister_title">اگر  ثبت نام نکردی بالا فشار بده ⬆️</h3>
                    <form action="#" className="lrForm">
                        <div className="lrFormBox">
                            <span className="lrForm_text">شماره همراه | ایمیل</span>
                            <input
                             type="text"
                             value={email}
                             onChange={(e)=>setEmail(e.target.value)}
                             className="lrForm_input"
                              placeholder='شماره همراه | ایمیل'
                              />
                        </div>
                        <div className="lrFormBox">
                            <span className="lrForm_text">رمزعبور</span>
                            <input
                             type="password"
                             value={password}
                             onChange={(e)=>setPassword(e.target.value)}
                             className="lrForm_input"
                              placeholder='************'
                              />
                        </div>
                        <button className="lrForm_btn" onClick={loginHandler}>ورود</button>
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