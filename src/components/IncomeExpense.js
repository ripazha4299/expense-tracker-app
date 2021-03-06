import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext);
  var Income = 0 ,Expense = 0;
  transactions.map(transaction => (transaction.amount>0?Income+=transaction.amount:Expense+=transaction.amount));
  Income = Income.toFixed(2);
  Expense = Math.abs(Expense).toFixed(2);

  return (
    <div>
        <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">₹{Income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">₹{Expense}</p>
        </div>
    </div>
  </div>
  )
}
