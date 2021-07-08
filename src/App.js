import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";
const App = () => {
  const expenses = [
    { title: "car insurance", price: "265,23", date: new Date(2021, 2, 14) },
    { title: "bike insurance", price: "165,23", date: new Date(2021, 1, 14) },
    { title: "health insurance", price: "565,23", date: new Date(2021, 5, 24) },
    { title: "loan insurance", price: "65,13", date: new Date(2021, 4, 1) },
  ];
  
  const onAddExpenseHandler = (enteredData) => {
    console.log(enteredData);
}
  return (
    <div>
      <NewExpense onSaveExpense={onAddExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
