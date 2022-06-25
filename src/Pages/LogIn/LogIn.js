import React, { useState } from "react";
import "./LogIn.css";
import Show from "../../assets/log-in/show.svg";

import { useLogin } from "../../hooks/useLogin";
// firebase
export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passShw, setPassShw] = useState(false);
  const { Login, isPending, error } = useLogin();

  // handler functions
  const loginFormHandler = (e) => {
    e.preventDefault();
    Login(email, password);
    setEmail("");
    setPassword("");
  };
  // email submit
  const emailHandler = (e) => {
    e.preventDefault();
    const temp = e.target.value.trim();
    setEmail(temp);
  };
  // password handler
  const passwordHandler = (e) => {
    e.preventDefault();
    const temp = e.target.value.trim();

    setPassword(temp);
  };
  // log-in handler
  // password show toggler
  const showPass = (e) => {
    e.preventDefault();
    setPassShw(!passShw);
    // console.log(e.target)
  };
  return (
    <div className='login-container'>
      <div className='login'>
        <h1 className='login-header'>login</h1>
        <form className='login-form' onSubmit={loginFormHandler}>
          <label>
            email:
            <input
              type='email'
              value={email}
              required
              className='login-email'
              onChange={emailHandler}
            />
          </label>
          <label>
            password:
            <div className='login-form-control'>
              <input
                type={passShw ? "text" : "password"}
                value={password}
                required
                className='login-password'
                onChange={passwordHandler}
              />
              <img
                className='login-passShow'
                src={Show}
                alt='show'
                onClick={showPass}
              />
            </div>
          </label>
          <button className='login-button'>Login</button>
        </form>
      </div>
    </div>
  );
}
