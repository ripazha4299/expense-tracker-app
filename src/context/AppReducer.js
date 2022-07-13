const initialState = {}

export default (state , action) => {
  switch (action.type) {

  case 'DELETE_TXN':
  return { 
    ...state,
    transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
  }
    
  case 'ADD_TXN':
    console.log(state)
  return { 
    ...state,
    transactions: [action.payload,...state.transactions],
    maxId: state.maxId+1
  }
  
  default:
    return state;
  }
}
