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
  const filteredExpenses = props.items.filter(x=>x.date.getFullYear().toString() === filteredYear);
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSettingFilter={setFilterHandler}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key= {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
