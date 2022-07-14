import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { deleteTransaction } from '../actions';

export const Transaction = (props) => {
  const dispatch = useDispatch();
  const transaction = props.transaction;
  return (
    <>
    <li className={transaction.amount>=0?"plus":"minus"} key={transaction.id}>
        {transaction.text}<span>{transaction.amount>=0?"+":"-"} ₹{Math.abs(transaction.amount)}</span>
        <button className="delete-btn" onClick={() => dispatch(deleteTransaction(transaction.id))}>x</button>
    </li> 
    </>
  )
}
