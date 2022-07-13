import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = (props) => {
  const {deleteTransaction} = useContext(GlobalContext)
  const transaction = props.transaction;
  return (
    <>
    <li className={transaction.amount>=0?"plus":"minus"} key={transaction.id}>
        {transaction.text}<span>{transaction.amount>=0?"+":"-"} ₹{Math.abs(transaction.amount)}</span>
        <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li> 
    </>
  )
}
