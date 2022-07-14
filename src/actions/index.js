export const deleteTransaction = (id) => {
    return({
        type: 'DELETE_TXN',
        payload: id
    })
}
export const addTransaction = (transaction) => {
    return({
        type: 'ADD_TXN',
        payload: transaction
    })
}
export const addDummyTransaction = (transaction) => {
    return({
        type: 'ADD_DUMMY_TXN',
        payload: transaction
    })
}