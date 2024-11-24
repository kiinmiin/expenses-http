import React, {useState}  from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [filteredYear, setFilteredYear] = useState('2024') 
  
  const expenses = [
    {  
    date: new Date(2024, 10, 12),
    title: 'New book',
    price: 30.99
    },
    {
      date: new Date(2024, 10, 12),
      title: 'New Jeans',
      price: 99.99
    }  
  ]     

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  } 

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/> 
      <Expenses 
        expenses={expenses}
        filteredYear={filteredYear} 
        onChangeYear={setFilteredYear} 
      /> 
    </div>
  );
} 

export default App;