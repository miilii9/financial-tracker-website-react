import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
export const useAuthContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("use Context  under selected area  ");
  }
  return context;
};
