import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2024')  

    const filterChangeHandler = (year) => {
      console.log("Selected year:", year)
      setFilteredYear(year)  
    };
    
    const filteredExpenses = props.data.filter((expense) => { 
      return new Date(expense.date).getFullYear().toString() == filteredYear
    });

    return (
      <Card className="expenses">
        <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList expenses={filteredExpenses}
        isLoading={props.isLoading}/>  
      </Card>
    );
  };
  

export default Expenses