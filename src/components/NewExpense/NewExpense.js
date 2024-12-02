import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
import { useState } from "react"; 

const NewExpense = (props) => {
    const [editForm, setEditForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        } 
        props.onAddExpense(expenseData)
        setEditForm(false);
    } 
    
    const startEditingHandler = () => {
        console.log('form editor opened')
        setEditForm(true);
    } 

    const stopEditingHandler = () => {
        console.log('form editor closed')
        setEditForm(false);
    } 

    return (
        <div className="new-expense">
            {!editForm && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )} 
            {editForm && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler} 
                />
            )}
        </div>
    )
}

export default NewExpense