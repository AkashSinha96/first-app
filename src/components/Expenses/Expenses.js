import "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const setFilterHandler = (enteredFilterData) => {
    console.log(enteredFilterData);
    setFilteredYear(enteredFilterData);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSettingFilter={setFilterHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
