import React from "react";
import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import "./AddTransaction.css";
export default function AddTransaction(uid) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useFirestore("transaction");
  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction({
      uid,
      name,
      amount,
    });
  };
  const newNameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const newAmountHandler = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };
  return (
    <div className='transaction'>
      <div>
        <h2>AddTransaction</h2>
        <div className='transaction-div'>
          <form className='transaction-form' onSubmit={submitHandler}>
            <label className='name-input'>
              <span className='name-label'>name:</span>
              <input type='text' value={name ?? ""} onChange={newNameHandler} />
            </label>
            <label className='amount-input'>
              <span className='amount-label'>Amount ($) :</span>
              <input
                type='text'
                value={amount ?? ""}
                onChange={newAmountHandler}
              />
            </label>
            <button className='add-btn'>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}
