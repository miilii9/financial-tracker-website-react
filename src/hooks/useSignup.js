import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/firebaseConfig";
import { useAuthContext } from "./useAuthContext";

export default function useSignup() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuthContext();
  const signup = async (email, password, displayName) => {
    setIsPending(true);
    setError(null);
    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (!res) {
        throw new error("couldnt complete sigup");
      }
      await res.user.updateProfile({ displayName });
      dispatch({ type: "LOG-IN", user: res.user });

      setError(null);
      setIsPending(false);
    } catch (err) {
      console.log(err.massage);
      setError(err.message);
      setIsPending(false);
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  });
  return { isPending, error, signup };
}
