import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title)
  const onClickHandler = () => {
    setTitle('clicked !!!!!');
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date ={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={onClickHandler}>change</button>
    </Card>
  );
}

export default ExpenseItem;
