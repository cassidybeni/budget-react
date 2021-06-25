import React, { useState } from "react";
import { withRouter } from "react-router";
import "./NewTransactionForm.css";

function NewTransactionForm(props) {
  const [transaction, setTransactions] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransactions({ ...transaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTransaction(transaction);
    props.history.push("/transactions");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            placeholder="date"
            onChange={handleChange}
            name="date"
            value={transaction.date}
          ></input>
        </label>
        <label>
          Name:
          <input
            type="text"
            placeholder="name"
            onChange={handleChange}
            name="name"
            value={transaction.name}
          ></input>
        </label>
        <label>
          Amount:
          <input
            type="number"
            placeholder="amount"
            onChange={handleChange}
            name="amount"
            value={transaction.amount}
          ></input>
        </label>
        <label>
          From:
          <input
            type="text"
            placeholder="from"
            onChange={handleChange}
            name="from"
            value={transaction.from}
          ></input>
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(NewTransactionForm);
