import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { addTransaction } from '../actions';


export const TransactionForm = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const maxId = useSelector(state => state.maxId);
    const dispatch = useDispatch();
    const onSubmit = e =>{
        e.preventDefault();
        const newTransaction = {
            id: maxId+1,
            text,
            amount: +amount
        }
        dispatch(addTransaction(newTransaction));
    }
  return (
    <React.Fragment>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} required/>
                </div>
                <div className="form-control">
                <label htmlFor="amount">
                    Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <button className="btn" >Add transaction</button>
        </form>
    </React.Fragment>
  )
}
