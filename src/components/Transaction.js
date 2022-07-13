import React from 'react';


export const Transaction = (props) => {
  const transaction = props.transaction;
  return (
    <>
    <li className={transaction.amount>=0?"plus":"minus"} key={transaction.id}>
        {transaction.text}<span>{transaction.amount>=0?"+":"-"} ₹{Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
    </li> 
    </>
  )
}
