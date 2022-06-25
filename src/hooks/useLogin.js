import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/firebaseConfig";
import { useAuthContext } from "./useAuthContext";
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { state, dispatch } = useAuthContext();
  const Login = async (email, password) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      if (!res) {
        throw new Error("incorect password or email");
      } else {
        dispatch({ type: "LOG-IN", user: res.user });
        setIsPending(false);
      }
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { Login, isPending, error };
};
