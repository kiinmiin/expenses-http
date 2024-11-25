import ExpenseItem from "./ExpenseItem";
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
        {
          filteredExpenses.length === 0 ? (
            <p>No expenses found for {selectedYear}.</p>
          ) : (
          filteredExpenses.map((expense) => {
            return <ExpenseItem data={expense} key={expense.id}/>  
          }) 
        )}  
      </Card>
    );
  };
  

export default Expenses