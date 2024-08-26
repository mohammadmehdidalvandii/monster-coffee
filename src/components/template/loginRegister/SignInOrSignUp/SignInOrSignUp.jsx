import "./SignInOrSignUp.css";
import HeadTitle from "../../../../utils/HeadTitle";
import { useState } from "react";
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
                className="btn"
                onClick={() => handlerChangeMenu("Register")}
              >
                ثبت نام
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => handlerChangeMenu("Login")}
              >
                    ورود
              </button>
            )}
            
            {menuForm === "Login" && (<h1>Login</h1>)}
            {menuForm === "Register" && (<h1>register</h1>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignInOrSignUp;
