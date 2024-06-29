import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let mailRef = useRef();
  let passwordRef = useRef();
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,12}$/;
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return (
    <div>
      <div>
        <from className="form">
          <h3>Loginto your Account</h3>
          <div>
            <label>Your gmail:</label>
            <input type="mail" ref={mailRef}></input>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" ref={passwordRef}></input>
          </div>
          <div>
            <button type="button" onClick={()=>{
                let mailValid= gmailRegex.test(mailRef.current.value)
                let passValid= passwordRegex.test(passwordRef.current.value)
                if(mailValid==true && passValid==true){
                    navigate("/dashboard")
                }
                else{
                    alert(`please enter valid mail & password!`)
                }
            }}> Login</button>
          </div>
        </from>
        <p>
          You don't have account then<Link to={"/signup"} className="bottomLink"> Signin</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
