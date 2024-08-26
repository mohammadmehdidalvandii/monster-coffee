import "./SignInOrSignUp.css";
import HeadTitle from "../../../../utils/HeadTitle";
import { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
function SignInOrSignUp() {
  HeadTitle("ثبت نام | ورود ");
  const [menuForm, setMenuForm] = useState("Login");

  const handlerChangeMenu = (menuID) => {
    setMenuForm(menuID);
  };

  return (
    <section className="signInOrSignUp">
      <div className="containers">
        <div className="row">
          <div className="col-12">
            {menuForm === "Login" ? (
              <button
                className="loginRegister_btn"
                onClick={() => handlerChangeMenu("Register")}
              >
                ثبت نام
              </button>
            ) : (
              <button
                className="loginRegister_btn"
                onClick={() => handlerChangeMenu("Login")}
              >
                    ورود
              </button>
            )}
            
            {menuForm === "Login" && (<Login/>)}
            {menuForm === "Register" && (<Register/>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignInOrSignUp;
