import React, { useState } from "react";
import "./SignUp.css";
import Show from "../../assets/log-in/show.svg";
import { useNavigate } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
// firebase
import { projectAuth } from "../../firebase/firebaseConfig";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passShw, setPassShw] = useState(false);
  const navigate = useNavigate();
  const { signup, isPending, error } = useSignup();
  // handler functions
  // log-in handler
  const loginFormHandler = (e) => {
    e.preventDefault();
    signup(email, password, name);
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
  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  // password show toggler
  const showPass = (e) => {
    e.preventDefault();
    setPassShw(!passShw);
    // console.log(e.target)
  };
  return (
    <div className='login-container'>
      <div className='login'>
        <h1 className='login-header'>signup</h1>
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
          <label>
            displayedName:
            <input
              type='text'
              value={name}
              required
              className='login-email'
              onChange={nameHandler}
            />
          </label>
          {!isPending && <button className='login-button'>signup</button>}
          {isPending && <button className="login-button">loading</button> }
        </form>
      </div>
    </div>
  );
}

// sign up code auth
// firebase
//   .auth()
//   .createUserWithEmailAndPassword(email, password)
//   .then((userCredentials) => {
//     const user = userCredentials.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error.code);
//     console.log(error.massage);
//   });
