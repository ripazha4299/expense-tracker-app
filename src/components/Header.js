import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { addTransaction } from '../actions';

export const Header = () => {
  
  const newTransaction ={
    id:1,
    text:'Book',
    amount:352
  }
  const dispatch = useDispatch();
  console.log(dispatch,newTransaction)
  dispatch(addTransaction(newTransaction));

  return (
    <h2>Expense Tracker</h2>
  )
}
