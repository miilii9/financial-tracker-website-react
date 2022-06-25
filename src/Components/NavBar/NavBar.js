import React from "react";
import { NavLink } from "react-router-dom";

import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
// style
import "./NavBar.css";
export default function NavBar() {
  const { logOut } = useLogout();
  const { user } = useAuthContext();
  const signoutHandler = () => {
    logOut();
  };
  return (
    <div className='navbar'>
      <div className='bar'>
        <h1 className='logo'>myMoney</h1>
        <ul className='list'>
          {!user && (
            <>
              <li className='list-item'>
                <NavLink className='list-link' to='/login'>
                  Login
                </NavLink>
              </li>
              <li className='list-item'>
                <NavLink className='list-link' to='/signup'>
                  Signup
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li className='list-item'>hello , {user.displayName}</li>
              <li className='list-item'>
                <NavLink
                  className='list-link logout-button'
                  to='/login'
                  onClick={signoutHandler}>
                  sign-out
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
