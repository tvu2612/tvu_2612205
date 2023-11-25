
import "./style.css"
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

import validateEmail from "./utils";


export default function App(){
  const [email, setEmail] = useState({
      value : "",
      isTouched:false,
      isValid:false
    });


  const [pwd, setPwd] = useState({
    value:"",
    isTouched:false,
    isValid:false
  });

  const [confirmPwd, setConfirmPwd] = useState({
    value:"",
    isTouched:false,
    isValid:false
  });

  function handleEmailInput(e){
    setEmail({
        isTouched:true,
        value:e.target.value,
        isValid:validateEmail(e.target.value)
      });
  }

  function handlePwdInput(e){
    setPwd({
      isTouched:true,
      value:e.target.value,
      isValid:e.target.value.length >= 6 ? true:false
    });
  }

  function handleConfirmPwdInput(e){
    setConfirmPwd({
      isTouched:true,
      value:e.target.value,
      isValid:e.target.value === pwd.value ? true : false
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    window.alert(
      // 'Submitted: \n Email: ${email.value} \n Password: ${pwd.value}'
    );
  }

  const formIsValid = email.isValid && pwd.isValid && confirmPwd.isValid;

  return(
    <div className="App">
      <div className="form-container">
      <Input
        name="email"
        type="text"
        lang="Email"
        onChange={handleEmailInput}
        isValid={email.isValid}
        isTouched={email.isTouched}
        placeholder="Email..."
        value={email.value}
        errorMsg ="Enter a valid email"/>
      <Input
        name="password"
        type="password"
        label="password"
        onChange={handlePwdInput}
        isValid={pwd.isValid}
        isTouched={pwd.isTouched}
        placeholder="Password..."
        value={pwd.value}
        errorMsg="Minimum 6 characters"
        />
      <Input
        name="confirmPwd"
        type="password"
        label="Confirm password"
        onChange={handleConfirmPwdInput}
        isValid={confirmPwd.isValid}
        isTouched={confirmPwd.isTouched}
        placeholder="Confirm password..."
        value={confirmPwd.value}
        errorMsg="Passwords do not match!"    
        />
      <Button
      text="REGISTER"
      onClick={handleSubmit}
      disabled={!formIsValid}
      />
      </div>
    </div>
  );
}

