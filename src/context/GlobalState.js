import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

//initial state
const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ],
    maxId: 0
}

//create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TXN',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TXN',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{transactions:state.transactions,maxId:state.maxId,deleteTransaction,addTransaction}} >
                {children}
            </GlobalContext.Provider>)
}