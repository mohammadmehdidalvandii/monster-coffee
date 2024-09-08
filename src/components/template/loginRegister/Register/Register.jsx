import { useState } from 'react';
import './Register.css';
import {showSwal} from '../../../../utils/Helpers'

import React from 'react'

function Register() {
    const [name , setName] =useState()
    const [email , setEmail] =useState()
    const [phone , setPhone] =useState()
    const [password , setPassword] =useState()

    


const handlerRegister = (e)=>{
    e.preventDefault();

    // validations
    if(name.length < 3){
        showSwal("حروف نام کاربری باید بیشتر 3 حرف باشد","error","تلاش مجدد")
    }else if(!name.trim()){
        showSwal("مقدار نام اجباری هست","error","تلاش مجدد")
    } 
    if(!email.trim()){
        showSwal("مقدار ایمیل اجیاری است","error","تلاش مجدد")
    }
    if(phone.length < 11){
        showSwal("مقدار تلفن باید 11 عدد باشد","error","تلاش مجدد")
    }else if(!phone.trim()){
        showSwal("تلفن اجباری است","error","تلاش مجدد")
    }

    if(!password.trim()){
        showSwal("مقدار رمزعبور اجباری است","error","تلاش مجدد")
    }else if(password.length < 8){
        showSwal("مقدار رمز عبور باید بیشتر از8 باشد","error","تلاش مجدد")
    }

    // user Exist 
    fetch(`https://datacoffeemonster.liara.run/users?email=${email}`)
    .then(res=> res.json())
    .then(data=> {
        if(data.email === email){
            showSwal("این ایمیل قبلا ثبت نام کرده","error","تلاش مجدد")
        }else{
            const data = {
                name:name,
                email:email,
                phone:phone,
                password:password,
                role:"USER"
            };
            fetch('https://datacoffeemonster.liara.run/users',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>{
                swal({
                    title:"ثبت نام شما موفقیت آمیز بود",
                    icon:"success",
                    buttons:"فهمیدم"
                }).then(()=>{
                    setName("");
                    setEmail("");
                    setPhone("");
                    setPassword("");
                    window.location.reload()
                })
            })
            .catch(err=>console.log(err))
        }
    })
}

  return (
   
    <section className="register">
    <div className="containers">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <h3 className="loginRegister_title">اگر  ثبت نام کردی    بالا فشار بده ⬆️</h3>
                <form action="#" className="lrForm">
                    <div className="lrFormBox">
                        <span className="lrForm_text">نام و نام خانوادگی</span>
                        <input
                         type="text"
                         value={name}
                         onChange={(e)=>setName(e.target.value)}
                         className="lrForm_input" 
                        placeholder='نام و نام خانوادگی'
                         />
                    </div>
                    <div className="lrFormBox">
                        <span className="lrForm_text">ایمیل</span>
                        <input
                         type="text"
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}
                         className="lrForm_input" 
                        placeholder='ایمیل'
                         />
                    </div>
                    <div className="lrFormBox">
                        <span className="lrForm_text">شماره همراه </span>
                        <input
                         type="text"
                         value={phone}
                         onChange={(e)=>setPhone(e.target.value)}
                         className="lrForm_input" 
                        placeholder='شماره همراه'
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
                    <button className="lrForm_btn" onClick={handlerRegister}>ثبت نام</button>
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


//  logic HandlerRegister





