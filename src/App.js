import {useState, useEffect} from 'react'; 
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [] 

const App = () => { 
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'));
    return expensesFromLS || [];  
  })

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]); 

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses] 
    })
  } 

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/> 
      <Expenses data={expenses}/> 
    </div>
  );
} 

export default App;