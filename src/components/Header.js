import React, { useEffect } from 'react'
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { addDummyTransaction } from '../actions';

export const Header = () => {
  
  // const transactions = useSelector((state) => (state.transactions));
  // const newTransaction ={
  //   id:1,
  //   text:'Book',
  //   amount:352
  // }
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(addDummyTransaction(newTransaction));
  // });
  return (
    <h2>Expense Tracker</h2>
  )
}
