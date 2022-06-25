import { useState, useEffect, useRef } from "react";
import { projectFirestore } from "../firebase/firebaseConfig";

export const useAddingDocument = (collection, _query) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const query = useRef(_query).current;

  useEffect(() => {
    let res = projectFirestore.collection(collection);
    // doesnt work with query
    // res = res.where(...query);

    const unsubscribe = res.onSnapshot(
      (snapshot) => {
        let result = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });
        setDocument(result);
        setError(null);
      },
      (err) => {
        console.log(err);
        setError("could not fetch data");
      }
    );
    return () => unsubscribe();
  }, [collection, query]);
  return { document, error };
};
