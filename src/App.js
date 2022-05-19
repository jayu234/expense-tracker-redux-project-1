import './App.css'
import Header from './components/Header'
import Balance from './components/Balance';
import History from './components/History';
// import IncomeExpense from './components/IncomeExpense';
import AddTransaction from './components/addTransaction';

function App() {
  return (
      <div className='container'>
        <Header />
        <Balance />
        <AddTransaction />
        <History />
        {/* <IncomeExpense /> */}
      </div>
  );
}

export default App;
