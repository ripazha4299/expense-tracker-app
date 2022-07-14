import React from 'react';
import { Transaction } from './Transaction';
import { useSelector } from 'react-redux/es/exports';

export const History = () => {
    const transactions =  useSelector(state => state.transactions);

  return (
    <React.Fragment>
        <h3>History</h3>
        <ul id="list" className="list">
            {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}
        </ul>
    </React.Fragment>
  )
}
