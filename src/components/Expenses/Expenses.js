import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'

const Expenses = (props) => {
    // const [filteredYear, setFilteredYear] = useState('2024') 

    const filterChangeHandler = (filteredYear) => {
      console.log("Selected year:", filteredYear)  
    };
  
    return (
    <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler}/>
        {
          props.data.map((expense) => {
            return <ExpenseItem data={expense} key={expense.id}/>  
          }) 
        }  
      </Card>
    );
  };
  

export default Expenses