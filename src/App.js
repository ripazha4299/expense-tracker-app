import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { History } from './components/History';
import { TransactionForm } from './components/TransactionForm';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import transactionReducer from './reducers/TransactionReducer';


const store = createStore(
  transactionReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


function App() {

  return (
    <>
    <Provider store={store}>
      <Header/>
      <div className="container">
        {/* <Balance/>
        <IncomeExpense/>
        <History/>
        <TransactionForm/> */}
      </div>
    </Provider>
    </>
  );
}

export default App;
