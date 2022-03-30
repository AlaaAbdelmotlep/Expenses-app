import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";


import "./Expense.css";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterHandlerChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterHandlerChange}
      />
      {/* outputting rendering content with 3 approach */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No Expenses Found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
      {/* we can replase that with && operator */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
      {filteredExpenses.length > 0 && (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      {/* {expensesContent} */}

      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expense;
