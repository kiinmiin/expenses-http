import {useState} from 'react'; 
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {  
  id: 'id1',
  date: new Date(2023, 0, 19),
  title: 'New book',
  amount: 30.99
  },
  {
    id: 'id2',
    date: new Date(2024, 0, 19),
    title: 'New Jeans',
    amount: 99.99
  },
  {
    id: 'id3',
    date: new Date(2024, 0 ,25),
    title: 'New bag',
    amount: 139.99
  }   
] 

const App = () => { 
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const [filteredYear, setFilteredYear] = useState('2024') 

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses] 
    })
  } 

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/> 
      <Expenses 
        data={expenses}
        filteredYear={filteredYear}
        onChangeYear={setFilteredYear}   
      /> 
    </div>
  );
} 

export default App;