import { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../firebase/firebaseConfig";

export const LoginContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOG-IN":
      return { ...state, user: action.payload };
    case "SIGN-OUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};
export const LoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);

  return (
    <LoginContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};
