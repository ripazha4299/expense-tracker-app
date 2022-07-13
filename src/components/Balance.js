import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  var balance = 0;
  transactions.map(transaction => (balance+=transaction.amount))
  balance = balance.toFixed(2)
  return (
    <React.Fragment>
        <h4>Your Balance</h4>
        <h1 id="balance">₹{balance}</h1>
    </React.Fragment>
  )
}
