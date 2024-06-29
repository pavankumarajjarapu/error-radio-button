import React, { useRef } from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";

function Signup() {
  let paraRef = useRef();
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let maleRBRef = useRef();
  let femaleRBRef = useRef();
  let stateRef = useRef();
  // let navigateDashboard=useLocation();
  let genderValid;
  let maritalStatus;
  let salutation;
  let final = () => {
    if (genderValid == "male") {
      salutation = "Mr.";
    } else {
      if (maritalStatus == "single") {
        salutation = "Miss.";
      } else {
        salutation = "Mrs.";
      }
    }
    paraRef.current.innerHTML = `${salutation} ${firstNameInputRef.current.value} ${lastNameInputRef.current.value} are coming from ${stateRef.current.value}.`;
  };
  return (
    <div>
      <Navbar></Navbar>

      <from className="form">
        <h3>signup</h3>
        <div>
          <label>FirstName:</label>
          <input type="text" ref={firstNameInputRef}></input>
        </div>
        <div>
          <label>LastName:</label>
          <input type="text" ref={lastNameInputRef}></input>
        </div>
        <div>
          <label>Choose your State:</label>
          <select name="states" className="select" ref={stateRef}>
            <option value="AP">Andhra Pradesh (AP)</option>
            <option value="KA">Karnataka (KA)</option>
            <option value="KL">Kerala (KL)</option>
            <option value="TN">Tamil Nadu (TN)</option>
            <option value="TG">Telangana (TG)</option>
            <option value="PY">Puducherry (PY)</option>
            <option value="LD">Lakshadweep (LD)</option>
            <option value="AN">Andaman and Nicobar Islands (AN)</option>
            <option value="GA">Goa (GA)</option>
            <option value="MH">Maharashtra (MH)</option>
          </select>
        </div>
        <div>
          <label> Gender</label>
          <input
            type="radio"
            name="gender"
            ref={maleRBRef}
            onChange={() => {
              if (maleRBRef.current.checked == true) {
                genderValid = "male";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Male</label>
          <input
            type="radio"
            name="gender"
            ref={femaleRBRef}
            onChange={() => {
              if (femaleRBRef.current.checked == true) {
                genderValid = "female";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Female</label>
        </div>
        <div>
          <label> Marital Status</label>
          <input
            type="radio"
            name="marriage"
            onChange={(single) => {
              if (single.target.checked == true) {
                maritalStatus = "single";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Single</label>
          <input
            type="radio"
            name="marriage"
            onChange={(married) => {
              if (married.target.checked == true) {
                maritalStatus = "married";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Married</label>
        </div>
        <button
          onClick={() => {
            final();
            // navigateDashboard("/dashboard",{state:{greeting:`Hi ${firstNameInputRef.current.value} welcome to Reacts!`}})
          }}
          type="button"
        >
          {" "}
          summary
        </button>
        <p ref={paraRef}></p>
      </from>
      <p>already you have account? then <Link to={"/login"} className="bottomLink">
          click me.
        </Link></p> 
        

    </div>
  );
}

export default Signup;
