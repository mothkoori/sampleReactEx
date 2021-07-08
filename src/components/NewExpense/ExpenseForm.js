import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [enteredData, setEnteredData] = useState({
  //     enteredtitle: "",
  //     enteredAmount: "",
  //     enteredDate: "2021-07-08",
  //   });
  const titleChangeEventHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setEnteredData({
    //   ...enteredData,
    //   enteredtitle: event.taget.value,
    // });
    // setEnteredData((prevState) => {
    //   return { ...prevState, enteredtitle: event.taget.value };
    // });
  };
  const amountChangeEventHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setEnteredData({
    //   ...enteredData,
    //   enteredAmount: event.taget.value,
    // });
    // setEnteredData((prevState) => {
    //   return { ...prevState, enteredAmount: event.taget.value };
    // });
  };
  const dateChangeEventHandler = (event) => {
    setEnteredDate(event.target.value);
    // setEnteredData({
    //   ...enteredData,
    //   enteredDate: event.taget.value,
    // });
    // setEnteredData((prevState) => {
    //   return { ...prevState, enteredDate: event.taget.value };
    // });
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    props.onSaveEnteredData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className='new-expense__controls'>
        <label>Title</label>
        <input
          type="text"
          value={enteredtitle}
          onChange={titleChangeEventHandler}
        />
      </div>
      <div className='new-expense__controls'>
        <label>Amount</label>
        <input
          type="number"
          value={enteredAmount}
          min="0.1"
          step="0.1"
          onChange={amountChangeEventHandler}
        />
      </div>
      <div className='new-expense__controls'>
        <label>Expense Date</label>
        <input
          type="date"
          value={enteredDate}
          min="2018-01-01"
          max="2022-12-31"
          onChange={dateChangeEventHandler}
        />
      </div>
      <div className='new-expense__controls'>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
