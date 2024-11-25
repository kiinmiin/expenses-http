import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'
import { useState } from "react";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2023')  

    const filterChangeHandler = (year) => {
      console.log("Selected year:", year)
      setSelectedYear(year)  
    };
    
    const filteredExpenses = props.data.filter((expense) => 
      expense.date.getFullYear().toString() === selectedYear
    );

    return (
      <Card className="expenses">
        <ExpensesFilter selectedYear={selectedYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList expenses={filteredExpenses}/>  
      </Card>
    );
  };
  

export default Expenses