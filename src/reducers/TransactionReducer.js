var initialState = {
    transactions: [],
    maxId: 0
}

const transactionReducer = (state = initialState, action) => {
    switch (action.type){
        
        case 'DELETE_TXN':
            return { 
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
      
        case 'ADD_TXN':
            return { 
            ...state,
            transactions: [action.payload,...state.transactions],
            maxId: state.maxId+1
            }
        
        case 'ADD_DUMMY_TXN':
            return {
                ...state,
                transactions: [action.payload],
                maxId:state.maxId+1
            }
    
        default:
            return state;
        }

}
export default transactionReducer;