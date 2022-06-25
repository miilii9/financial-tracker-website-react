import React from "react";
import useAddingDocument from "../../hooks/useAddingDocument";
import "./TransactionList.css";
export default function TransactionList({ docs }) {
  return (
    <div className='trans-main-div'>
      <h2 className='transaction-header'>transaction list</h2>
      <ul className='transaction-list'>
        {docs.map((doc) => {
          //   console.log("amount  :", doc);
          //   console.log(" name :", doc.transactionName);
          return (
            <li className='transaction-ones' key={doc.id}>
              <h4 className='name-trans'>{doc.name}</h4>
              <p className='amount-trans'>${doc.amount}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
