import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/firebaseConfig";
import { useAuthContext } from "./useAuthContext";
export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuthContext();

  const logOut = async () => {
    setError(null);
    setIsPending(true);
    try {
      await projectAuth.signOut();
      dispatch({ type: "SIGN-OUT" });
      setError(null);
      setIsPending(false);
    } catch (err) {
      console.log(err);
      setError(err);
      setIsPending(false);
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  });
  return { error, logOut, isPending };
};
