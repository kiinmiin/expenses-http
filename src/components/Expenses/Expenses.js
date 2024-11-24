import React, { useState }  from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState("2023");

    const filterChangeHandler = (year) => {
      console.log("Selected year:", year); 
      setSelectedYear(year); 
    };
  
    const filteredExpenses = props.expenses.filter(
      (expense) => expense.date.getFullYear().toString() === selectedYear
    );
  
    return (
    <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length === 0 ? (
          <p>No expenses found for {selectedYear}.</p>
        ) : (
          filteredExpenses.map((expense, index) => (
            <ExpenseItem key={index} data={expense} />
          ))
        )}
      </Card>
    );
  };
  

export default Expenses