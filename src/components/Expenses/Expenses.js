import "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const setFilterHandler = (enteredFilterData) => {
    setFilteredYear(enteredFilterData);
  };
  const filteredExpenses = props.items.filter(
    (x) => x.date.getFullYear().toString() === filteredYear
  );
  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSettingFilter={setFilterHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
