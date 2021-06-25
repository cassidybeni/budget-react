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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTransaction(transaction); //undefined
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
            onChange={(e) => setTransactions(e.target.value)}
            value={transaction.date}
          ></input>
        </label>
        <label>
          Name:
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setTransactions(e.target.value)}
            value={transaction.name}
          ></input>
        </label>
        <label>
          Amount:
          <input
            type="number"
            placeholder="amount"
            onChange={(e) => setTransactions(Number(e.target.value))}
            value={transaction.amount}
          ></input>
        </label>
        <label>
          From:
          <input
            type="text"
            placeholder="from"
            onChange={(e) => setTransactions(e.target.value)}
            value={transaction.from}
          ></input>
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(NewTransactionForm);
