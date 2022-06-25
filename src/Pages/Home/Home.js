import React from "react";
import AddTransaction from "../../Components/AddTransaction/AddTransaction";
import { useAuthContext } from "../../hooks/useAuthContext";
import TransactionList from "./TransactionList";
import { useAddingDocument } from "../../hooks/useAddingDocument";
import "./Home.css";

export default function Home() {
  const { user } = useAuthContext();
  const { document, error } = useAddingDocument("transaction", [
    "uid",
    "==",
    user.uid,
  ]);
  return (
    <div className='home-div'>
      <AddTransaction className='addtrans-component' uid={user.uid} />
      <div className='translist-component'>
        {document && <TransactionList docs={document} />}
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
}
