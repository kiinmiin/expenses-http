import React from "react";
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    if (props.isLoading){
        return <p className='expenses-list__fallback'><b>Fetching expenses data...</b></p>
    } 

    if(props.expenses.length === 0) {
        return <p className='expenses-list__fallback'>No expenses found.</p>
    } 

    return(
        <ul className='expenses-list'>
        {
            props.expenses.length > 0 && props.expenses.map((expense) => {
                return <ExpenseItem data={expense} key={expense.id}/>  
            })
        }
        </ul>
    )
}

export default ExpensesList