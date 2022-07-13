const initialState = {}

export default (state , action) => {
  switch (action.type) {

  case 'DELETE_TXN':
    return { 
      ...state,
      transactions: state.transactions.filter(transaction => transaction.id != action.payload)
    }

  default:
    return state;
  }
}
