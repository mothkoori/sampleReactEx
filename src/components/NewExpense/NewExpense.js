import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense = (props) => {

    const onSaveEnteredDataHandler = (enteredData) => {

        const expenseData = {
            ...enteredData,
            id:Math.random().toString()
        }
        props.onSaveExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveEnteredData={onSaveEnteredDataHandler}/>
        </div>
    );
}

export default NewExpense