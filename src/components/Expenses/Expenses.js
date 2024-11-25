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

    let expensesContent = <p>No expenses found for {selectedYear}.</p>

    if (filteredExpenses.length > 0) {
      expensesContent = filteredExpenses.map((expense) => {
        return <ExpenseItem data={expense} key={expense.id}/>  
      })
    } 

    return (
      <Card className="expenses">
        <ExpensesFilter selectedYear={selectedYear} onChangeFilter={filterChangeHandler}/>
        {expensesContent} 
      </Card>
    );
  };
  

export default Expenses