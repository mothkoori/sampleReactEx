import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter;";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  const expenses = props.expenses;
  const [filteredYear,setFilterYear] = useState('');
  const filterExpenseHandler = (year) => {
    setFilterYear(year);
    console.log(year);
  };
  return (
    <div>
      <ExpensesFilter filterExpense={filterExpenseHandler}></ExpensesFilter>
      <Card className="expenses">
        <ExpenseItem
          title={expenses[0].title}
          price={expenses[0].price}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          price={expenses[1].price}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          price={expenses[2].price}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          price={expenses[3].price}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
