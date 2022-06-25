import { useState, useEffect, useReducer } from "react";
import { projectFirestore, timeStamp } from "../firebase/firebaseConfig";

let initalState = {
  document: null,
  error: null,
  isPending: false,
  success: null,
};
const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return {
        isPending: true,
        error: null,
        success: false,
        document: null,
      };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        error: null,
        success: true,
        document: action.payload,
      };
    case "ERROR":
      return {
        isPending: false,
        error: action.payload,
        success: false,
        document: null,
      };
    default:
      return state;
  }
};
export const useFirestore = (collection) => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [response, dispatch] = useReducer(firestoreReducer, initalState);
  const ifNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };
  // console.log(response);
  const ref = projectFirestore.collection(collection);
  // adding new doc
  const addTransaction = async (doc) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const createdAt = "18:55";

      const addedDocument = await ref.add({ ...doc, createdAt });
      ifNotCancelled({ type: "ADDED_DOCUMENT", payload: addedDocument });
    } catch (err) {
      ifNotCancelled({ type: "ERROR", action: err.message });
      console.log(err.message);
    }
  };
  // removing a doc
  const removeTransaction = async (id) => {};
  useEffect(() => {
    return setIsCancelled(true);
  }, []);
  return { addTransaction, removeTransaction, response };
};
